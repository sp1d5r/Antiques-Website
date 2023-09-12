import React from "react";

function Navbar({}) {
    return <nav id="navbar" className={"sticky bg-red-950 top-0 left-0 w-screen h-20 flex items-center justify-between text-white z-10 p-[45px] transition-bg duration-300 ease-in"}>
        <div className={"default-link-text flex gap-3"}>
            <a>CHANDELIERS</a>
            <a>WALL LIGHTS</a>
            <a>ANTIQUES</a>
        </div>

        <a className={"logo-text-title"}>Matthew Upham Antiques</a>

        <div className={"default-link-text flex gap-3"}>
            <a>HERITAGE</a>
            <a>PRESS ARTICLES</a>
            <a>CONTACT</a>
        </div>
    </nav>
}

export default Navbar;