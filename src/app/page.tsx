import Image from "next/image";
import React from "react";

import HeroSection from "../components/HeroSection";
import RecentPosts from '../components/RecentPosts';
import About from '@/components/About';

import Separator from '@/components/Separator'

export default function page() {
  return (
    <>
      <section>
        <div className="flex bg-black">
          <HeroSection />
        </div>
      </section>
    </>
  );
}
