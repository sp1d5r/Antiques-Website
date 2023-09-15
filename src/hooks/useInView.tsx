import { useState, useEffect, useRef } from 'react';

function useInView() {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when the observer callback fires
                setInView(entry.isIntersecting);
            },
            {
                root: null, // relative to document viewport
                rootMargin: '-25% 0px -25% 0px', // margin around root. Values are similar to css property. Unitless values not allowed
                threshold: 0.1 // indicates at what percentage of the target's visibility the observer's callback should be executed
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return {ref, inView};
}

export default useInView;