import React from 'react';

export default function AnimatedDiv(props: { buttonText: string, bg: string, onMouseOver: () => void, onMouseOut: () => void }) {
    return <button
        className={"slide-bg-button flex  justify-center items-center p-6 space-x-2.5 border-2 border-black text-black  hover:text-white hover:border-white"}
        style={{"--slide-bg-color": props.bg} as React.CSSProperties}
        onMouseOver={() => {
            props.onMouseOver();
        }}
        onMouseOut={() => {
            props.onMouseOut();
        }}
    >
        {props.buttonText}
    </button>;
}