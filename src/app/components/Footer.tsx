import Image from "next/image"
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-zinc-300 bg-opacity-20 lg:pt-10 lg:pb-10 pb-5 pt-5 lg:pt-10 lg:pb-10">
        <div className="flex justify-center">
          <div className="max-w-[1278px] flex flex-col lg:flex-row justify-between w-full pl-5 pr-5">
            <div className="mb-8 -ml-4">
              <Image
                src="/images/logo.webp"
                width={105}
                height={64}
                alt="McHenry Bros logo"
              />
            </div>
            <div className="text-base leading-normal text-neutral-700">
              <p className="mb-8 font-bold">Quick Links</p>
              <ul className="mb-8">
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <p className="mb-8 font-bold">Contact Information</p>
              <p className="font-bold">Location</p>
              <p>Appointments Only</p>
              <p>2 The Diamond, Ballycastle</p>
              <p>Co.Antrim, BT54 6AW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-emerald-600 text-white flex flex-row justify-evenly items-center">
          <p>McHenry Bros &copy;</p>
        <Link href="https://mindtechnica.com/">
          <Image
            src="/images/mindtechnica.png"
            width={80}
            height={70}
            alt="Mind Technica Logo"
          />
        </Link>
      </div>
    </>
  )
}