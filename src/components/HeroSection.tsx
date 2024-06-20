//Time: 28:00
//CSS To Look Up: flex / group / GLOW EFFECTS / [60vh] / 
//Aceternity UI - For Image Components

//Why isn't dark mode affecting all elements on the page?

import React from "react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    <span className="underline underline-offset-8 decoration-green-500">
                        {"Ross Kmet IS DOWN"}
                    </span> 
                    <br/> with the Bitches and the Hos.
                </h1>
                <p className="md:w-96 text-lg text-center lg:text-left text-indigo-500">
                    {"Los Angeles based Full-Stack Web Developer, Data Engineer, and Software Engineer."}
                </p>
                <Link href={"mailto:ross@formfunction.dev"} className="inline-block group">
                    <div className="text-3xl group-hover:text-pink-500">Send Nudes!</div>
                </Link>
            </div>
            <div className="w-72 h-72 bg-white">

            </div>
        </div>
    );
}