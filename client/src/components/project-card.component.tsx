import { FadeInImage } from "../components/fade-in-image.component";
import { ProjectModel } from "../models/project.model";

export const ProjectCardComponent: React.FC<{ project?: ProjectModel.Project }> = ({ project }) => (
    <article className="w-full transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
        {/* cover image */}
        <div className="bg-white dark:bg-black-dark aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
            <FadeInImage src={project?.cover?.file.url} alt={project?.properties.title.title[0].plain_text} className="absolute inset-0" />
        </div>

        {/* project name */}
        <h3 className="text-base font-medium pt-2 truncate text-black-darker dark:text-white">
            {project?.properties.title.title[0].plain_text}
        </h3>

        {/* project name */}
        <p className="text-sm pt-1 line-clamp-3 text-black-dark dark:text-white">
            {project?.properties.shortDescription.rich_text.map(t => t.plain_text).join(' ')}
        </p>
    </article>);

