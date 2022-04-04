import React from "react";
import backgroundVideo from "../assets/vid.mp4";
import "../App.css"
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function Intro() {
    const style = {
        background: "black",
    }
    return (
        <section style={style}>
            <BackgroundVideo />
            <Overlay />
        </section>

    );
}

function BackgroundVideo() {
    const style = {
        opacity: 0.3,
        width: "100vh"
    };
    return (

        <video style={style} autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
        </video>
    );
}


function Overlay() {
    return (

        <div className='overlay'>
            <div className='title'>Tristan Sinclair</div>
            <div className='subtitle'>Computer Science - Football</div>
        </div>

    );
}
