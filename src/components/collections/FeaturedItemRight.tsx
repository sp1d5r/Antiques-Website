import React, {useEffect, useState} from "react";
import ParallaxDiv from "../animated/parallax-div/ParallaxDiv";
import useInView from "../../hooks/useInView";
import {changeNavBarColor} from "../../services/NavbarChange";
import AnqituesMask from "../../assets/antiques-mask.png";
import Antiques from "../../assets/antiques2.png";
import AnimateOnLoadDiv from "../AnimateOnLoadDiv";
import AnimatedDiv from "../buttons/AnimatedDiv";

const COLORS = {
    imgHovered: "#2f0000",
    buttonHovered: "#480B0B",
    normal: "#6B1616"
}

const COLLECTION = {
    colors: COLORS,
    collectionType: "FEATURED",
    collectionName: "ANTIQUE HOME COLLECTION",
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
                className={" relative -z-0 w-screen p-4 md:p-20 min-h-[70vh] bg-stone-500 flex justify-center items-center transition-bg duration-300 ease-in"}
    >
        <img className={"opacity-5 absolute top-0 left-0 h-full w-full -z-20 object-cover"} src={collection.maskImage} alt={""}>

        </img>
        <div className={"container flex -z-10 gap-16 flex-wrap-reverse w-full min-h-full flex-row  justify-center xl:justify-between"}>
            <AnimateOnLoadDiv className={"flex flex-col justify-evenly mobile-max-width  gap-10"}>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                    <div className={`max-w-full text-white text-sm font-light font-['Gill Sans']`}>{collection.collectionType}</div>
                    <div className="text-white text-3xl font-normal font-['Alice'] ">{collection.collectionName}
                    </div>
                    <div className="default-p-text">{collection.collectionDescription}
                    </div>
                </div>

                <AnimatedDiv
                    buttonText={collection.callToAction}
                    bg={collection.colors.imgHovered}
                    onMouseOver={() => {
                        console.log("in")
                        setIsHovered(true)
                    }}
                    onMouseOut={() => {
                        setIsHovered(false)
                        console.log("out")
                    }}

                />

            </AnimateOnLoadDiv>
            <ParallaxDiv maxTranslate={20} minTranslate={-20}>
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