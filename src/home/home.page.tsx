import { useState } from 'react';
// import link from './icons/link.svg';
import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';
import menu from './icons/menu.svg';
// import info from './icons/info.svg';
import { ProjectModel, ProjectsData } from "./projects.data";

export function Home() {
    return (
        <div className='w-screen h-screen overflow-hidden flex flex-col'>
            <nav className="bg-black-darker p-4 flex justify-between">
                <h1 className="uppercase text-white font-medium text-xs">
                    Bruno Esparza
                </h1>

                {/* menu actuator */}
                <img src={menu} className="h-4" alt="menu icon" />
            </nav>

            {/* main content wrapper */}
            <main className='flex-grow bg-black-darker '>
                <div className='w-full h-full flex flex-row overflow-x-scroll snap snap-mandatory snap-x'>
                    {ProjectsData.map((p, idx, a) => {
                        const prev: VoidFunction | undefined = idx > 0
                            ? () => {
                                document
                                    ?.getElementById(`${idx - 1}`)
                                    ?.scrollIntoView({ behavior: 'smooth' });
                            }
                            : undefined;

                        const next: VoidFunction | undefined = idx < a.length - 1
                            ? () => {
                                document
                                    ?.getElementById(`${idx + 1}`)
                                    ?.scrollIntoView({ behavior: 'smooth' });

                            }
                            : undefined;

                        return (<ProjectView key={idx} idx={idx} next={next} prev={prev} project={p}></ProjectView>)
                    })}
                </div>
            </main>
        </div>
    );
}

const ProjectView: React.FC<{ project: ProjectModel, idx: number, prev?: VoidFunction, next?: VoidFunction }> = ({ idx, project, prev, next }) => {

    const [isLoaded, setLoaded] = useState(false);

    return (
        <section id={`${idx}`} className='h-full min-w-full w-screen relative snap-start'>
            {/* background decoration */}
            <img
                onLoad={() => setLoaded(() => true)}
                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                src={project.backgroundSmallUrl}
                alt={project.appName} />

            {/* dark opacity decoration */}
            <div className='absolute bottom-0 left-0 right-0 top-1/4 bg-gradient-to-b from-transparent to-black-darker'></div>

            {/* project content */}
            <div className='relative h-full flex flex-col px-4 pb-8 justify-end '>
                <h3 className='text-sm font-medium text-white'>
                    {project.projectName}
                </h3>
                <h2 className='text-base font-semibold text-white mb-2'>
                    {project.appName}
                </h2>
                <p className='text-xs font-normal text-white mb-20'>
                    {project.description}
                </p>

                {/* scroll controls */}
                <div className='flex justify-between'>
                    <button disabled={!prev} onClick={prev}>
                        <img src={chevronLeft} className={`h-6 ${!!prev ? 'opacity-100' : 'opacity-60'}`} alt="previous project" />
                    </button>

                    <button disabled={!next} onClick={next}>
                        <img src={chevronRight} className={`h-6 ${!!next ? 'opacity-100' : 'opacity-60'}`} alt="next project" />
                    </button>
                </div>
            </div>
        </section>
    );
};