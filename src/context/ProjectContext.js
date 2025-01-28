import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
    // const [projects, setProjects] = useState([
    //     {
    //         id: 1,
    //         name: "Species Management",
    //         subitems: [
    //             { id: 1, name: "Add Species" },
    //             { id: 2, name: "View Species" },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         name: "Blog Management",
    //         subitems: [
    //             { id: 1, name: "Add Blog" },
    //             { id: 2, name: "View Blogs" },
    //         ],
    //     },
    // ]);
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Wildlife Explorer",
            subitems: [
                { id: 1, name: "Species Management", url: "/species" },
                { id: 2, name: "Endangered Speces Management", url: "/endangered" },
                { id: 2, name: "Threats", url: "/threats" },
                { id: 2, name: "Blogs Management", url: "/blogs" },
            ],
        },
        {
            id: 2,
            name: "Wildlife Explorer 2",
            subitems: [
                { id: 1, name: "Species Management", url: "/species" },
                { id: 2, name: "Blogs Management", url: "/blogs" },
                { id: 3, name: "Threats Management", url: "/threats" },
            ],
        }
    ]);

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <ProjectContext.Provider value={{ projects, selectedProject, setSelectedProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;
