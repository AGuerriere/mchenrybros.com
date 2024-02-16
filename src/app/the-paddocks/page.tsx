import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function ThePaddocks() {
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
          <div className="mt-[50px] mb-[50px]"><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize">The</span><span className="text-gold text-[32px] lg:text-5xl font-bold capitalize"> Paddocks</span><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize"> </span></div>
          <div className="text-center text-neutral-700 text-base lg:text-2xl font-normalleading-10 mb-[100px]">Where Luxury Meets Serenity<br /><br />The Paddocks is our current prestigious residential project, situated in the serene outskirts of Ballycastle. This development is set to redefine luxury living, offering a harmonious blend of modern architecture and the tranquil beauty of Northern Ireland&#39;s landscapes.</div>
          <div className="w-full relative h-[642px]">
            <Image
              src="/images/paddocks.webp"
              fill
              sizes="100%"
              alt="Picture of a house in Ballycastle built by McHenry Bros"
              className="w-auto object-cover z-0"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full mt-10 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="">
                <div className="text-neutral-700 text-[32px] font-semibold leading-[30px] pb-5">Overview</div>
                <div className="text-neutral-700 text-lg font-light leading-[30px] pb-5"></div>
                <div className="text-neutral-700 text-lg font-semibold leading-[30px] pb-5">Location: </div>
                <div className="text-neutral-700 text-lg font-light leading-[30px] pb-5">Ballycastle, Northern Ireland</div>
                <div className="text-neutral-700 text-lg font-semibold leading-[30px] pb-5">Project Details</div>
                <ul className="list-inside list-disc marker:text-xs">
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Spacious and modern residential units</li>
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Eco-friendly construction materials</li>
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Panoramic views of the surrounding countryside</li>
                </ul>
                <div className="text-neutral-700 text-lg font-semibold leading-[30px] mt-10 mb-5">Completion & Opening</div>
                <ul className="list-inside list-disc">
                  <li><span className="font-semibold">Expected Completion Date:</span> November 2024</li>
                </ul>
              </div>

            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 mb-10 mt-10">
                <div className="w-full relative h-[220px]">
                  <Image
                    src="/images/semi-kitchen.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="w-full relative h-[220px]">
                  <Image
                    src="/images/detached.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="w-full relative h-[220px]">
                  <Image
                    src="/images/interior.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="w-full relative h-[220px]">
                  <Image
                    src="/images/bathroom.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}