import { Button, Input } from "antd"
import { useEffect, useState } from "react"
import db from "../firebase";
import "./Infotable.css";

const Infotable = ({ approver, duedate, currentstatus, projectId }) => {
    const [date, setDate] = useState(duedate);
    const [status, setStatus] = useState(currentstatus);

    const submitValues = () => {
        if (date && status) {
            db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').doc(projectId).update({
                duedate: date,
                status: status
            })
            console.log("Project details updated!");
        }
    }

    useEffect(() => {
        setDate(duedate);
        setStatus(currentstatus);
    }, []);

    return (
        <div className="infotable">
            <table>
                <thead>
                    <tr>

                        <th>Approver</th>
                        <th>Due date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{approver}</td>
                        <td>
                            <Input
                                placeholder="Enter due date"
                                value={date}
                                type="text"
                                onPressEnter={submitValues}
                                onChange={(event) => setDate(event.target.value)}
                            />
                        </td>
                        <td>
                            <select
                                value={status}
                                onChange={(e) => {
                                    submitValues();
                                    setStatus(e.target.value)
                                }}
                                placeholder="Select status"
                            >
                                <option defaultValue>Select status</option>
                                <option
                                    value="Pending">
                                    Pending
                                </option>
                                <option
                                    value="Completed">
                                    Completed
                                </option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button style={{ border: "1px solid grey", padding: "4px", cursor: "pointer" }}>View</Button>
        </div>
    )
}

export default Infotable;
