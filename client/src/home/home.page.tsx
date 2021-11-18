import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { FooterComponent } from "../components/footer.component";
import { HeaderComponent } from "../components/header.component";
import { HomeHeroComponent } from "../components/home-hero.component";
import { useRecentProjects } from "../hooks/use-recent-projects.hook";

export function Home() {

    return (
        <div className='relative w-full overflow-x-hidden'>
            {/* decoration background */}
            <div className='absolute inset-0 bg-black-lightest top-[24rem] md:top-[30rem] z-0'></div>

            <HeaderComponent />

            {/* main content wrapper */}
            <HomeHeroComponent />


            <section className='relative container mx-auto px-4'>
                <div className='flex flex-row items-center justify-between mb-8 sm:mb-0'>
                    <h3 className='text-white font-bold text-6xl sm:text-7xl md:text-8xl whitespace-pre-wrap  md:-mb-6'>
                        Relevant<br />Projects
                    </h3>

                    <NavLink to='/all-projects' className=' bg-white text-xs md:text-base font-medium px-3 md:px-6 py-2 md:py-4 rounded-md md:rounded-xl '>
                        <div className="flex flex-nowrap gap-2 md:gap-4 items-center">
                            <span className="whitespace-nowrap">
                                View all
                            </span>
                            <FiPlusCircle />
                        </div>
                    </NavLink>
                </div>

                {<ProjectsGrid></ProjectsGrid>}
            </section>

            <FooterComponent />
        </div>

    );
}

const ProjectsGrid: React.FC = () => {
    const { data, error, loading } = useRecentProjects();

    if (loading)
        return <span>...</span>;

    if (error)
        return <span>No se pudieron cargar los proyectos</span>;

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                data!.projects.map(p => (
                    <NavLink to={'/'} key={p.id}>
                        <article className="w-full transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                            {/* cover image */}
                            <div className="bg-white aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
                                {
                                    !!p.cover?.file.url
                                        ? <FadeInImage src={p.cover?.file.url} alt="" className="absolute inset-0" />
                                        : null
                                }
                            </div>

                            {/* project name */}
                            <h3 className="text-sm font-medium pt-2 truncate">
                                {p.properties.title.title[0].plain_text}
                            </h3>

                            {/* project name */}
                            <p className="text-xs pt-1 line-clamp-3">
                                {p.properties.shortDescription.rich_text.map(t => t.plain_text).join(' ')}
                            </p>
                        </article>
                    </NavLink>
                ))
            }
        </div>
    );
}

const FadeInImage: React.FC<React.HTMLProps<HTMLImageElement>> = ({ className, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (

        <div className={className}>
            <div className='relative'>
                <img className={`relative z-20 transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)} {...props as any} />

                <div className="absolute inset-0 z-10 bg-[#dedede] animate-pulse"></div>
            </div>
        </div>
    );
};


