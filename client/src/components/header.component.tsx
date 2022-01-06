import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { IconButtonComponent } from '../components/icon-button.component';
import { socialNetworksLinks } from '../data/social-links.data';
import { useTheme } from "./../hooks/use-theme.hook";

interface Link {
    label: string;
    goto?: string;
    primary: boolean,
}

const links: Readonly<Array<Link>> = [
    { primary: false, label: 'Home', goto: '/' },
    { primary: false, label: 'Projects', goto: '/all-projects' },
    { primary: false, label: 'Articles', },
    { primary: true, label: 'Resume', goto: '/resume' },
];

export const HeaderComponent: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    return (
        <header className='container mx-auto mt-12 md:pt-20 px-8'>
            <div className='flex flex-col-reverse md:flex-row items-center gap-4 md:gap-2'>

                {/* brand */}
                <div className='self-start'>
                    <h1 className='font-semibold text-lg md:text-lg dark:text-white'>
                        Bruno Esparza
                    </h1>

                    <h2 className='text-base md:text-sm dark:text-white'>
                        Full Stack Developer, <i>Technisys</i>
                    </h2>
                    
                    <h2 className='text-base md:text-sm dark:text-white'>
                        Co-founder, <i>Binnarium</i>
                    </h2>
                </div>

                {/* spacer */}
                <div className='flex-grow-[2]'></div>

                {/* nav items */}
                <nav className='flex flex-row gap-2 lg:gap-4'>
                    {
                        links.map((l, i) => <NavButton link={l} key={i}></NavButton>)
                    }
                </nav>

                {/* spacer */}
                <div className='flex-grow'></div>

                {/* external links */}
                <div className='ml-auto text-xs flex gap-4 md:gap-2' >
                    {socialNetworksLinks.map((l, i) => <IconButtonComponent key={i} link={l} rotate={i == 0}></IconButtonComponent>)}

                    {/* theme button */}
                    <button
                        className='p-1 transition-transform hover:-translate-y-1 text-base dark:text-white'
                        title='Change theme'
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <FiMoon /> : <FiSun />}
                    </button>
                </div>
            </div>
        </header>
    );
};

const NavButton: React.FC<{ link: Link }> = ({ link }) => {

    const [hover, setHover] = useState(false)

    return <NavLink
        to={link.goto ?? ''}
        className={`relative p-1 lg:p-2 overflow-hidden  ${!!link.goto ? 'cursor-pointer' : 'cursor-default'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {/* decorated underline */}
        {
            !!link.goto
                ? <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${link.primary ? 'bg-primary' : 'bg-black-dark dark:bg-white'} transition-transform transform ${hover ? 'translate-x-0' : '-translate-x-full'}`}></div>
                : <></>
        }

        {/* link content */}
        <div className={`relative z-20 text-sm font-semibold whitespace-nowrap ${link.primary ? 'text-primary' : !!link.goto ? 'text-black-darker dark:text-white' : 'text-black-lighter'}`}>
            {link.label}
        </div>
    </NavLink>;
};
