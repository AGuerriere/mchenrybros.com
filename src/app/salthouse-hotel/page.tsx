import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function Salthouse() {
  return (
    <div id="salthouse">
      <Navbar />
      <div className="w-full relative h-[383px]">
        <Image
          src="./images/chalets_construction.webp"
          fill
          sizes="100%"
          alt="Picture of a house in Ballycastle built by McHenry Bros"
          className="w-auto object-cover z-0"
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1278px] flex flex-col items-center pl-5 pr-5">
          <div className="mt-[50px] mb-[50px]"><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize">The Salthouse </span><span className="text-gold text-[32px] lg:text-5xl font-bold capitalize">Hotel</span><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize"> </span></div>
          <div className="text-center text-neutral-700 text-base lg:text-2xl font-normalleading-10 mb-[100px]">An Oasis of Luxury<br /><br />The Salthouse Hotel is a testament to McHenry Bros Ltd&#39;s expertise in luxury construction. This exclusive hotel offers guests an escape to opulence with its comprehensive amenities and breathtaking views.</div>
          <div className="w-full relative h-[642px]">
            <Image
              src="./images/aerial.webp"
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
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Luxurious Amenities: The hotel features a state-of-the-art spa, two fine dining restaurants, and cozy cottage chalets, delivering a unique and indulgent experience.</li>
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Elegant Design: Each element of the Salthouse Hotel has been meticulously designed to offer comfort and luxury, from the lavish guest rooms to the tranquil spa facilities.</li>
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Prime Location: Set in the beautiful landscape of Ballycastle, the hotel offers guests a serene yet accessible retreat.</li>
                </ul>
                <div className="text-neutral-700 text-lg font-semibold leading-[30px] mt-10 mb-5">Completion & Opening</div>
                <ul className="list-inside list-disc">
                  <li><span className="font-semibold">Completion Date:</span> May 2020</li>
                  <li><span className="font-semibold">Grand Opening:</span> July 2020</li>
                </ul>
              </div>

            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 mb-10 mt-10">
                <div className="w-full relative h-[220px]">
                  <Image
                    src="./images/roof.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="w-full relative h-[220px]">
                  <Image
                    src="./images/chalet2.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="w-full relative h-[220px]">
                  <Image
                    src="./images/chalet-view.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover z-0"
                  />
                </div>
                <div className="w-full relative h-[220px]">
                  <Image
                    src="./images/spa.webp"
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
    </div>
  )
}