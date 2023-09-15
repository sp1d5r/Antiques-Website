import React from "react";
import Lantern from "../assets/lantern/lantern-large.png";
import BlueLantern from "../assets/lantern/blue-lantern.png";
import ZoomedLantern from "../assets/lantern/zoomed-lantern.png"
import ParallaxDiv from "./parallax-div/ParallaxDiv";

const OverlayFeaturedCollection = ({}) => {
    return <div className={"flex relative flex-wrap mt-16 mb-16 justify-center lg:justify-evenly max-w-full lg:max-w-7xl gap-3 mx-auto min-h-[70vh]"}>
        <div className={"w-[max(45%,350px)] min-h-[50vh] relative"}>
            <img
                src={Lantern}
                alt={"Lantern"}
                className="hidden md:flex absolute -z-20 top-1/2 left-full max-w-7xl aspect-video transform -translate-x-full object-cover -translate-y-1/2 ">
            </img>
            <ParallaxDiv speed={0.4} className={"h-full m-10"} maxTranslate={20}>
                <img
                    src={BlueLantern}
                    alt={"Lantern"}
                    className="absolute opacity-90 top-1/2 left-full h-[min(40vh,250px)] w-[min(40vh,250px)] transform -translate-x-full -translate-y-1/2 object-cover shadow-2xl hover:scale-110 transition-transform transform duration-500" />
            </ParallaxDiv>
        </div>
        <div className={"flex flex-col justify-center gap-20 w-[min(50vh,400px)]"}>
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
                className={"slide-bg-button flex justify-center items-center p-6 space-x-2.5 border-2 border-black text-black hover-scale hover:text-white"}
                style={{ '--slide-bg-color': 'black' } as React.CSSProperties}
            >
                DISCOVER MORE
            </button>

        </div>
    </div>
}

export default OverlayFeaturedCollection;