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
            <div className='absolute inset-0 bg-black-lightest top-[30rem] z-0'></div>

            <HeaderComponent />

            {/* main content wrapper */}
            <HomeHeroComponent />


            <section className='relative container mx-auto px-4'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-white font-bold text-8xl whitespace-pre-wrap -mb-10'>
                        Relevant<br />Projects
                    </h3>

                    <NavLink to='/all-projects' className='whitespace-nowrap bg-white text-base font-medium px-6 py-4 rounded-xl flex flex-nowrap gap-4 items-center'>
                        <span>
                            View all
                        </span>
                        <FiPlusCircle />
                    </NavLink>
                </div>

                {<Projects></Projects>}
            </section>

            <FooterComponent />
        </div>

    );
}




const Projects: React.FC = () => {
    const { data, error, loading } = useRecentProjects();
    console.log({ data, error, loading });

    if (loading)
        return <span>...</span>;

    if (error)
        return <span>No se pudieron cargar los proyectos</span>;

    return <div>
        data
    </div>
}


