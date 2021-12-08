import { ProjectCardComponent } from "../components/project-card.component";
import { useAbstractProjectsLoader } from "../hooks/use-recent-projects.hook";

export const ProjectsGrid: React.FC<{ useLoader: useAbstractProjectsLoader }> = ({ useLoader }) => {
    const { data, error, loading } = useLoader();

    if (loading)
        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <ProjectCardComponent />
                <ProjectCardComponent />
            </div>
        );

    if (error)
        return (<>
            <h2 className="text-2xl text-black-dark dark:text-white font-bold">Oh No! An error ocurred</h2>
            <p className="text-black-dark dark:text-white">
                Maybe something has broken while loading the projects, come back later to see if the problem is fixed.
            </p>
        </>);

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                data!.projects.map(p => <ProjectCardComponent key={p.id} project={p} />)
            }
        </div>
    );
}

