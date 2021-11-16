import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import info from './icons/info.svg';
import profile from '../../assets/profile.jpg';
import { FooterComponent } from "../components/footer.component";
import { useRecentProjects } from "../hooks/use-recent-projects.hook";

export function Home() {


    return (
        <div className='relative w-full overflow-x-hidden'>
            {/* decoration background */}
            <div className='absolute inset-0 bg-black-lightest top-[30rem] z-0'></div>

            <NavigationBar ></NavigationBar>

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

            <FooterComponent></FooterComponent>
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
interface Link {
    label: string;
    goto: string;
    external: boolean;
}

const links: Readonly<Array<Link>> = [
    { label: 'Resume', goto: './resume', external: false },
];

const NavigationBar: React.FC = () => {
    return (
        <header className='container mx-auto pt-20 px-4 flex items-center'>
            {/* brand */}
            <div>
                <h1 className='font-medium text-base'>
                    Bruno Esparza
                </h1>

                <h2 className='text-sm'>
                    Frontend Developer, Binnarium
                </h2>
            </div>

            {/* spacer */}
            <div className='flex-grow-[2]'></div>

            <nav className='flex flex-row gap-4'>
                {
                    links.map((l, i) => <NavButton link={l} key={i}></NavButton>)
                }
            </nav>

            {/* spacer */}
            <div className='flex-grow'></div>

            {
                links.map((l, i) => <NavButton link={l} key={i}></NavButton>)
            }
        </header>
    );
};

const NavButton: React.FC<{ link: Link }> = ({ link }) => {

    const [hover, setHover] = useState(false)

    const parentClassName = 'hidden md:block relative p-2 cursor-pointer rounded overflow-hidden'

    const backgroundDecoration = <div className={`absolute inset-0 z-10 bg-gradient-to-tr from-[#8E2DE2] to-[#ac00e0] transition-opacity ${hover ? 'opacity-100 animate-pulse' : 'opacity-0'}`}></div>;

    const buttonContent = (<div className={`relative z-20  text-xs font-semibold transition-colors ${hover ? 'text-white' : 'text-black-darker'}`}>
        {link.label}
    </div>);


    return link.external

        // normal anchor link
        ? (<a href={link.goto} className={parentClassName} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {/* decorated background */}
            {backgroundDecoration}
            {/* link content */}
            {buttonContent}
        </a>)

        // react nav link
        : (<NavLink to={link.goto} className={parentClassName} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {/* decorated background */}
            {backgroundDecoration}

            {/* link content */}
            {buttonContent}
        </NavLink>);
};