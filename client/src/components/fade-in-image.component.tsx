import { useState } from "react";

export const FadeInImage: React.FC<React.HTMLProps<HTMLImageElement>> = ({ className, ...props }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className={className}>
            <figure className='relative w-full h-full'>
                <div className="absolute inset-0 z-10 bg-[#dedede] dark:bg-[#a1a1a1] animate-pulse"></div>

                <img className={`relative z-20 transition-opacity duration-1000 ${loaded && !!props.src ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoaded(true)}
                    {...props as any} />

            </figure>
        </div>
    );
};


