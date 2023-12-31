import React, {useEffect, useState} from "react";
import ParallaxDiv from "./animated/parallax-div/ParallaxDiv";
import HeroImageLarge1 from "../assets/hero/large-hero-image-2.png";
import HeroImageLarge2 from "../assets/hero/antique-hero-image-2.png";
import HeroImageLarge3 from "../assets/hero/golden-hero-large-4.png";
import HeroImageSmall1 from "../assets/hero/small-hero-image-1.png";
import HeroImageSmall2 from "../assets/hero/small-antique-hero-image-1.png"
import HeroImageSmall3 from "../assets/hero/small-hero-image-3.png"
import {changeNavBarColor} from "../services/NavbarChange";
import useInView from "../hooks/useInView";

const HERO_TYPES = [
    {
        background: "linear-gradient(158deg, #280000 25.69%, #1F0000 88.11%)",
        top_colour: "#280000",
        main_colour: "#452B2B",
        title: "NEW ROYAL CHANDELIER COLLECTION",
        large_image: HeroImageLarge1,
        small_image: HeroImageSmall1,
        description: "A COLLECTION OF CHANDELIERS THAT EXUDE ELEGANCE AND LUXURY. EACH CHANDELIER IN THIS COLLECTION IS CRAFTED WITH THE UTMOST ATTENTION TO DETAIL, FEATURING INTRICATE DESIGNS AND HIGH-QUALITY MATERIALS FIT FOR ROYALTY."
    },
    {
        background: "linear-gradient(148deg, #012800 19.03%, #042103 93.53%)",
        top_colour: "#012800",
        main_colour: "#2F452B",
        title: "NEW ANTIQUE CHANDELIER COLLECTION",
        large_image: HeroImageLarge2,
        small_image: HeroImageSmall2,
        description: "A COLLECTION OF CHANDELIERS THAT EXUDE ELEGANCE AND LUXURY. EACH CHANDELIER IN THIS COLLECTION IS CRAFTED WITH THE UTMOST ATTENTION TO DETAIL, FEATURING INTRICATE DESIGNS AND HIGH-QUALITY MATERIALS FIT FOR ROYALTY."
    },
    {
        background: "linear-gradient(180deg, #423701 0%, #2E2600 100%)",
        top_colour: "#423701",
        main_colour: "#45412B;",
        title: "NEW COLLECTION CHANDELIER COLLECTION",
        large_image: HeroImageLarge3,
        small_image: HeroImageSmall3,
        description: "A COLLECTION OF CHANDELIERS THAT EXUDE ELEGANCE AND LUXURY. EACH CHANDELIER IN THIS COLLECTION IS CRAFTED WITH THE UTMOST ATTENTION TO DETAIL, FEATURING INTRICATE DESIGNS AND HIGH-QUALITY MATERIALS FIT FOR ROYALTY."
    },
]

function Hero({}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const {ref, inView} = useInView();
    const [fadeInFromRight, setFadeInFromRight] = useState(true);

    useEffect(() => {
        const scrollY = window.scrollY;
        const viewportHeight = 1000;
        console.log(scrollY, scrollY < viewportHeight)
        if (inView && scrollY < viewportHeight) {
            changeNavBarColor({color: HERO_TYPES[index].top_colour});
        }
    }, [inView, index])

    const changeIndex = (_index: number) => {
        if (_index === index) return;
        if (_index <= index) {
            setFadeInFromRight(false);
            setIndex(_index);
        } else {
            setFadeInFromRight(true);
            setIndex(_index);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                let nextIndex = prevIndex + direction;

                // If we reach the end or the beginning, reverse the direction
                if (nextIndex >= HERO_TYPES.length || nextIndex < 0) {
                    setDirection(-direction);
                    nextIndex = prevIndex + -direction; // Move to the next item in the new direction
                    setFadeInFromRight(direction < 0); // Set the animation based on direction
                } else {
                    setFadeInFromRight(direction > 0);
                }

                return nextIndex;
            });
        }, 3000); // Change image every 3000 milliseconds (3 seconds)

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [direction]);

    return <div
        ref={ref}
        style={{background: HERO_TYPES[index].background}}
        className={"flex flex-col md:flex-row w-screen min-h-[85vh] bg-blue-500 pt-10 p-8 top-px items-center justify-center text-left transition-bg duration-300 ease-in"}>

        <div className={"container flex flex-col justify-center md:flex-row gap-5"}>
            <ParallaxDiv key={HERO_TYPES[index].title} className={"hidden md:flex h-[10px] w-full md:w-[45%] md:h-0"}
                minTranslate={-40} maxTranslate={40}
            >
                <img
                    src={HERO_TYPES[index].large_image}
                    alt={HERO_TYPES[index].title}
                    className={`block w-full h-[50vh] md:h-[85vh] object-contain ${fadeInFromRight ? "fadeInFromRight" : "fadeInFromLeft"}`}
                />
            </ParallaxDiv>

            <div className={"min-h-[70vh] w-full md:w-[45%] p-5 flex flex-col gap-1 justify-center items-center gap-5 text-left"}>
                <img src={HERO_TYPES[index].small_image}
                     alt={HERO_TYPES[index].title}
                     key={HERO_TYPES[index].title}
                     className={`block max-w-[300px] w-full h-full object-contain ${fadeInFromRight ? "fadeInFromRight" : "fadeInFromLeft"}`}
                />
                <h1 className={"heading-text-default p-4"}>{HERO_TYPES[index].title}</h1>
                <p className={"default-p-text"}>{HERO_TYPES[index].description}</p>
                <div className={"flex w-full justify-between items-center"}>
                    <button
                        className={"flex justify-center items-center p-6 space-x-2.5 border-2 border-white text-white hover-scale"}
                    >
                        DISCOVER MORE
                    </button>
                    <div className={"flex gap-2 p-2"}>
                        <button
                            className={`h-3 w-3 border-2 rounded-3xl ${index === 0 ? "bg-white" : ""}`}
                            onClick={() => {changeIndex(0)}}
                        />
                        <button
                            className={`h-3 w-3 border-2 rounded-3xl ${index === 1 ? "bg-white" : ""}`}
                            onClick={() => {changeIndex(1)}}
                        />
                        <button
                            className={`h-3 w-3 border-2 rounded-3xl ${index === 2 ? "bg-white" : ""}`}
                            onClick={() => {changeIndex(2)}}
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>

}

export default Hero;