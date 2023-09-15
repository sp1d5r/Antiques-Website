import React, {useEffect, useState} from "react";
import ParallaxDiv from "./parallax-div/ParallaxDiv";
import useInView from "../hooks/useInView";
import {changeNavBarColor} from "../services/NavbarChange";
import AnqituesMask from "../assets/antiques-mask.png";
import Antiques from "../assets/antiques2.png";

const COLORS = {
    imgHovered: "#2f0000",
    buttonHovered: "#480B0B",
    normal: "#6B1616"
}

const COLLECTION = {
    colors: COLORS,
    collectionType: "FEATURED",
    collectionName: "Antique Home Collection",
    collectionDescription: "Style your home using a collection of our antique sofas,  mirrors and decour.",
    callToAction: "DISCOVER MORE",
    maskImage: AnqituesMask,
    mainImage: Antiques
}

const FeaturedItemRight = ({collection = COLLECTION}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imgHovered, setImgHovered] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            changeNavBarColor({color: getHoveredColour()});
        }
    }, [inView])

    const getHoveredColour = () => {
        if (isHovered) {
            return collection.colors.buttonHovered;
        } else {
            if (imgHovered) {
                return collection.colors.imgHovered;
            } else {
                return collection.colors.normal;
            }
        }

    }

    useEffect(() => {
        changeNavBarColor({color: getHoveredColour()})
    }, [isHovered, imgHovered])

    return <div ref={ref} style={{background: getHoveredColour()}}
                className={"relative -z-0 mt-5 mb-5 w-screen p-16 min-h-[70vh] bg-stone-500 flex justify-center items-center transition-bg duration-300 ease-in"}
    >
        <img className={"opacity-10 absolute top-0 left-0 h-full w-full -z-20 object-cover"} src={collection.maskImage} alt={""}>

        </img>
        <div className={"flex -z-10 max-w-7xl gap-16 flex-wrap-reverse w-full min-h-full flex-row  justify-center xl:justify-between "}>
            <div className={"flex flex-col justify-between max-w-xl "}>
                <div className="justify-start items-center gap-96 inline-flex">
                    <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                        <div className={`max-w-full text-white text-sm font-light font-['Gill Sans']`}>{collection.collectionType}</div>
                        <div className="text-white text-2xl font-normal font-['Alice'] tracking-wide">{collection.collectionName}
                        </div>
                        <div className="text-white text-xl font-normal  tracking-wide">{collection.collectionDescription}
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
                    style={{background: getHoveredColour()}}
                >
                    {collection.callToAction}
                </button>

            </div>
            <ParallaxDiv maxTranslate={50} minTranslate={-50}>
                <img
                    src={collection.mainImage}
                    alt={"mountains"}
                    onMouseOver={() => {
                        setImgHovered(true)
                    }}
                    onMouseOut={() => {
                        setImgHovered(false)
                    }}
                    className={"block max-w-xl w-full h-full object-contain hover-scale shadow-lg smooth-edge"}
                />
            </ParallaxDiv>

        </div>
    </div>
}

export default FeaturedItemRight;