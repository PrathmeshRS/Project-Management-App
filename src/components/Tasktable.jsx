import { Button, Input } from 'antd';
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import "./Tasktable.css";
import TaskRow from './TaskRow';
import { useEffect, useState } from 'react';
import db from '../firebase';

const Tasktable = ({ projectId }) => {

    const [tasks, setTasks] = useState([]);

    const [newtask, setNewtask] = useState("");
    const [newowner, setNewowner] = useState("");
    const [newdate, setNewdate] = useState("");
    const [newstatus, setNewstatus] = useState("");
    const [newpriority, setNewpriority] = useState("");
    const [insert, setInsert] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').doc(projectId).collection('tasks').onSnapshot(snapshot => setTasks(snapshot.docs.map(doc => ({
            id: doc.id,
            task: doc.data().task,
            owner: doc.data().owner,
            duedate: doc.data().duedate,
            status: doc.data().status,
            priority: doc.data().priority
        }))))
    }, []);

    const addTask = (e) => {
        if (newtask && newowner && newdate && newstatus && newpriority) {
            db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').doc(projectId).collection('tasks').add({
                task: newtask,
                owner: newowner,
                duedate: newdate,
                status: newstatus,
                priority: newpriority
            });
            setInsert(false);
            setError(false);
        } else {
            setError(true);
        }
        setNewtask(""); setNewowner(""); setNewpriority(""); setNewstatus(""); setNewdate("");
    }


    const handleAdd = (e) => {
        e.preventDefault();
        setInsert(true);
    }

    return (
        <div className="taskTable">
            <div className="taskTable__table">

                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Task Owner</th>
                            <th>Due date</th>
                            <th>Status</th>
                            <th>Priority</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(item => <TaskRow
                                task={item.task}
                                currowner={item.owner}
                                duedate={item.duedate}
                                currstatus={item.status}
                                currpriority={item.priority}
                                key={item.id}
                                projectId={projectId}
                                id={item.id}
                            />)
                        }
                        {insert && <tr>
                            <td>
                                <Input
                                    type="text"
                                    value={newtask}
                                    onChange={(e) => setNewtask(e.target.value)}
                                    placeholder="State the task"
                                    required
                                    onPressEnter={addTask}
                                />
                            </td>
                            <td>
                                <Input
                                    type="text"
                                    value={newowner}
                                    onChange={(e) => setNewowner(e.target.value)}
                                    placeholder="Assign an owner"
                                    required
                                    onPressEnter={addTask}
                                />
                            </td>
                            <td>
                                <Input
                                    type="text"
                                    value={newdate}
                                    onChange={(e) => setNewdate(e.target.value)}
                                    placeholder="Enter date"
                                    required
                                    onPressEnter={addTask}
                                />
                            </td>
                            <td>
                                <Input
                                    type="text"
                                    value={newstatus}
                                    onChange={(e) => setNewstatus(e.target.value)}
                                    placeholder="Enter status"
                                    required
                                    onPressEnter={addTask}
                                />
                            </td>
                            <td>
                                <Input
                                    type="text"
                                    value={newpriority}
                                    onChange={(e) => setNewpriority(e.target.value)}
                                    placeholder="Enter priority"
                                    required
                                    onPressEnter={addTask}
                                />
                            </td>
                        </tr>}

                    </tbody>
                </table>
                {
                    error && <p style={{ color: "red" }}>Please fill the required fields</p>
                }
            </div>

            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                    borderRadius: 14,
                    border: "1px solid grey",
                    backgroundColor: "white",
                    cursor: "pointer",
                    padding: "6px"
                }}
            >
                <PlusOutlined />
                    Create a task
        </Button>
        </div>
    );
}

export default Tasktable;