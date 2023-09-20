import React from "react";

const Footer = () => {
    return <div className={"w-full min-h-[30vh] border-t bg-white flex justify-between items-start p-16"}>
        <div className={"w-1/2 text-left flex flex-col gap-10"}>
            <a className={"logo-text-title-black"}>Matthew Upham Antiques</a>
            <p className={"text-black text-sm"}>Located in Fulham's Lillie Road Antiques district, Matthew Upham Antiques offers hand-restored European lighting, tested to UK standards. Our collection includes 19th-century furniture, decorative pieces, and garden statues.</p>
            <p className={"text-black text-sm"}>Sign up to our news letter:</p>
            <span><input placeholder={"email address"} className={"border p-2 h-[40px] w-[80%]"}/> <button className={"border p-2 h-[40px] bg-blue-200"}>Submit</button></span>
        </div>

        <div>
            <p>Links</p>
        </div>

    </div>
}

export default Footer;