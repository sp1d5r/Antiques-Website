import React from "react";
import Lantern from "../assets/lantern/lantern-large.png";
import ParallaxDiv from "./parallax-div/ParallaxDiv";

const OverlayFeaturedCollection = ({}) => {
    return <div className={"flex relative flex-wrap justify-center lg:justify-evenly max-w-full lg:max-w-7xl mx-auto min-h-[70vh]"}>
        <div className={"w-[max(45%,350px)] min-h-[50vh] relative"}>
            <img
                src={Lantern}
                alt={"Lantern"}
                className="hidden move-left md:flex absolute -z-20 top-1/2 left-full max-w-7xl aspect-video transform -translate-x-full object-cover -translate-y-1/2 ">
            </img>

        </div>
        <ParallaxDiv minTranslate={-20} maxTranslate={20} reverse={true} className={"flex flex-col justify-center gap-20 w-[min(50vh,400px)] bg-white -z-10 p-8"} >
            <div className="justify-start items-center inline-flex">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                    <div className={`max-w-full text-black text-sm font-light font-['Gill Sans']`}>FEATURED</div>
                    <div className="text-black text-2xl font-normal font-['Alice'] tracking-wide">Antique Home Collection
                    </div>
                    <div className="text-black text-xl font-normal tracking-wide">Style your home using a collection of our antique sofas,  mirrors and decour
                    </div>
                </div>
            </div>
            <button
                className={"slide-bg-button flex justify-center items-center p-6 space-x-2.5 border-2 border-black text-black hover:text-white"}
                style={{ '--slide-bg-color': 'black' } as React.CSSProperties}
            >
                DISCOVER MORE
            </button>

        </ParallaxDiv>
    </div>
}

export default OverlayFeaturedCollection;