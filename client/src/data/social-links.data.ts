import { IconType } from 'react-icons';
import { FiGithub, FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";
import { DOMAIN, EMAIL, GITHUB } from '../config';


export interface SocialLink {
    icon: IconType;
    title: string;
    textUrl: string;
    redirect: string;
    type: 'CONTACT' | 'SOCIAL_NETWORK';
}

export const allSocialLinks: Readonly<Array<SocialLink>> = [
    {
        icon: FiLinkedin,
        title: 'LinkedIn',
        textUrl: 'linkedin.com/in/bruno-esparza-c',
        redirect: 'https://www.linkedin.com/in/bruno-esparza-c/',
        type: 'SOCIAL_NETWORK'
    },
    {
        icon: FiGithub,
        title: 'Github',
        textUrl: GITHUB,
        redirect: `https://${GITHUB}`,
        type: 'SOCIAL_NETWORK'
    },
    {
        icon: FiMail,
        title: 'Mail',
        textUrl: EMAIL,
        redirect: `mailto:${EMAIL}`,
        type: 'CONTACT'
    },
    {
        icon: FiGlobe,
        title: 'Personal Website',
        textUrl: DOMAIN,
        redirect: `https://${DOMAIN}`,
        type: 'CONTACT'
    },
];

export const socialNetworksLinks = allSocialLinks.filter(l => l.type === 'SOCIAL_NETWORK');

export const contactLinks = allSocialLinks.filter(l => l.type === 'CONTACT');
