import { DOMAIN, EMAIL } from '../config';
import { socialNetworksLinks } from './../data/social-links.data';
import { IconButtonComponent } from './icon-button.component';

const currentYear = new Date().getFullYear();

export const FooterComponent: React.FC = () => (
    <footer className='relative container mx-auto px-4 pt-8 pb-16 grid grid-cols-3 mt-16 border-t-4 border-white' >
        {/* copyright */}
        <p className='mr-auto text-xs' >
            Copyright © {currentYear} <b className='font-medium'><a href={`https://${DOMAIN}`}>Bruno Esparza</a></b>
        </p>

        {/* email contact */}
        <p className='mx-auto text-xs' >
            Email me at <b className='font-medium'> <a href={`mailto:${EMAIL}`} > {EMAIL}</a></b>
        </p>

        {/* social networks */}
        <p className='ml-auto text-xs flex gap-2' >
            {socialNetworksLinks.map((l, i) => <IconButtonComponent key={i} link={l} rotate={i == 0}></IconButtonComponent>)}
        </p>
    </footer>
);

