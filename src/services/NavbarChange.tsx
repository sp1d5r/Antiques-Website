import React from "react";

type ChangeNavBarColorProps = {
    color: string
}

export const changeNavBarColor = ({color}: ChangeNavBarColorProps): void => {
    const navbar = document.getElementById("navbar");
    const sideOutBar = document.getElementById("sidebar");

    if (navbar ) {
        navbar.style.backgroundColor = color;
    }
    if (sideOutBar) {
        sideOutBar.style.backgroundColor = color;
    }
}
