import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Portfolio />
    </>
  );
}
