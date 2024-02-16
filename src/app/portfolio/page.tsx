import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
import SeeProjectButton from "../components/SeeProjectButton"

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <div className="w-full relative h-[383px]">
        <Image
          src="/images/chalets_construction.webp"
          fill
          sizes="100%"
          alt="Picture of a house in Ballycastle built by McHenry Bros"
          className="w-auto object-cover z-0"
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1278px] flex flex-col items-center pl-5 pr-5">
          <div className="mt-[50px] mb-[50px]"><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize">Our </span><span className="text-gold text-[32px] lg:text-5xl font-bold capitalize">Portfolio</span><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize"> </span></div>
          <div className="text-neutral-700 text-base lg:text-2xl font-normalleading-10 mb-[100px]">At McHenry Bros Ltd, we take pride in our diverse portfolio of construction projects. From luxurious hotels to practical commercial spaces, our work reflects our commitment to quality, innovation, and community values. <br /><br />Explore our key projects to see how we're building the future, one project at a time.</div>
          {/* First portfolio item */}
          <div className="text-neutral-700 text-base lg:text-2xl font-semibold mb-8">The Salthouse Hotel</div>
          <div className="text-neutral-700 text-lg font-normal mb-8">An Oasis of Luxury</div>
          <SeeProjectButton />
          <div className="flex flex-col lg:flex-row w-full mt-10 gap-4">
            <div className="relative h-[430px] w-full order-2 lg:order-1">
              <Image
                src="/images/chalets_construction.webp"
                fill
                sizes="100%"
                alt="Picture of a house in Ballycastle built by McHenry Bros"
                className="w-auto object-cover z-0"
              />
            </div>
            <div className="relative h-[430px] w-full order-2 lg:order-1">
              <Image
                src="/images/chalet.webp"
                fill
                sizes="100%"
                alt="Picture of a house in Ballycastle built by McHenry Bros"
                className="w-auto object-cover z-0"
              />
            </div>
          </div>
        {/* Second portfolio item */}
        <div className="text-neutral-700 text-base lg:text-2xl font-semibold mb-8 mt-8">The Paddocks</div>
          <div className="text-neutral-700 text-lg font-normal mb-8">Where Luxury Meets Serenity</div>
          <SeeProjectButton />
          <div className="flex flex-col lg:flex-row w-full mt-10 gap-4">
            <div className="relative h-[430px] w-full order-2 lg:order-1">
              <Image
                src="/images/semi-kitchen.webp"
                fill
                sizes="100%"
                alt="Picture of a house in Ballycastle built by McHenry Bros"
                className="w-auto object-cover z-0"
              />
            </div>
            <div className="relative h-[430px] w-full order-2 lg:order-1">
              <Image
                src="/images/semi-kitchen2.webp"
                fill
                sizes="100%"
                alt="Picture of a house in Ballycastle built by McHenry Bros"
                className="w-auto object-cover z-0"
              />
            </div>
          </div>

        {/* Third portfolio item */}
        <div className="text-neutral-700 text-base lg:text-2xl font-semibold mb-8 mt-8">Homecare Kitchens and Bathrooms</div>
          <div className="text-neutral-700 text-lg font-normal mb-8">Commercial Success</div>
          <SeeProjectButton />
          <div className="flex flex-col lg:flex-row w-full mt-10 gap-4">
            <div className="relative h-[430px] w-full order-2 lg:order-1">
              <Image
                src="/images/homecare.webp"
                fill
                sizes="100%"
                alt="Picture of a house in Ballycastle built by McHenry Bros"
                className="w-auto object-cover z-0"
              />
            </div>
            <div className="relative h-[430px] w-full order-2 lg:order-1">
              <Image
                src="/images/homecare2.webp"
                fill
                sizes="100%"
                alt="Picture of a house in Ballycastle built by McHenry Bros"
                className="w-auto object-cover z-0"
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}