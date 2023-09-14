import React from "react";
import Hero from "../../components/Hero";
import Breaker from "../../components/Breaker";
import FeaturedCollection from "../../components/FeaturedCollection";
import FeaturedItemRight from "../../components/FeaturedItemRight";
import OverlayFeaturedCollection from "../../components/OverlayFeaturedCollection";

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

function Landing({}) {
    return <div>
        <Hero />
        <Breaker text={"High quality. Luxury. Furniture and Lighting."} />
        <FeaturedCollection collection={COLLECTION} collectionName={"The Royal Chandelier Collection Vol III"}/>
        <FeaturedItemRight />
        <OverlayFeaturedCollection />
    </div>
}

export default Landing;