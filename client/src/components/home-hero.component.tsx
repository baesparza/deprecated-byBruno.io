import { FiArrowRight, FiCornerLeftUp, FiGithub } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';
import profile from '../assets/profile.jpg';
import { GITHUB } from "./../config";


export const HomeHeroComponent: React.FC = () => (
    <main className='relative container mx-auto mt-12 md:mt-20 mb-16 px-8 flex flex-col'>
        <div id='leads' className='flex flex-col gap-4 items-start'>
            <DecoratedHeroText className="bg-gradient-to-r from-[#ff0084] to-[#33001b] dark:from-[#fbc2eb] dark:to-[#a6c1ee]">
                Developer.
            </DecoratedHeroText>
            <DecoratedHeroText className="bg-gradient-to-l from-[#7745ad] to-[#3e0b58] dark:from-[#6DD5FA] dark:to-[#fff]">
                Designer.
            </DecoratedHeroText>
            <DecoratedHeroText className="bg-gradient-to-r from-[#534c9c] to-[#2a2a66] dark:from-[#4AC29A] dark:to-[#BDFFF3]">
                Manager.
            </DecoratedHeroText>
        </div>

        {/* github direct link */}
        <a href={`https://${GITHUB}`} className='self-start font-medium text-sm md:text-base text-primary mt-12 flex gap-2 items-center transform transition-transform hover:translate-x-2' >
            <FiGithub></FiGithub>
            <span>
                Follow me on Github
            </span>
            <FiArrowRight></FiArrowRight>
        </a>

        {/* personal image */}
        <div className='hidden md:block absolute -right-4  lg:-right-12 xl:right-8 2xl:right-auto 2xl:left-2/3 bottom-32 lg:bottom-20 xl:bottom-4'>
            <div className="relative">
                <Tilt >
                    <img src={profile} alt="Selfie" className='md:w-56 lg:w-80 xl:w-96 drop-shadow-2xl ' />
                </Tilt>
                <span className='absolute top-100 text-xs lg:text-sm font-medium mt-4 flex gap-2 dark:text-white'>
                    <FiCornerLeftUp></FiCornerLeftUp>
                    <span>That's me</span>
                </span>
            </div>
        </div>
    </main >
);

const DecoratedHeroText: React.FC<React.HTMLProps<HTMLHeadingElement>> = ({ children, className, ...props }) => (
    <h2 {...props} className={`
        uppercase 
        text-6xl md:text-7xl lg:text-8xl 
        font-extrabold 
        bg-clip-text 
        text-black-dark dark:text-white 
        hover:text-transparent dark:hover:text-transparent 
        transition-all duration-300
        ${className}`}
    >
        {children}
    </h2 >
);



