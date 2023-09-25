import React, {useEffect, useRef, forwardRef, ReactNode} from "react";

interface ParallaxDivProps {
    children?: ReactNode;
    speed?: number;
    minTranslate?: number;
    maxTranslate?: number;
    reverse?: boolean;
    [x: string]: any; // For any additional props
}

const ParallaxDiv = forwardRef<HTMLDivElement, ParallaxDivProps>(
    ({ children, speed = 0.3, minTranslate = -100, maxTranslate = 100, reverse = false, ...props }, ref) => {
        const internalRef = useRef<HTMLDivElement>(null);
        const combinedRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;

        useEffect(() => {
            const handleScroll = () => {
                if (combinedRef.current) {
                    const rect = combinedRef.current.getBoundingClientRect();
                    const offsetTop = rect.top; // distance from top of viewport to top of div

                    let proportionCompleted = Math.min(Math.max(1 - (offsetTop / window.innerHeight), 0), 1);
                    if (reverse) {
                        proportionCompleted = 1 - proportionCompleted;
                    }

                    const translateYValue = minTranslate + (proportionCompleted * (maxTranslate - minTranslate));
                    combinedRef.current.style.transform = `translateY(${translateYValue}px)`;
                }
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, [speed, minTranslate, maxTranslate, reverse, children]);

        return (
            <div ref={combinedRef} {...props}>
                {children}
            </div>
        );
    }
);

export default ParallaxDiv;
