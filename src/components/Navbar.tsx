import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DarkModeButton } from "./DarkModeButton";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

export default function Navbar() {

    const socials = [
        {
            link: "https://www.linkedin.com/in/ross-kmet",
            label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            link: "https://github.com/rosskmet",
            label: "Github",
            Icon: SiGithub
        }
    ]

    return (
        <div className="">
            <nav className="py-2 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold">
                        Ross <span className="text-black bg-white">Kmet</span>
                    </h1>
                </Link>
                <div className="flex items-left gap-1">

                </div>
                <div className="flex items-center gap-2">
                    <Button variant="link">
                        <Link href="/about">
                            About
                        </Link>
                    </Button>
                    <div className="py-2"> | </div>
                    <Button variant="link">
                        <Link href="/contact">
                            Contact
                        </Link>
                    </Button>
                    {socials.map((social,index)=>{
                        const Icon = social.Icon
                        return <Link href={social.link} key={index} aria-label={social.label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                        </Link>
                    })}
                    <div className="py-2"> | </div>
                    {/* <DarkModeButton /> */}
                </div>
            </nav>
            <Separator />
        </div>
    );
}