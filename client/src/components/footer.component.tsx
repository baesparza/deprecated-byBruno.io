import { DOMAIN, EMAIL } from '../config';
import { socialNetworksLinks } from './../data/social-links.data';
import { IconButtonComponent } from './icon-button.component';

const currentYear = new Date().getFullYear();

export const FooterComponent: React.FC = () => (
    <footer className='relative container mx-auto px-4 pt-8 pb-12 md:pb-16 mt-16 border-t-4 border-white' >
        <div className='grid gap-6 lg:grid-cols-3'>
            {/* social networks */}
            <div className='lg:mr-auto text-xs flex gap-4 md:gap-2' >
                {socialNetworksLinks.map((l, i) => <IconButtonComponent key={i} link={l} rotate={i == 0}></IconButtonComponent>)}
            </div>

            {/* email contact */}
            <p className='lg:mx-auto text-xs' >
                Email me at <b className='font-medium'> <a href={`mailto:${EMAIL}`} > {EMAIL}</a></b>
            </p>

            {/* copyright */}
            <p className='lg:ml-auto text-xs' >
                Copyright © {currentYear} <b className='font-medium'><a href={`https://${DOMAIN}`}>Bruno Esparza</a></b>
            </p>
        </div>
    </footer>
);
