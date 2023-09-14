import React, { useState } from "react";

function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav id="navbar" className={"sticky bg-red-950 top-0 left-0 w-screen h-20 flex items-center justify-between text-white z-10 p-[45px] transition-bg duration-300 ease-in"}>

                {/* This will display normally on larger screens and will be hidden on smaller screens */}
                <div className={"hidden lg:flex default-link-text gap-3"}>
                    <a>CHANDELIERS</a>
                    <a>WALL LIGHTS</a>
                    <a>ANTIQUES</a>
                </div>

                <a className={"logo-text-title"}>Matthew Upham Antiques</a>

                {/* Toggle Button */}
                <button className="lg:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <p className={"default-link-text"}>☰</p>
                </button>

                <div className={"hidden lg:flex default-link-text gap-3"}>
                    <a>HERITAGE</a>
                    <a>PRESS ARTICLES</a>
                    <a>CONTACT</a>
                </div>
            </nav>

            {/* Sidebar */}
            <div id={"sidebar"} className={`fixed top-0 bg-red-950 ${isSidebarOpen ? 'left-0' : 'left-full'} w-screen h-screen z-20 p-4 transition-all ease-in-out duration-500 lg:hidden`}>
                <button className="text-white mb-4" onClick={() => setSidebarOpen(false)}>Close</button>
                <div className="flex flex-col gap-3">
                    <a>CHANDELIERS</a>
                    <a>WALL LIGHTS</a>
                    <a>ANTIQUES</a>
                    <a>HERITAGE</a>
                    <a>PRESS ARTICLES</a>
                    <a>CONTACT</a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
