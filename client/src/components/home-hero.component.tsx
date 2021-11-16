import { FiArrowRight, FiGithub } from "react-icons/fi";
import profile from '../../assets/profile.jpg';
import { GITHUB } from "./../config";

export const HomeHeroComponent: React.FC = () => (
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


        {/* github direct link */}
        <a href={`https://${GITHUB}`} className='font-medium text-sm mt-12 flex gap-2 items-center transform transition-transform hover:translate-x-2' >
            <FiGithub></FiGithub>
            <span>
                Follow me on Github
            </span>
            <FiArrowRight></FiArrowRight>
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
);

