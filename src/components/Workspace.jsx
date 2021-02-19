import "./Workspace.css";
import EllipsisOutlined from "@ant-design/icons/EllipsisOutlined";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import { Button } from "antd";
import Project from "./Project";
import { useEffect, useState } from "react";
import db from "../firebase";

const Workspace = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        db.collection('acme').doc('pWJswcTjj5Wn3VTCrmg6').collection('projects').onSnapshot(snapshot => setProjects(snapshot.docs.map(doc => ({
            id: doc.id,
        }))));
    }, [])


    return (
        <div className="workspace">
            <div className="workspace__w">
                <p style={{ cursor: "pointer" }}> W </p>
            </div>
            <div className="workspace__wName">
                <h1>ACME</h1>
                <EllipsisOutlined style={{ fontSize: "40px" }} />
            </div>
            <div className="workspace__newProject">
                <Button style={{ color: "white", backgroundColor: "black", border: "none", outline: "none", padding: "14px", borderRadius: "20px", paddingLeft: "20px", cursor: "pointer" }}> <PlusOutlined /> Create a project</Button>
            </div>
            <div className="workspace__projects">
                {projects.map(project => <Project approver={"Weloft"} key={project.id} id={project.id} />)}
            </div>
        </div>
    )
}

export default Workspace;
