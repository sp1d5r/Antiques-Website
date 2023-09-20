import React from "react";
import Lantern from "../assets/lantern/lantern-large.png";
import ParallaxDiv from "./parallax-div/ParallaxDiv";

const OverlayFeatured = () => {
    return <section className={"w-[100vw] flex p-6 bg-white h-[80vh]"}>

        <div className={"bg-red-500 w-1/2 h-full overflow-hidden"}>
            <img src={Lantern} className={"slow-move-left object-cover min-h-full"} alt={"latner"} />

        </div>

        <div className={"w-1/2 h-full flex flex-col p-16 justify-center items-center  gap-10"}>
            <div className="justify-start items-center inline-flex w-[max(50%, 350px)] gap-5">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                    <div className={`max-w-full text-black text-sm font-light font-['Gill Sans']`}>FEATURED</div>
                    <div className="text-black text-2xl font-normal font-['Alice'] tracking-wide">Antique Home Collection
                    </div>
                    <div className="text-black text-xl font-normal tracking-wide">Style your home using a collection of our antique sofas,  mirrors and decour
                    </div>
                </div>
            </div>
            <button
                className={"slide-bg-button flex justify-center items-center p-6 space-x-2.5 border-2 border-black text-black hover:text-white z-10 w-full"}
                style={{ '--slide-bg-color': 'black' } as React.CSSProperties}
            >
                DISCOVER MORE
            </button>
        </div>

    </section>

}

export default OverlayFeatured;