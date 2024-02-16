import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)]">
        {/* Left (top mobile) */}
        <div className="flex flex-col lg:w-2/5 p-5 2xl:pl-20 justify-center min-h-[calc(50vh-50px)]">
          <h1 className="text-stone-900 text-opacity-90 xl:text-7xl text-4xl font-bold capitalize leading-normal">Welcome to <div className="text-gold">McHenry Bros</div></h1>
          <p className="text-stone-900 text-opacity-90 text-2xl text-base font-normal leading-10 pt-7 xl:w-2/3 pb-[43px]">From a first home, a luxury upgrade, a holiday retreat, or a peaceful retirement, we have something for you.</p>
          {/* This green box appears only on larger screens */}
          <div className="hidden lg:block xl:w-[416px] xl:h-[165px] xl:px-[60px] w-[300px] h-[117px] px-[60px] py-[25px] bg-emerald-600 flex-col justify-center items-start gap-[18px] inline-flex">
            <div className="self-stretch text-white xl:text-5xl text-2xl font-bold lowercase">30+ years</div>
            <div className="self-stretch text-white xl:text-2xl text-base font-normal">Of Family Craftsmaship</div>
          </div>
        </div>
        {/* right (bottom mobile*/}
        <div className="lg:w-3/5 relative min-h-[calc(50vh-50px)]">
          {/* This green box appear only on smaller screens */}
          <div className="block absolute top-0 left-10 z-50 lg:hidden w-[300px] h-[117px] px-[60px] py-[25px] bg-emerald-600 flex-col justify-center items-start gap-[18px] inline-flex">
            <div className="self-stretch text-white text-2xl font-bold lowercase">30+ years</div>
            <div className="text-white text-base font-normal">Of Family Craftsmaship</div>
          </div>
          <Image
            src="/images/Lodge.webp"
            fill
            sizes="100%"
            alt="Picture of Salthouse Lodge"
            className="w-auto object-cover z-0"
          />
        </div>
      </div>
      {/* Main */}
      <div className="flex justify-center">
        <div className="max-w-[1278px]">
          {/* Our Values */}
          <div className="flex flex-col items-center pt-10 pb-10 pl-5 pr-5">
            <h5 className="text-neutral-700 lg:text-[40px] text-[32px] font-bold pb-7">Our Values</h5>
            <p className="pb-7 text-neutral-700 text-xl font-normal leading-[30px]">We are passionate about building homes and communities that enhance the lives of our customers and the environment. </p>
            <h6 className="pb-7 text-neutral-700 text-xl leading-[30px] font-bold">We are committed to:</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-9">
              <div className="flex flex-col p-5 xl:pb-8 pb-10 items-center text-white bg-emerald-600 shadow">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide">Quality</h6>
                <p>We use only the best materials and techniques to ensure our homes are durable, comfortable, and energy-efficient.</p>
              </div>
              <div className="flex flex-col p-5 xl:pb-8 pb-10 items-center text-center shadow border-b-8 border-emerald-600">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide ">Customer Satisfaction</h6>
                <p>We listen to your needs and preferences and provide you with honest and professional advice. We also offer after-sales support and warranty for your peace of mind.</p>
              </div>
              <div className="flex flex-col p-5 xl:pb-8 pb-10 items-center shadow border-b-8 border-emerald-600">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide">Local Community</h6>
                <p>We are proud to be part of the Ballycastle community and support local businesses and charities. </p>
              </div>
              <div className="flex flex-col p-5 xl:pb-8 pb-10 items-center shadow border-b-8 border-emerald-600">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide">Environment</h6>
                <p>We respect the natural beauty and heritage of the area and strive to minimize our impact on the environment and promote sustainability and green energy.</p>
              </div>
            </div>
          </div>
          {/* Our Values End*/}
          {/* Our Services */}
          {/* Section Title */}
          <div className="flex flex-col items-center pt-10 pb-10 pl-5 pr-5">
            <h5 className="text-neutral-700 lg:text-[40px] text-[32px] font-bold pb-7">Our Services</h5>
            <p className="pb-7 text-neutral-700 text-xl font-normal leading-[30px]">We offer a range of services to suit your needs and budget, including:</p>
            {/* Section Title End*/}
            {/* First block */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative h-[430px] order-2 lg:order-1">
                <Image
                  src="/images/detached.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover z-0"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 p-5 lg:pl- justify-center items-center lg:items-start text-white bg-emerald-600 h-[430px] order-1 lg:order-2">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide mb-3">Higher end and luxury homes</h6>
                <p className="mb-3 lg:text-xl text-base font-normal leading-[30px]">We build stunning and spacious houses for those who want to upgrade to a more luxurious and comfortable living. Our higher end and luxury houses feature premium quality fixtures and fittings, elegant and modern designs, and spacious and landscaped gardens</p>
                <div className="border-solid border-2 border-white w-[168px] h-16 flex justify-center items-center">
                  Learn more &rarr;
                </div>
              </div>
            </div>
            {/* Second Block */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative h-[430px] order-2">
                <Image
                  src="/images/semi.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover z-0"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 p-5 justify-center items-center lg:items-start text-white bg-emerald-600 h-[430px] order-1">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide mb-3">Family homes and first time buyers</h6>
                <p className="mb-3 lg:text-xl text-base font-normal leading-[30px]">We have a variety of sites and designs to choose from, all built to the highest standards and certified by NHBC. You can also customize your home with our bespoke options and finishes.</p>
                <div className="border-solid border-2 border-white w-[168px] h-16 flex justify-center items-center">
                  Learn more &rarr;
                </div>
              </div>
            </div>
            {/* Third Block */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative h-[430px] order-2 lg:order-1">
                <Image
                  src="/images/chalet.webp"
                  fill
                  sizes="100%"
                  alt="Picture of a house in Ballycastle built by McHenry Bros"
                  className="w-auto object-cover"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 p-5 justify-center items-center lg:items-start text-white bg-emerald-600 h-[430px] order-1 lg:order-2">
                <h6 className="pb-5 lg:text-2xl text-base font-semibold leading-[25px] tracking-wide mb-3">Commercial Properties</h6>
                <p className="mb-3 lg:text-xl text-base font-normal leading-[30px]">We have experience in delivering successful commercial projects, such as the Salthouse Hotel in Ballycastle, a stunning eco-friendly boutique hotel overlooking the sea.</p>
                <div className="border-solid border-2 border-white w-[168px] h-16 flex justify-center items-center">
                  Learn more &rarr;
                </div>
              </div>
            </div>
          </div>
          {/* Our Services End*/}
          {/* Our Work */}
          {/* Section Title */}
          <div className="flex flex-col items-center pt-10 pb-10 pl-5 pr-5">
            <h5 className="text-neutral-700 lg:text-[40px] text-xl lg:text-[32px] font-bold pb-7">Our Work</h5>
            <p className="pb-7 text-neutral-700 text-xl font-normal leading-[30px]">We offer a range of services to suit your needs and budget, including:</p>
            <div className="border-solid border-2 border-gold w-[190px] text-gold h-16 lg:text-xl font-semibold text-base flex justify-center items-center mb-[100px]">
              See all projects
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <div className="flex flex-col w-full mr-5">
                <div className="w-full relative h-[400px] lg:h-[288px] mb-5 group">
                  <Image
                    src="/images/chalets_construction.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-600 bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-white text-xl lg:text-[32px] font-semibold">The Salthouse Hotel</p>
                    <p className="text-white underline text-xl font-normal leading-normal"> Learn more &rarr;</p>
                  </div>
                </div>
                <div className="w-full relative h-[400px] lg:h-[367px] mb-5 group">
                  <Image
                    src="/images/homecare.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a house in Ballycastle built by McHenry Bros"
                    className="w-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-600 bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-white text-xl lg:text-[32px] font-semibold">The Salthouse Chalets</p>
                    <p className="text-white underline text-xl font-normal leading-normal"> Learn more &rarr;</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="w-full relative h-[400px] lg:h-[320px] mb-5 group">
                  <Image
                    src="/images/chalet.webp"
                    fill
                    sizes="100%"
                    alt="Picture of a chalet by McHenry Bros"
                    className="w-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-600 bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-white text-xl lg:text-[32px] font-semibold">Ballycastle Homecare</p>
                    <p className="text-white underline text-xl font-normal leading-normal"> Learn more &rarr;</p>
                  </div>
                </div>
                <div className="w-full relative h-[400px] lg:h-[338px] group">
                  <Image
                    src="/images/paddocks.webp"
                    fill
                    sizes="100%"
                    alt="Picture of paddocks by McHenry Bros"
                    className="w-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-600 bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-white text-xl lg:text-[32px] font-semibold">The Paddocks</p>
                    <p className="text-white underline text-xl font-normal leading-normal"> Learn more &rarr;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Work End */}
          {/* Contacts */}
          <div className="flex flex-col lg:flex-row p-5">
            {/* Left */}
            <div className="flex flex-col lg:mr-10 w-full lg:w-1/2">
              <h5 id="contact-us" className="text-neutral-700 lg:text-[40px] text-[32px] font-bold pb-7">Contact Us</h5>
              <p className="mb-7">If you are interested in any of our services or want to find out more about our current and upcoming projects, please contact us today.</p>
              <p className="mb-7">Call Darren on: <span className="text-gold">+44 7751 116624</span> - Email: darrenmchenry@gmail.com</p>
              <p className="mb-7">Call Jonathan on:<span className="text-gold"> +44 7763 071143</span> - Email: jonathanmchenry2@gmail.com</p>
              <p className="mb-7">Or simply fill out the form below. We look forward to hearing from you.</p>
              <form name="contact" method="POST" action="/success" data-netlify="true" className="flex flex-col mb-10">
                <input type="text" name="name" id="name" placeholder="Name*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
                <input type="email" name="email" id="email" placeholder="Email*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
                <input type="tel" name="tel" id="tel" placeholder="Mobile Number*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
                <input type="text" name="subject" id="subject" placeholder="Subject*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
                <input type="text" name="text" id="text" placeholder="Type your message here*" className="bg-grey3 h-16 pl-5 rounded border mb-3 placeholder:text-grey4" required />
                <button className="w-[200px] h-12 px-6 py-3 bg-emerald-600 rounded-[5px] justify-center items-center gap-2 inline-flex">
                  <div className="text-white text-base font-semibold leading-normal">Send</div>
                </button>
              </form>
            </div>
            {/* Right */}
            <div className="w-full lg:w-1/2">
              <iframe
                className="w-full h-full min-h-[300px] border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4554.236378666955!2d-6.25119245130138!3d55.19869289153625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861d3cd0c5eaaab%3A0x9c0700f19c89ab6c!2sMcHenry%20Bros%20Ltd!5e0!3m2!1sen!2suk!4v1708093786911!5m2!1sen!2suk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Contacts End */}
        </div>
      </div>
      <Footer />
    </>
  );
}
