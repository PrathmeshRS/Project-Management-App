import { Button } from "antd";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import db from "../firebase";
import "./Task.css";

const Task = () => {

    const [task, setTask] = useState({});

    const { projectId, taskId } = useParams()

    const history = useHistory();

    useState(() => {
        db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').doc(projectId).collection('tasks').doc(taskId).onSnapshot(snapshot => setTask({
            task: snapshot.data().task,
            owner: snapshot.data().owner,
            duedate: snapshot.data().duedate,
            status: snapshot.data().status,
            priority: snapshot.data().priority,
        }));
    }, []);


    return (
        <div className="taskPage">
            <div className="taskName">
                <h2>{task.task}</h2>
            </div>
            <div className="taskPage__task">
                <div className="taskPage__task__taskTable">
                    <div className="taskPage__task__taskTable__table">
                        <table>
                            <thead>
                                <th>Assignees</th>
                                <th>Due date</th>
                                <th>Priority</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{task.owner}</td>
                                    <td>{task.duedate}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="taskEdit">
                <Button disabled onClick={() => history.push('/na')}>Edit</Button>
            </div>
        </div>
    )
}

export default Task;
