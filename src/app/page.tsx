import React from "react";
import Hero from "@/components/Hero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { JoinUsers } from "@/components/sections/JoinUsers";
import { Distribution } from "@/components/sections/Distribution";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <JoinUsers />
      <Distribution />
      <Footer />
    </main>
  );
}