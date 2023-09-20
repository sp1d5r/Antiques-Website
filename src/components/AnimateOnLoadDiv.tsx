import React, { ReactNode, useEffect, useRef } from 'react';

interface AnimateOnLoadProps {
    animationClasses?: string;  // Additional animation classes you might want to add
    className?: string;  // Additional animation classes you might want to add
    children: ReactNode;        // Typing for children
}

const AnimateOnLoad: React.FC<AnimateOnLoadProps> = ({ children, className = "", animationClasses = 'duration-700 ease-in-out' }) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && divRef.current) {
                        // Apply animation classes when the div enters the viewport
                        divRef.current.classList.remove('opacity-0', 'translate-y-10');
                        divRef.current.classList.add('opacity-100', 'translate-y-0', ...animationClasses.split(' '));
                        // Optionally, you can unobserve after animation if desired
                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,  // Trigger the callback when at least 10% of the target is visible
            }
        );

        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                observer.unobserve(divRef.current);
            }
        };
    }, [animationClasses]);

    return (
        <div ref={divRef} className={`opacity-0 translate-y-10 transition-all ${animationClasses} ${className}`}>
            {children}
        </div>
    );
};

export default AnimateOnLoad;
