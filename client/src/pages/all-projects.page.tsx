import { FooterComponent } from "../components/footer.component";
import { HeaderComponent } from "../components/header.component";
import { MetaComponents } from "../components/meta.component";
import { ProjectsGrid } from "../components/projects-grid.component";
import { useAllProjects } from "../hooks/use-recent-projects.hook";

export function AllProjectsPage() {

    return (
        <div className='relative w-full overflow-x-hidden'>
            {/* meta tags */}
            <MetaComponents title="Projects byBruno.io" description="Welcome, my name is Bruno and this is a showcase of all my work and projects." />

            {/* decoration background */}
            <div className='absolute inset-0 bg-black-lightest top-[20rem] md:top-[30rem] z-0 transition-colors dark:bg-black-dark'></div>

            <HeaderComponent />

            <section className='relative container mx-auto px-8 pt-20'>
                <h3 className='text-black-dark dark:text-white font-bold text-6xl sm:text-7xl md:text-8xl whitespace-pre-wrap mb-6'>
                    All Projects
                </h3>

                {<ProjectsGrid useLoader={useAllProjects}></ProjectsGrid>}
            </section>

            <FooterComponent />
        </div>
    );
}