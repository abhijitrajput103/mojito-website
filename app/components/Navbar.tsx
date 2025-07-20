"use client";
import Image from "next/image";
import { navLinks } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface NavLink {
  id: string;
  title: string;
}

const Navbar: React.FC = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "nav",
      { background: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center px-6 py-4 gap-4 md:gap-0">
      <a href="#home" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
        <p className="font-bold text-xl">Just Pour</p>
      </a>

      <ul className="flex items-center gap-4 md:gap-8">
        {(navLinks as NavLink[]).map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-gray-700 hover:text-white transition-colors text-sm md:text-base"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
