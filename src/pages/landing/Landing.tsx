import React from "react";
import Hero from "../../components/Hero";
import Breaker from "../../components/Breaker";
import FeaturedCollection from "../../components/collections/FeaturedCollection";
import FeaturedItemRight from "../../components/collections/FeaturedItemRight";
import AnqituesMask from "../../assets/antiques-mask.png";
import Antiques from "../../assets/Antiques3.png";
import GlobeLightMask from "../../assets/globe-light/globe-light-mask.png";
import GlobeLightImage from "../../assets/globe-light/globe-light-image2.png";
import CheckerboardParallax from "../../components/collections/CheckeredParallaxDiv";
import LargeChairImage from "../../assets/chair/large-chair-image.png";
import SquareChairImage from "../../assets/chair/square-chair-image.png";
import OverlayFeatured from "../../components/collections/OverlayFeatured";

const COLLECTION = [
    {
        src: "",
        title: "Dual Large Chandelier",
        soldOut: false,
        link: "/product-page?id=10"
    },
    {
        src: "",
        title: "Royal Large Chandelier",
        soldOut: true,
        link: "/product-page?id=10"
    },
    {
        src: "",
        title: "Royal Medium Chandelier",
        soldOut: true,
        link: "/product-page?id=10"
    },
    {
        src: "",
        title: "Royal Small Chandelier",
        soldOut: false,
        link: "/product-page?id=10"
    }
]

const ANTIQUE_COLORS = {
    imgHovered: "#321911",
    buttonHovered: "#321911",
    normal: "#572c20"
}

const ANTIQUE_COLLECTION = {
    colors: ANTIQUE_COLORS,
    collectionType: "FEATURED",
    collectionName: "ANTIQUE HOME COLLECTION",
    collectionDescription: "Style your home using a collection of our antique sofas,  mirrors and decour.",
    callToAction: "DISCOVER MORE",
    maskImage: AnqituesMask,
    mainImage: Antiques
}

const GLOBE_LIGHT_COLORS = {
    imgHovered: "#00092f",
    buttonHovered: "#050c2b",
    normal: "#050c2b"
}

const GLOBE_LIGHT_COLLECTION = {
    colors: GLOBE_LIGHT_COLORS,
    collectionType: "DISCOVER",
    collectionName: "GLOBE LIGHT",
    collectionDescription: "A patinated iron, clear glass and amethyst tinted faceted crystal flowers globe light. French, Circa 1930.",
    callToAction: "SEE PRODUCT",
    maskImage: GlobeLightMask,
    mainImage: GlobeLightImage
}


function Landing({}) {
    return <div>
        <Hero />
        <Breaker text={"High quality. Luxury. Furniture and Lighting."} />
        <FeaturedCollection collection={COLLECTION} collectionName={"THE ROYAL CHANDELIER COLLECTION VOL III"}/>
        <CheckerboardParallax primaryImage={LargeChairImage} secondaryImage={SquareChairImage} header={"GEORGE III OPEN ARMCHAIR"} subHeader={"NEW STOCK"} description={"This exquisite piece boasts an intriguing provenance, having originated from a private collection in London."} buttonLink={"/product-page?1"} buttonText={"VIEW STOCK"} />
        <FeaturedItemRight collection={ANTIQUE_COLLECTION}/>
        <OverlayFeatured />
        <FeaturedItemRight collection={GLOBE_LIGHT_COLLECTION}/>
    </div>
}

export default Landing;