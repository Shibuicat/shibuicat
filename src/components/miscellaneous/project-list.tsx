import type { ProjectInfo } from "../../models/project.model";
import { Project } from "./project";
import { ProjectSearchBar } from "./project-searchbar";

type ProjectListProps = {
    projects: ProjectInfo[]
}

export const ProjectList = (props: ProjectListProps) => {
    const projects = props.projects.map((project, index) => (
        <Project
            key={index}
            link={project.link}
            name={project.name}
            description={project.description}
        />
    ));
    return <div className="project-container">
        <ProjectSearchBar />
        {projects}
    </div>;
}