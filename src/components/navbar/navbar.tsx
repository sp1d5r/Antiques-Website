import React, { useState } from "react";

function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav id="navbar" className={"sticky bg-red-950 px-8 top-0 left-0 w-screen h-[70px] flex items-center justify-between text-white z-20 p-[20px] transition-bg duration-300 ease-in"}>

                {/* This will display normally on larger screens and will be hidden on smaller screens */}
                <div className={"hidden lg:flex default-link-text gap-3"}>
                    <a href={"/products?type=chandeliers"}>CHANDELIERS</a>
                    <a href={"/products?type=chandeliers"}>WALL LIGHTS</a>
                    <a href={"/products?type=chandeliers"}>ANTIQUES</a>
                </div>

                <a href={"/"} className={"logo-text-title text-2xl"}>Matthew Upham Antiques</a>

                {/* Toggle Button */}
                <button className="lg:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <p className={"default-link-text"}>☰</p>
                </button>

                <div className={"hidden lg:flex default-link-text gap-3"}>
                    <a href={"/heritage"}>HERITAGE</ a>
                    <a href={"/press-articles"}>PRESS ARTICLES</a>
                    <a href={"/contact"}>CONTACT</a>
                </div>
            </nav>

            {/* Sidebar */}
            <div id={"sidebar"} className={`fixed top-0 bg-red-950 ${isSidebarOpen ? 'left-0' : 'left-full'} w-screen h-screen z-20 p-4 transition-all ease-in-out duration-500 lg:hidden`}>
                <button className="text-white mb-4" onClick={() => setSidebarOpen(false)}>Close</button>
                <div className="flex flex-col gap-3">
                    <a href={"/products?type=chandeliers"}>CHANDELIERS</a>
                    <a href={"/products?type=wall-lights"}>WALL LIGHTS</a>
                    <a href={"/products?type=antiques"}>ANTIQUES</a>
                    <a href={"/heritage"}>HERITAGE</a>
                    <a href={"/press-articles"}>PRESS ARTICLES</a>
                    <a href={"/contact"}>CONTACT</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
