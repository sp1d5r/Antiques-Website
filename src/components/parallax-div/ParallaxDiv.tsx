import React, {ReactNode, useEffect, useRef} from "react";

interface ParallaxDivProps {
    children?: ReactNode;
    speed?: number;
    className?: string;
    minTranslate?: number;
    maxTranslate?: number;
    [x: string]: any; // For any additional props
}


function ParallaxDiv({ children, speed = 0.3, className = "", minTranslate = -100,
                         maxTranslate = 100, ...props }: ParallaxDivProps) {
    const parallaxRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const rect = parallaxRef.current.getBoundingClientRect();
                const offsetTop = rect.top; // distance from top of the viewport to the top of the div

                const proportionCompleted = Math.min(Math.max(1 - (offsetTop / window.innerHeight), 0), 1);
                const translateYValue = minTranslate + (proportionCompleted * (maxTranslate - minTranslate));

                parallaxRef.current.style.transform = `translateY(${translateYValue}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [speed, children]);

    return (
        <div ref={parallaxRef} className={className} {...props}>
            {children}
        </div>
    );
}

export default ParallaxDiv;
