import React, {ReactNode, useEffect, useRef} from "react";

interface ParallaxDivProps {
    children?: ReactNode;
    speed?: number;
    className?: string;
    [x: string]: any; // For any additional props
}

function ParallaxDiv({ children, speed = 0.3, className = "", ...props }: ParallaxDivProps) {
    const parallaxRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const rect = parallaxRef.current.getBoundingClientRect();
                const divMiddle = rect.top + (rect.height / 2); // middle of the div relative to viewport
                const viewportMiddle = window.innerHeight / 2; // middle of the viewport

                // Check if div's middle is close to the viewport's middle. You can adjust the "10" for more precision.
                const isNearViewportMiddle = Math.abs(divMiddle - viewportMiddle) <= 10;

                if (isNearViewportMiddle) {
                    const scrollPosition = window.pageYOffset;
                    parallaxRef.current.style.transform = `translateY(${(scrollPosition - rect.top) * speed}px)`;
                }
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
