import { FiPlusCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { FooterComponent } from "../../components/footer.component";
import { HeaderComponent } from "../../components/header.component";
import { HomeHeroComponent } from "../../components/home-hero.component";
import { MetaComponents } from "../../components/meta.component";
import { ProjectsGrid } from "../../components/projects-grid.component";
import { useRecentProjects } from "../../hooks/use-recent-projects.hook";

export function Home() {

    return (
        <div className='relative w-full overflow-x-hidden'>
            {/* meta tags */}
            <MetaComponents title="Welcome to byBruno.io" description="Welcome, my name is Bruno and this is a showcase of all my work and projects." />

            {/* decoration background */}
            <div className='absolute inset-0 bg-black-lightest top-[24rem] md:top-[30rem] z-0 transition-colors dark:bg-black-dark'></div>

            <HeaderComponent />

            {/* main content wrapper */}
            <HomeHeroComponent />

            <section id="projects" className='relative container mx-auto px-8'>
                <div className='flex flex-row items-center justify-between mb-8 sm:mb-0'>
                    <h3 className='text-black-dark dark:text-white font-bold text-6xl sm:text-7xl md:text-8xl whitespace-pre-wrap md:-mb-6'>
                        Relevant<br />Projects
                    </h3>

                    <NavLink to='/all-projects' className='transition-colors bg-white dark:bg-black-darker text-xs md:text-base font-medium px-3 md:px-6 py-2 md:py-4 rounded-md md:rounded-xl '>
                        <div className="flex flex-nowrap gap-2 md:gap-4 items-center dark:text-white">
                            <span className="whitespace-nowrap">
                                View all
                            </span>
                            <FiPlusCircle />
                        </div>
                    </NavLink>
                </div>

                {<ProjectsGrid useLoader={useRecentProjects}></ProjectsGrid>}
            </section>

            <FooterComponent />
        </div>
    );
}



