import { Project } from "./project";
import { ProjectSearchBar } from "./project-searchbar";

type ProjectListProps = {

}

export const ProjectList = (props: ProjectListProps) => {
    return <div className="project-container">
        <ProjectSearchBar />
        <Project />
    </div>;
}