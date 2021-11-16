import profile from '../../assets/profile.jpg';
import { FooterComponent } from "../components/footer.component";
import { HeaderComponent } from "../components/header.component";
import { useRecentProjects } from "../hooks/use-recent-projects.hook";

export function Home() {

    return (
        <div className='relative w-full overflow-x-hidden'>
            {/* decoration background */}
            <div className='absolute inset-0 bg-black-lightest top-[30rem] z-0'></div>

            <HeaderComponent />

            {/* main content wrapper */}
            <main className='relative container mx-auto mt-20 mb-16 px-4 flex flex-col'>
                <div id='leads' className='flex flex-col gap-4'>
                    {
                        ['Designer.', 'Manager.', 'Developer.'].map((t, i) =>
                            <h2 key={i} className='text-8xl font-extrabold'>
                                {t}
                            </h2>
                        )
                    }
                </div>


                {/* TODO: github direct link */}
                <a href="" className='font-medium text-sm mt-12' >
                    Follow me on Github
                </a>

                {/* personal image */}
                <div className='absolute -right-16 bottom-0 '>
                    <div className="relative">
                        <img src={profile} alt="Selfie" className='w-80 shadow-2xl ' />
                        <span className='absolute top-100 text-sm font-medium mt-4'>
                            Thats me & my sisters
                        </span>
                    </div>
                </div>
            </main>

            <section className='relative container mx-auto px-4'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-white font-bold text-8xl whitespace-pre-wrap -mb-14'>
                        Relevant<br />Projects
                    </h3>

                    <button className='whitespace-nowrap bg-white text-base font-medium px-6 py-4 rounded-xl'>
                        View all
                    </button>
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


