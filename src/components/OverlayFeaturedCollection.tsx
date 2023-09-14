import React from "react";

const OverlayFeaturedCollection = ({}) => {
    return <div className={"flex relative flex-wrap mt-10 mb-10 justify-center md:justify-between max-w-7xl mx-auto min-h-[50vh]"}>
        <div className={"w-[min(50vw,400px)] min-h-[50vh] relative"}>
            <div
                className="absolute top-1/2 left-full h-[min(50vh,400px)] w-[min(50vh,400px)] aspect-w-1 aspect-h-1 transform -translate-x-full -translate-y-1/2 bg-red-500 p-4">
                Your content here
            </div>
            <div
                className="absolute top-1/2 left-full h-[min(40vh,200px)] w-[min(40vh,200px)] transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-4">
                Your content here
            </div>
        </div>
        <div className={"flex flex-col justify-center gap-20 w-[min(50vw,400px)]"}>
            <div className="justify-start items-center inline-flex">
                <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                    <div className={`max-w-full text-black text-sm font-light font-['Gill Sans']`}>FEATURED</div>
                    <div className="text-black text-2xl font-normal font-['Alice'] tracking-wide">Antique Home Collection
                    </div>
                    <div className="text-black text-2xl font-normal font-['Alice'] tracking-wide">Style your home using a collection of our antique sofas,  mirrors and decour
                    </div>
                </div>
            </div>
            <button
                className={"flex justify-center items-center p-6 space-x-2.5 border-2 border-black text-black hover-scale"}
                onMouseOver={() => {
                    console.log("in")
                }}
                onMouseOut={() => {
                    console.log("out")
                }}
            >
                DISCOVER MORE
            </button>

        </div>
    </div>
}

export default OverlayFeaturedCollection;