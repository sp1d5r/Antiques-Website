import React from "react";

type BreakerProps = {
    text: string
}

const Breaker = ({text} : BreakerProps) => {
    return <div className={"min-h-[25vh] pt-40 pb-20 flex justify-center items-center"}>
        <p className={"fancy-title-text"}>{text}</p>
    </div>
}

export default Breaker;