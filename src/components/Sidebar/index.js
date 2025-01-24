import React, { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import "./index.css";

const Sidebar = () => {
    const { projects, selectedProject, setSelectedProject } = useContext(ProjectContext);

    const [activeSubitem, setActiveSubitem] = useState(null);
    const handleSubItem = (id) => {
        setActiveSubitem(id);
    }

    return (
        <aside className="sidebar">
            <ul className="project-list">
                {projects &&
                    projects.map((project) => (
                        <li key={project.id} className="project-item">
                            <button
                                onClick={() =>
                                    setSelectedProject(
                                        selectedProject === project.id ? null : project.id
                                    )
                                }
                                className="project-button"
                            >
                                {project.name}
                            </button>
                            {selectedProject === project.id && (
                                <ul className="subitem-list">
                                    {project.subitems.map((subitem) => (
                                        <li key={subitem.id} className={`subitem ${activeSubitem === subitem.id ? `active` : ``} `} onClick={() => handleSubItem(subitem.id)}>
                                            {subitem.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
