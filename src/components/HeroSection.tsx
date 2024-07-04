import React from "react";
import Link from "next/link";


export default function HeroSection() {
    return (
    <>
        <section>
            <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-10 lg:gap-10 items-center justify-between">
                <div className="space-y-10 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-7xl font-bold">
                        <span className="underline underline-offset-8 decoration-green-500">
                            {"Ship Rock Solid Systems."}
                        </span> 
                        <br/> Get a Better Bottom Line.
                    </h1>
                    <h4 className="text-xl text-white underline underline-offset-8 decoration-indigo-600">
                        That's What I Bring To the Table.
                    </h4>
                    <p className="md:w-96 text-lg text-center lg:text-left text-orange-500">
                        {"I'm Ross, a Los Angeles based Full-Stack Web Developer, Data Engineer, and Software Engineer."}
                    </p>
                </div>
                <div className="px-5 w-72 h-72">

                </div>
            </div>
            <div className="py-20" />
        </section>
    </>
    );
}