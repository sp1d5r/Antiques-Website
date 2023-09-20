import React from "react";
import Hero from "../../components/Hero";
import Breaker from "../../components/Breaker";
import FeaturedCollection from "../../components/FeaturedCollection";
import FeaturedItemRight from "../../components/FeaturedItemRight";
import OverlayFeaturedCollection from "../../components/OverlayFeaturedCollection";
import AnqituesMask from "../../assets/antiques-mask.png";
import Antiques from "../../assets/antiques2.png";
import GlobeLightMask from "../../assets/globe-light/globe-light-mask.png";
import GlobeLightImage from "../../assets/globe-light/globe-light-image2.png";
import CheckerboardParallax from "../../components/CheckeredParallaxDiv";
import LargeChairImage from "../../assets/chair/large-chair-image.png";
import SquareChairImage from "../../assets/chair/square-chair-image.png";
import OverlayFeatured from "../../components/OverlayFeatured";

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
    imgHovered: "#2f0000",
    buttonHovered: "#480B0B",
    normal: "#6B1616"
}

const ANTIQUE_COLLECTION = {
    colors: ANTIQUE_COLORS,
    collectionType: "FEATURED",
    collectionName: "Antique Home Collection",
    collectionDescription: "Style your home using a collection of our antique sofas,  mirrors and decour.",
    callToAction: "DISCOVER MORE",
    maskImage: AnqituesMask,
    mainImage: Antiques
}

const GLOBE_LIGHT_COLORS = {
    imgHovered: "#00092f",
    buttonHovered: "#050c2b",
    normal: "#0b1748"
}

const GLOBE_LIGHT_COLLECTION = {
    colors: GLOBE_LIGHT_COLORS,
    collectionType: "DISCOVER",
    collectionName: "Globe Light",
    collectionDescription: "A patinated iron, clear glass and amethyst tinted faceted crystal flowers globe light. French, Circa 1930.",
    callToAction: "SEE PRODUCT",
    maskImage: GlobeLightMask,
    mainImage: GlobeLightImage
}


function Landing({}) {
    return <div>
        <Hero />
        <Breaker text={"High quality. Luxury. Furniture and Lighting."} />
        <FeaturedCollection collection={COLLECTION} collectionName={"The Royal Chandelier Collection Vol III"}/>
        <FeaturedItemRight collection={ANTIQUE_COLLECTION}/>
        <CheckerboardParallax primaryImage={LargeChairImage} secondaryImage={SquareChairImage} header={"George III mahogany open armchair"} subHeader={"NEW STOCK"} description={"This exquisite piece boasts an intriguing provenance, having originated from a private collection in London."} buttonLink={"/product-page?1"} buttonText={"VIEW STOCK"} />
        <FeaturedItemRight collection={GLOBE_LIGHT_COLLECTION}/>
        <OverlayFeatured />
    </div>
}

export default Landing;