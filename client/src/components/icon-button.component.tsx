import { SocialLink } from "../data/social-links.data";

export const IconButtonComponent: React.FC<{ link: SocialLink, rotate: boolean }> = ({ link, rotate }) => (
    <a
        className={`p-1 transition-transform hover:-translate-y-1 ${rotate ? 'hover:rotate-12' : ''}`}
        href={link.redirect}
        target="_blank"
        rel="noopener noreferrer"
        title={link.title}
    >
        <link.icon className='text-base' > </link.icon>
    </a>
);