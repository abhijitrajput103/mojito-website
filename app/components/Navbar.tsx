"use client";
import Image from "next/image";
import { navLinks } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Navbar = () => {
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
    <nav className="flex justify-between items-center px-6 py-4">
      <a href="#home" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
        <p className="font-bold text-xl">Just Pour</p>
      </a>

      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-gray-700 hover:text-gray-900 transition-colors"
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
