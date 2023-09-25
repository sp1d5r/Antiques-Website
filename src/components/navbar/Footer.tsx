import React from "react";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import PhoneIcon from "../../assets/icons/phone-solid.svg";
import EmailIcon from "../../assets/icons/envelope-solid.svg";


const Footer = () => {
    return <div className={"w-full min-h-[70vh] md:h-[70vh] border-t bg-white flex justify-between items-start p-4 md:p-16 gap-4 flex-wrap"}>
        <div className={"flex-1 text-left flex flex-col min-w-[350px] gap-20 h-full justify-evenly py-8"}>
            <div className={"flex flex-col gap-5"}>
                <a href={"/"} className={"logo-text-title-black text-4xl"}>Matthew Upham Antiques</a>
                <p className={"text-black text-lg"}>Located in Fulham's Lillie Road Antiques district, Matthew Upham Antiques offers hand-restored European lighting, tested to UK standards. Our collection includes 19th-century furniture, decorative pieces, and garden statues.</p>
            </div>
            <div className={"flex flex-col gap-5"}>
                <p className={"text-black text-lg"}>Sign up to our news letter:</p>
                <div>
                    <input placeholder={"email address"} className={"border p-2 h-[40px] w-[80%] m-0"}/>
                    <button className={"border p-2 h-[40px] bg-blue-800 text-white"}>Submit</button></div>
            </div>
        </div>
        <div className={"flex flex-col flex-1 min-w-[350px] text-left p-0 md:p-8 h-full justify-evenly gap-5"}>
            <div className={"flex flex-col w-full gap-5 text-2xl"}>
                <p>Explore</p>
                <div className={"flex flex-col pl-8 default-link-text-black"}>
                    <a className={"text-xl"} href={"/chandeliers"}>CHANDELIERS</a>
                    <a className={"text-xl"}href={"/chandeliers"}>WALL LIGHTS</a>
                    <a className={"text-xl"} href={"/chandeliers"}>ANTIQUES</a>
                </div>
            </div>
            <div className={"flex flex-col w-full gap-5 text-2xl"}>
                <p>History</p>
                <div className={"flex flex-col pl-8 default-link-text-black"}>
                    <a className={"text-xl"} href={"/chandeliers"}>HERITAGE</a>
                    <a className={"text-xl"}href={"/chandeliers"}>PRESS</a>
                </div>
            </div>

            <div className={"flex flex-col w-full gap-5 text-2xl"}>
                <p>Contact</p>
                <div className={"flex flex-col pl-8 default-link-text-black"}>
                    <a className={"text-xl"} href={"/chandeliers"}>Mobile: 020 7381 1601</a>
                    <a className={"text-xl"}href={"/chandeliers"}>Email:  Info@matthewupham.com</a>
                </div>
            </div>
            <div className={"flex gap-2"}>
                <img className={"h-8"} src={FacebookIcon} alt={"https://www.facebook.com/uphamantiques/"} />
                <img className={"h-8"} src={InstagramIcon} alt={"https://www.instagram.com/matthew_upham_antiques/"} />
                <img className={"h-8"} src={PhoneIcon} alt={"https://www.facebook.com/uphamantiques/"} />
                <img className={"h-8"} src={EmailIcon} alt={"https://www.facebook.com/uphamantiques/"} />
            </div>
        </div>

    </div>
}

export default Footer;