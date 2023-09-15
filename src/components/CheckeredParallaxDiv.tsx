import React, {useEffect} from 'react';
import useInView from "../hooks/useInView";
import {changeNavBarColor} from "../services/NavbarChange";
import ParallaxDiv from "./parallax-div/ParallaxDiv";

interface CheckerboardParallaxProps {
    primaryImage: string;
    secondaryImage: string;
    header: string;
    subHeader: string;
    description: string;
    buttonLink: string;
    buttonText: string;
}

const CheckerboardParallax = ({ primaryImage, secondaryImage, header, subHeader, description, buttonLink, buttonText }: CheckerboardParallaxProps) => {
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            changeNavBarColor({color: "#502005"});
        }
    }, [inView])

    return (
        <section ref={ref} className="relative block md:block lg:block content-dark container m-auto">
            <div  className="relative container padding-top-md padding-bottom-md">
                <div className="flex flex-col md:flex-row md:items-center">

                    <div className="CheckerboardParallax__image-panel w-full h-full md:w-1/2 xl:w-[56%]">
                        <div className="image-wrapper parallax-container relative w-full">
                            <div className="h-auto w-3/4 mr-auto">
                                <img src={primaryImage} alt="Primary" />
                            </div>
                            <ParallaxDiv speed={0.3} className="parallax-image absolute top-1/4 right-0 h-auto w-1/2 right-0">
                                <img src={secondaryImage} alt="Secondary" />
                            </ParallaxDiv>
                        </div>
                    </div>

                    <div className="CheckerboardParallax__text-panel w-full h-full md:w-1/2 xl:w-[46%]">
                        <div className="padding-top-md padding-bottom-md text-left xl:pb-28 md:px-16 lg:px-20 xl:px-28 2xl:px-40">
                            <div className="content flex flex-col gap-1.5">
                                <h2 className="text-subheading text-black text-sm font-light font-['Gill Sans']">{subHeader}</h2>
                                <h2 className="text-black text-2xl font-normal font-['Alice']">{header}</h2>
                                <p className={"text-black text-xl font-normal tracking-wide"}>{description}</p>
                            </div>
                            <div className="flex flex-wrap mt-8 -mx-2 -my-4">
                                <button
                                    className={"slide-bg-button flex flex-1 justify-center items-center p-6 space-x-2.5 border-2 border-black text-black hover-scale hover:text-white"}
                                    style={{ '--slide-bg-color': 'black' } as React.CSSProperties}
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default CheckerboardParallax;