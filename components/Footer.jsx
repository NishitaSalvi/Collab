import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react"; // Icons from Lucide

const Footer = () => {
  return (
    <footer className="w-[99.3%] bg-[#09090b] h-[58px] py-3 text-white flex flex-row justify-center items-center rounded-md border-[0.5px] border-zinc-800">
      <div className="w-[99%] max-w-7xl flex flex-row justify-between items-center gap-4 px-8">
        
        {/* Footer Logo or Title */}
        <div className="text-sm text-gray-500">
          CoTask
        </div>

        {/* Copyright Text (Centered) */}
        <div className="text-center text-sm text-gray-500 flex justify-center">
          © {new Date().getFullYear()} CoTask. All rights reserved.
        </div>

        {/* Social Media Icons (Right-Aligned) */}
        {/* <div className="flex justify-end gap-6 text-gray-500">
            <h3 className="text-sm">Follow us: </h3>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github  className="h-[3vh] w-[3vw]"  />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter  className="h-[3vh] w-[3vw]"  />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-[3vh] w-[3vw]" />
          </Link>
        </div> */}
      </div>

    </footer>
  );
};

export default Footer;
