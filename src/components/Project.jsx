import "./Project.css";
import PushpinOutlined from "@ant-design/icons/PushpinOutlined";
import DownOutlined from "@ant-design/icons/DownOutlined";
import Infotable from "./Infotable";
import Tasktable from "./Tasktable";
import { useEffect, useState } from "react";
import db from "../firebase.js";

const Project = ({ id }) => {

    const [details, setDetails] = useState();

    useEffect(() => {
        db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').doc(id).onSnapshot(snapshot => setDetails({
            name: snapshot.data().name,
            approver: snapshot.data().approver,
            duedate: snapshot.data().duedate,
            status: snapshot.data().status
        }));
    }, [])

    return (
        <div className="project">
            <div className="project__header">
                <h2>{details?.name} Project</h2>
                <div className="project__headerOptions">
                    <PushpinOutlined style={{ fontSize: "22px", margin: "14px" }} />
                    <DownOutlined style={{ fontSize: "22px", margin: "14px" }} />
                </div>
            </div>
            <div className="projectInfo">
                <Infotable approver={details?.approver} duedate={details?.duedate} currentstatus={details?.status} projectId={id} />
            </div>
            <div className="project__taskTable">
                <Tasktable projectId={id} />
            </div>

        </div>

    )
}

export default Project
