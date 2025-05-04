
import React, { useState } from 'react';


type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
};

const Image: React.FC<ImageProps> = ({ 
    className = '', 
    src, 
    alt, 
    width, 
    height, 
    ...props 
}) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`
                inline-block 
                align-top 
                opacity-0 
                transition-opacity 
                ${loaded ? 'opacity-100' : ''}
                ${className}
            `.trim()}
            onLoad={() => setLoaded(true)}
            {...props}
        />
    );
};

export default Image;

