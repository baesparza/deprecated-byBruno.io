import React from "react";
import { Helmet } from "react-helmet-async";
import profile from '../../assets/profile.jpg';

export const MetaComponents: React.FC<{ title?: string, description?: string }> = ({ title, description }) => {
    const currDomain = document.URL;
    return (
        <Helmet>
            {!!title ? <title>{title}</title> : null}
            {!!title ? <meta property="og:title" content={title} /> : null}

            {!!description ? <meta name="description" content={description} /> : null}
            {!!description ? <meta property="og:description" content={description} /> : null}

            {/* Twitter meta tags */}
            <meta name="twitter:card" content="summary" />
            <meta property="og:url" content={currDomain} />
            <meta property="og:image" content={profile} />

        </Helmet>
    );
}
