import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function Homecare() {
  return (
    <div id="paddocks">
      <Navbar />
      <div className="w-full relative h-[383px]">
        <Image
          src="/images/homecare2.webp"
          fill
          sizes="100%"
          alt="Picture of a house in Ballycastle built by McHenry Bros"
          className="w-auto object-cover z-0"
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-[1278px] flex flex-col items-center pl-5 pr-5">
          <div className="mt-[50px] mb-[50px]"><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize">Ballycastle</span><span className="text-gold text-[32px] lg:text-5xl font-bold capitalize"> Homecare</span><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize"> </span></div>
          <div className="text-center text-neutral-700 text-base lg:text-2xl font-normalleading-10 mb-[100px]">Spacious commercial building<br /><br />For the Ballycastle Homecare commercial construction project, our team successfully completed a state-of-the-art, three-floor showroom and warehouse facility, emphasizing eco-friendly design and sustainable construction practices. Situated in the heart of Ballycastle, this modern structure combines functional retail space with efficient storage solutions, catering to the diverse needs of the homecare industry. The building&#39;s innovative design features energy-efficient materials and systems, reflecting our commitment to environmental stewardship while providing an inviting and practical space for customers and staff alike. This project not only enhances Ballycastle Homecare&#39;s operational capabilities but also sets a new standard for sustainable commercial construction in the region.</div>
          <div className="w-full relative h-[642px]">
            <Image
              src="/images/homecare.webp"
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
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Spacious and modern showroom for Ballycastle Homecare</li>
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">Eco-friendly construction materials</li>
                  <li className="text-neutral-700 text-lg font-light leading-[30px]">3 Floors and warehouse</li>
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
    </div>
  )
}