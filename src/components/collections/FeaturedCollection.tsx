import React from "react";
import AnimateOnLoadDiv from "../AnimateOnLoadDiv";

type CollectionItem = {
    src: string,
    title: string
    soldOut: boolean,
    link: string
}

type FeaturedCollectionProps = {
    collectionName: string,
    collection: CollectionItem[]
}

const FeatureCollectionItem = ({src, title, soldOut, link} : CollectionItem) => {
    return <a className="flex-col justify-start items-end gap-5 inline-flex hover-scale" href={link}>
        <div className="w-72 h-80 bg-stone-950"></div>
        <div className="flex-col justify-start items-end gap-1 flex">
            <div
                className="w-72 text-black text-sm font-normal font-['Gill Sans'] leading-none tracking-wide">
                {title}
            </div>
            {soldOut && <div
                className="text-pink-900 text-sm font-bold font-['Gill Sans'] leading-none tracking-wide">sold
            </div>}
        </div>
    </a>
}

const FeaturedCollection = ({collectionName, collection}: FeaturedCollectionProps) => {
    return <AnimateOnLoadDiv className="container w-screen max-w-7xl mt-5 mb-10 min-h-[50vh] pl-3 md:pl-10 flex-col justify-start items-start gap-7 inline-flex">
        <div className="justify-start items-center max-w-screen gap-96 inline-flex">
            <div className="flex-col justify-start items-start gap-1.5 inline-flex text-start">
                <p className="w-96 text-black text-sm font-light font-['Gill Sans']">FEATURED</p>
                <p className="heading-text-default-black ">{collectionName}
                </p>
            </div>
        </div>
        <div className="justify-start items-start gap-7 overflow-x-scroll overflow-y-clip pb-10 h-full w-full inline-flex ">
            {
                collection.map((elem, index) => {
                    return <FeatureCollectionItem src={elem.src} title={elem.title} soldOut={elem.soldOut} link={elem.link} />
                })
            }
        </div>
    </AnimateOnLoadDiv>
}

export default FeaturedCollection;