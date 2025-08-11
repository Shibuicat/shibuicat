import type { ProjectInfo } from "../../models/project.model";

type ProjectProps = ProjectInfo;

export const Project = (props: ProjectInfo) => {
    return (
        <div>
            <h2 className="project">
                <a href={props.link}>{props.name}</a>
            </h2>
            <p>
                {props.description}
            </p>
        </div>
    )
}