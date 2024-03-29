'use client'

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [hidden, toggleHidden] = useState(1)

  function triggerToggle() {
    const toggle = hidden === 1 ? 0 : 1;
    toggleHidden(toggle);
  }
  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:flex w-full justify-between h-[100px] items-center">
        <div className="pl-10">
        <Link href="./">
          <Image
            src="./images/logo.webp"
            width={105}
            height={64}
            alt="McHenry Bros logo"
          />
          </Link>
        </div>
        <ul className="flex w-1/2 justify-between h-full items-center [&_li]:h-full [&_li]:flex [&_li]:items-center">
          <li><Link href="./" id="homenav" className="hover:underline hover:decoration-2 hover:font-bold">HOME</Link></li>
          <li><Link href="./about" id="aboutnav" className="hover:underline hover:decoration-2 hover:font-bold">ABOUT US</Link></li>
          <li><Link href="./portfolio" id="portfolionav" className="hover:underline hover:decoration-2 hover:font-bold">PORTFOLIO</Link></li>
          <li className="bg-emerald-600 w-[250px] text-white flex justify-center"><a href="https://mchenrybros.com/#contact-us" className="hover:underline hover:decoration-2 hover:font-bold max-content">CONTACT US</a></li>
        </ul>
      </nav>
      {/* Mobile Closed */}
      <nav className="flex lg:hidden w-full justify-between h-[100px] items-center pl-1 pr-6">
        <div className="">
        <Link href="./">
          <Image
            src="./images/logo.webp"
            width={105}
            height={64}
            alt="McHenry Bros logo"
          />
          </Link>
        </div>
        <div className="">
          <Image
            src="./images/menu.svg"
            width={34}
            height={26}
            alt="Hamburger menu logo"
            onClick={() => triggerToggle()}
          />
        </div>
      </nav>
      {/* Mobile Opened */}
      <nav className={`${hidden === 1 ? 'hidden' : 'flex'} bg-white flex-col w-[100vw] h-[100vh] pt-4 fixed top-0 left-0 z-[100] items-center text-xl text-2xl leading-7`}>
        <div className="w-full flex justify-between pl-11 pr-11 pt-7 pb-16">
          <Link
            href="./"
            onClick={() => triggerToggle()}>
            <Image
              src="./images/logo.webp"
              width={105}
              height={64}
              alt="McHenry Bros Logo"
            />
          </Link>
          <Image
            src="./images/close.svg"
            width={24}
            height={24}
            alt="Close Icon"
            className="text-teal-700"
            onClick={() => triggerToggle()}
          />
        </div>
        <Link href="./" className="text-center w-3/4 active:text-black pb-7 border-solid border-b-2" onClick={() => triggerToggle()}>Home</Link>
        <Link href="./about" className="text-center w-3/4 active:text-black pb-7 pt-7 border-solid border-b-2" onClick={() => triggerToggle()}>About</Link>
        <Link href="./portfolio" className="text-center w-3/4 active:text-black pb-7 pt-7 border-solid border-b-2" onClick={() => triggerToggle()}>Portfolio</Link>
        <a href="https://mchenrybros.com/#contact-us" className="text-center w-[216px] h-[69.78px] active:text-black mt-7 flex items-center justify-center bg-emerald-600 rounded-[17px] text-white" onClick={() => triggerToggle()}>Contact Us</a>
      </nav>

    </>
  )
}