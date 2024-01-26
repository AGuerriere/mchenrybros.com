
import Image from "next/image"

export default function Footer() {
  return (
    <>
      <nav className="flex w-full justify-between h-[100px] items-center">
        <div className="pl-10">
          <Image
            src="/images/logo.webp"
            width={200}
            height={200}
            alt="McHenry Bros logo"
          />
        </div>
        <ul className="flex w-1/2 justify-evenly h-full items-center [&_li]:h-full [&_li]:flex [&_li]:items-center">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>PORTFOLIO</li>
          <li className="bg-emerald-600 pl-7 pr-7">CONTACT US</li>
        </ul>
      </nav>
    </>
  )
}