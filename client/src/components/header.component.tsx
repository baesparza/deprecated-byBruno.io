import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconButtonComponent } from '../components/icon-button.component';
import { socialNetworksLinks } from '../data/social-links.data';

interface Link {
    label: string;
    goto?: string;
}

const links: Readonly<Array<Link>> = [
    { label: 'Home', goto: '/' },
    { label: 'All Projects' },
    { label: 'Articles' },
    { label: 'Resume', goto: '/resume' },
];

export const HeaderComponent: React.FC = () => {
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
            <p className='ml-auto text-xs flex gap-2' >
                {socialNetworksLinks.map((l, i) => <IconButtonComponent key={i} link={l} rotate={i == 0}></IconButtonComponent>)}
            </p>
        </header>
    );
};

const NavButton: React.FC<{ link: Link }> = ({ link }) => {

    const [hover, setHover] = useState(false)

    return <NavLink
        to={link.goto ?? ''}
        className={`relative p-2 overflow-hidden  ${!!link.goto ? 'cursor-pointer' : 'cursor-default'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    >
        {/* decorated background */}
        {
            !!link.goto
                ? <div className={`absolute bottom-0 left-0 right-0 h-1 z-10 bg-gradient-to-r from-[#2193b0] to-[#6dd5ed] transition-transform transform ${hover ? 'translate-x-0' : '-translate-x-full'}`}></div>
                : <div></div>
        }

        {/* link content */}
        <div className={`relative z-20 text-xs font-semibold  ${!!link.goto ? 'text-black-darker' : 'text-black-lighter'}`}>
            {link.label}
        </div>
    </NavLink>;
};