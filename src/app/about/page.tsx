import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import Image from "next/image"

export default function About() {
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
        <div className="max-w-[1278px]">
          <div className="text-center mt-[50px] mb-[50px]"><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize">About </span><span className="text-gold text-[32px] lg:text-5xl font-bold capitalize">Us</span><span className="text-neutral-700 text-[32px] lg:text-5xl font-bold capitalize"> </span></div>

          <div className="flex flex-col mb-10 pl-5 pr-5">
            {/* Top */}
            <div className="text-neutral-700 text-xl font-normal leading-10 lg:mr-10">
              <p className="mb-7">We are McHenry Bros Ltd, a family-run business with over 30 years of experience in building quality homes in Ballycastle and the surrounding areas. Our company was started in 1980 by John McHenry and Dennis McHenry, who are still overseeing the business as consultants and mentors. They had a vision to build homes for the people of Ballycastle, creating a strong and vibrant community and setting high standards of construction and customer service.</p>
              <p>Today, the company is run by their sons, Jonathan McHenry, Darren McHenry, and Pearse McHenry, who share the same passion and values as their fathers. Jonathan and Darren are involved in the everyday running of the construction sites, overseeing the work of our skilled and experienced team of builders, engineers, architects, and contractors. Pearse is involved with the administration and planning of the business, ensuring that everything runs smoothly and efficiently.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-10 mt-10">
              <div className="w-full relative h-[430px]">
                <Image
                  src="/images/roof.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover z-0"
                />
              </div>
              <div className="w-full relative h-[430px]">
                <Image
                  src="/images/chalet2.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover z-0"
                />
              </div>
            </div>
            {/* Bottom */}
            <div className="text-neutral-700 text-xl font-normal leading-10">
              <p className="mb-7">We offer a range of services to suit your needs and budget, from homes for families and first time buyers, to higher end and luxury houses, to commercial projects. We use only the best materials and techniques to ensure our homes are durable, comfortable, and energy-efficient. We also respect the natural beauty and heritage of the area and strive to minimize our impact on the environment and promote sustainability and green energy.</p>
              <p className="mb-7">We are proud to be part of the Ballycastle community and support local businesses and charities. We have built many successful projects in the area, such as the Salthouse Hotel, a stunning eco-friendly boutique hotel overlooking the sea. We have also received many awards and recognitions for our work, such as the <span className="text-gold">NHBC Pride in the Job Award.</span></p>
              <Image
                src="/images/NHBC.png"
                width={105}
                height={64}
                alt="McHenry Bros logo"
                className="mb-7"
              />

              <p>We are always looking for new opportunities and challenges to expand our business and improve our services. </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-10 mt-10">
              <div className="w-full relative h-[430px]">
                <Image
                  src="/images/chalet-view.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover z-0"
                />
              </div>
              <div className="w-full relative h-[430px]">
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

          <div className="w-[calc(100vw)] wide-div h-[280px] flex justify-center items-center bg-emerald-600  text-white text-xl lg:text-[32px] font-normal leading-[50px] ">
            <div className="max-w-[1278px] flex justify-center items-center pl-5 text-center pr-5">Our mission is to build homes and communities that enhance the lives of our customers and the environment.</div>
          </div>


          <ContactForm />
        </div>
      </div>

      <Footer />
    </>
  )
}