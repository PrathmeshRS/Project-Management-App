import HourglassOutlined from "@ant-design/icons/HourglassOutlined";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
import StarFilled from "@ant-design/icons/StarFilled";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__heading">
                <HourglassOutlined style={{ fontSize: "30px" }} />
                <h3> My tasks</h3>
            </div>
            <div className="sidebar__workspaceHeader">
                <h3>Workspaces</h3>
                <PlusOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="sidebar__workspaces">

                <div className="sidebar__workspace">
                    <StarFilled style={{ fontSize: "18px" }} />
                    <h3>ACME</h3>
                </div>
            </div>
            <a href="https://github.com/PrathmeshRS">shindeprathmesh99@gmail.com</a>
        </div>
    )
}

export default Sidebar
