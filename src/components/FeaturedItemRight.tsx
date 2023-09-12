import React, {useState} from "react";
import ParallaxDiv from "./parallax-div/ParallaxDiv";

const FeaturedItemRight = ({}) => {
    const [isHovered, setIsHovered] = useState(false);

    return <div style={{background: isHovered ? "#480B0B" :"#826055"}}
                className={"w-screen p-16 min-h-[70vh] bg-stone-500 flex justify-evenly items-center transition-bg duration-300 ease-in"}
    >
        <div className={"flex w-full h-full flex-row justify-between"}>
            <div className={"flex flex-col justify-between max-w-sm"}>
                <div className="justify-start items-center gap-96 inline-flex">
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                        <div className={`w-96 text-white text-sm font-light font-['Gill Sans']`}>FEATURED</div>
                        <div className="text-white text-2xl font-normal font-['Alice'] tracking-wide">Antique Home Collection
                        </div>
                        <div className="text-white text-2xl font-normal font-['Alice'] tracking-wide">Style your home using a collection of our antique sofas,  mirrors and decour
                        </div>
                    </div>
                </div>
                <button
                    className={"flex justify-center items-center p-6 space-x-2.5 border-2 border-white text-white hover-scale"}
                    onMouseOver={() => {
                        console.log("in")
                        setIsHovered(true)
                    }}
                    onMouseOut={() => {
                        setIsHovered(false)
                        console.log("out")
                    }}
                >
                    DISCOVER MORE
                </button>

            </div>

            <ParallaxDiv speed={-0.05}>
                <img
                    src={"https://wallpaperaccess.com/full/1289981.jpg"}
                    alt={"mountains"}
                    className={"block max-w-3xl h-full object-contain hover-scale"}
                />
            </ParallaxDiv>
        </div>
    </div>
}

export default FeaturedItemRight;