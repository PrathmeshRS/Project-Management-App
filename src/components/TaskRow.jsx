import { Input } from "antd";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import db from "../firebase";
import "./TaskRow.css";

const TaskRow = ({ task, currowner, duedate, currstatus, currpriority, projectId, id }) => {

    const [owner, setOwner,] = useState(currowner);
    const [status, setStatus] = useState(currstatus);
    const [priority, setPriority] = useState(currpriority);
    const [update, setUpdate] = useState(false);
    const pId = projectId;
    const tid = id;
    const history = useHistory();

    useEffect(() => {
        console.log("Updating");

    }, [update])

    const editTask = () => {
        setUpdate(true);
        status && priority ? db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').doc(projectId).collection('tasks').doc(id).update({
            owner: owner,
            status: status,
            priority: priority,
        }) : alert("status and priority cannot be empty!");
        setUpdate(false);
    }


    return (
        <tr>
            <td>{task}</td>
            <td>
                <Input
                    type="text"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="Assign an owner"
                    required
                    onPressEnter={editTask}
                />
            </td>
            <td>{duedate}</td>
            <td>
                <Input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Completed"
                    required
                    onPressEnter={editTask}
                />
            </td>
            <td>
                <Input
                    type="text"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    placeholder="Low"
                    required
                    onPressEnter={editTask}
                />
            </td>
            <td><span className="taskView" onClick={(e) => history.push(`/project/${pId}/task/${tid}`)} >View</span></td>
        </tr>
    )
}

export default TaskRow;
