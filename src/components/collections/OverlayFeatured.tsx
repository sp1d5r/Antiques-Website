import React from "react";
import Lantern from "../../assets/lantern/lantern-large.png";

const OverlayFeatured = () => {
    return <section className={"container w-[100vw] flex p-6 bg-white min-h-[80vh] flex-wrap justify-center items-center"}>

        <div className={"bg-red-500 w-1/2 h-full overflow-hidden min-w-[350px]"}>
            <img src={Lantern} className={"slow-move-left object-cover min-h-full"} alt={"latner"} />

        </div>

        <div className={"w-1/2 h-full flex flex-col  p-2 md:p-16 justify-center items-center gap-10 min-w-[350px]"}>
            <div className="justify-start items-center inline-flex mobile-max-width gap-5">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                    <div className={`max-w-full text-black text-sm font-light font-['Gill Sans']`}>FEATURED</div>
                    <div className="heading-text-default-black">ANTIQUE HOME COLLECTION
                    </div>
                    <div className="default-p-text-black">Style your home using a collection of our antique sofas,  mirrors and decour
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