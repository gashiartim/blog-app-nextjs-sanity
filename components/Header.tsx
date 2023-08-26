import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image width={50} height={50} alt="logo" src={logo} />
        </Link>
        <div className="w-[3px] h-[50px] bg-[#12121B]"></div>
        <h1 className="text-[#12121B]">BLOG</h1>
      </div>
      <div>
        <Link
          href="tel:+38343823344"
          className="px-5 py-3 text-sm md:text-base bg-[#30EFA6] text-white flex items-center rounded-full text-center"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}

export default Header;
