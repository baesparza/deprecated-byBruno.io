import { FiArrowRight, FiCornerLeftUp, FiGithub } from "react-icons/fi";
import profile from '../../assets/profile.jpg';
import { GITHUB } from "./../config";

export const HomeHeroComponent: React.FC = () => (
    <main className='relative container mx-auto mt-12 md:mt-20 mb-16 px-4 flex flex-col'>
        <div id='leads' className='flex flex-col gap-4'>
            {
                ['Designer.', 'Manager.', 'Developer.'].map((t, i) =>
                    <h2 key={i} className='text-6xl md:text-7xl lg:text-8xl font-extrabold'>
                        {t}
                    </h2>
                )
            }
        </div>

        {/* github direct link */}
        <a href={`https://${GITHUB}`} className='self-start font-medium text-xs md:text-sm text-primary mt-12 flex gap-2 items-center transform transition-transform hover:translate-x-2' >
            <FiGithub></FiGithub>
            <span>
                Follow me on Github
            </span>
            <FiArrowRight></FiArrowRight>
        </a>

        {/* personal image */}
        <div className='hidden md:block absolute -right-4 lg:-right-12 xl:right-8 2xl:right-auto 2xl:left-2/3 bottom-20 lg:bottom-12 xl:bottom-4'>
            <div className="relative">
                <img src={profile} alt="Selfie" className='md:w-56 lg:w-80 xl:w-96 drop-shadow-2xl ' />
                <span className='absolute top-100 text-xs lg:text-sm font-medium mt-4 flex gap-2'>
                    <FiCornerLeftUp></FiCornerLeftUp>
                    <span>That's me & my sisters</span>
                </span>
            </div>
        </div>
    </main>
);

