import React, {useEffect, useState} from "react";
import ParallaxDiv from "./parallax-div/ParallaxDiv";
import HeroImageLarge1 from "../assets/large-hero-image-1.png";
import HeroImageLarge2 from "../assets/large-hero-image-2.png";
import HeroImageLarge3 from "../assets/large-hero-image-3.png";
import HeroImageSmall1 from "../assets/small-hero-image-1.png";
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
        small_image: HeroImageSmall1,
        description: "A COLLECTION OF CHANDELIERS THAT EXUDE ELEGANCE AND LUXURY. EACH CHANDELIER IN THIS COLLECTION IS CRAFTED WITH THE UTMOST ATTENTION TO DETAIL, FEATURING INTRICATE DESIGNS AND HIGH-QUALITY MATERIALS FIT FOR ROYALTY."
    },
    {
        background: "linear-gradient(180deg, #423701 0%, #2E2600 100%)",
        top_colour: "#423701",
        main_colour: "#45412B;",
        title: "NEW COLLECTION CHANDELIER COLLECTION",
        large_image: HeroImageLarge3,
        small_image: HeroImageSmall1,
        description: "A COLLECTION OF CHANDELIERS THAT EXUDE ELEGANCE AND LUXURY. EACH CHANDELIER IN THIS COLLECTION IS CRAFTED WITH THE UTMOST ATTENTION TO DETAIL, FEATURING INTRICATE DESIGNS AND HIGH-QUALITY MATERIALS FIT FOR ROYALTY."
    },
]

function Hero({}) {
    const [index, setIndex] = useState(0);
    const {ref, inView} = useInView();

    useEffect(() => {
        changeNavBarColor({color: HERO_TYPES[index].top_colour});
    }, [index])

    useEffect(() => {
        if (inView) {
            changeNavBarColor({color: HERO_TYPES[index].top_colour});
        }
    }, [inView])

    return <div
        ref={ref}
        style={{background: HERO_TYPES[index].background}}
        className={"flex flex-col md:flex-row w-screen h-[85vh] bg-blue-500 pt-10 p-8 top-px justify-evenly text-left transition-bg duration-300 ease-in"}>

        <ParallaxDiv key={HERO_TYPES[index].title} className={"h-[50vh] md:h-[85vh] w-full md:w-1/2 md:h-0"} speed={0.1}>
            <img
                src={HERO_TYPES[index].large_image}
                alt={HERO_TYPES[index].title}
                className={"block w-full h-full object-contain"}
            />
        </ParallaxDiv>

        <div className={"h-[70vh] w-full md:w-1/3 flex flex-col gap-1 justify-center items-center gap-5"}>
                <img src={HERO_TYPES[index].small_image}
                     alt={HERO_TYPES[index].title}
                     className={"block w-full h-full object-contain"}
                />
            <h1 className={"default-title-text"}>{HERO_TYPES[index].title}</h1>
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
                        onClick={() => {setIndex(0)}}
                    />
                    <button
                        className={`h-3 w-3 border-2 rounded-3xl ${index === 1 ? "bg-white" : ""}`}
                        onClick={() => {setIndex(1)}}
                    />
                    <button
                        className={`h-3 w-3 border-2 rounded-3xl ${index === 2 ? "bg-white" : ""}`}
                        onClick={() => {setIndex(2)}}
                    />
                </div>
            </div>
        </div>
    </div>

}

export default Hero;