import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDatabase } from "../hooks/use-api.hook";
// import link from './icons/link.svg';
import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';
import menu from './icons/menu.svg';
import x from './icons/x.svg';
// import info from './icons/info.svg';
import { ProjectModel, ProjectsData } from "./projects.data";

export function Home() {

    const { data, loading, error } = useDatabase('630e1232bc4e4280b7fdda038a8bd9bb');
    console.log({ data, a });
    return (
        <div className='fixed inset-0 overflow-hidden flex flex-col'>
            <NavigationBar></NavigationBar>

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

interface Link {
    label: string;
    goto: string;
    external: boolean;
}

const links: Readonly<Array<Link>> = [
    { label: 'Github', goto: 'https://github.com/baesparza', external: true },
    { label: 'LinkedIn', goto: 'https://www.linkedin.com/in/bruno-esparza-c/', external: true },
    { label: 'Resume', goto: './resume', external: false },
];


const NavigationBar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative bg-black-darker">
            <div className="container mx-auto p-4 flex gap-2 items-center">

                <h1 className="text-white font-semibold">
                    Bruno Esparza
                </h1>

                {/* space items to the border */}
                <div className="flex-grow"></div>

                {/* nav items */}
                {links.map((link, i) => <NavButton key={i} link={link}></NavButton>)}


                {/* menu actuator */}
                <button className='md:hidden' onClick={() => setOpen(true)}>
                    <img src={menu} className="h-4" alt="open menu icon" />
                </button>
            </div>

            <div className={`fixed inset-0 w-full h-full bg-black-darker z-50 md:hidden transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='relative p-8 h-full flex flex-col gap-8'>
                    {/* close button */}
                    <button onClick={() => setOpen(false)} className='text-white self-end'>
                        <img src={x} className="h-4" alt="close menu icon" />
                    </button>

                    <div className="flex-grow"></div>

                    {links.map((link, i) =>
                        link.external
                            ? <a key={i} href={link.goto} className={`self-start text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] transition-all delay-300 duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} target='_blank' rel='noopener noreferrer'                            >
                                {link.label}
                                <div className='h-1 w-full bg-white bg-gradient-to-r from-[#f12711] to-[#f5af19]' ></div>
                            </a>
                            : <NavLink key={i} to={link.goto} className={`self-start text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19] transition-all delay-300 duration-300 ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                                {link.label}
                                <div className='h-1 w-full bg-white bg-gradient-to-r from-[#f12711] to-[#f5af19]' ></div>
                            </NavLink>
                    )}

                    <div className="flex-grow-[2]"></div>

                    <h2 className={`text-white flex flex-row items-center gap-4 delay-500 duration-500 ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className='h-1 bg-white w-6'></div>
                        Bruno Esparza
                    </h2>
                </div>
            </div>
        </nav>
    );
}

const NavButton: React.FC<{ link: Link }> = ({ link }) => {

    const [hover, setHover] = useState(false)

    if (link.external)
        return <a
            href={link.goto}
            className='hidden md:block relative p-2 cursor-pointer rounded overflow-hidden'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            target='_blank' rel='noopener noreferrer'
        >
            {/* decorated background */}
            <div className={`absolute inset-0 z-10 bg-gradient-to-tr from-[#8E2DE2] to-[#ac00e0] transition-opacity ${hover ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>

            {/* link content */}
            <div className='relative z-20 text-white text-xs font-semibold'>
                {link.label}
            </div>
        </a>
    return <NavLink
        to={link.goto}
        className='hidden md:block relative p-2 cursor-pointer rounded overflow-hidden'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {/* decorated background */}
        <div className={`absolute inset-0 z-10 bg-gradient-to-tr from-[#8E2DE2] to-[#ac00e0] transition-opacity ${hover ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>

        {/* link content */}
        <div className='relative z-20 text-white text-xs font-semibold'>
            {link.label}
        </div>
    </NavLink>
};

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
            <div className='absolute inset-0  bg-gradient-to-b from-transparent to-black-darker'></div>

            {/* project content */}
            <div className='relative h-full container mx-auto flex flex-col px-4 pb-8 justify-end '>
                <div className='w-full md:w-4/6'>
                    {!!project.projectName
                        ? (
                            <h3 className='text-base md:text-lg font-medium text-white'>
                                {project.appName}
                            </h3>
                        )
                        : null
                    }
                    <h2 className='text-lg md:text-xl font-semibold text-white mb-2'>
                        {project.projectName}
                    </h2>
                    <p className='text-sm md:text-base font-normal text-white mb-10 line-clamp-4'>
                        {project.description}
                    </p>
                </div>

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