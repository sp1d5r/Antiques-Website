import React from "react";

type ChangeNavBarColorProps = {
    color: string
}

export const changeNavBarColor = ({color}: ChangeNavBarColorProps): void => {
    const navbar = document.getElementById("navbar");

    if (navbar) {
        navbar.style.backgroundColor = color;
    }
}
