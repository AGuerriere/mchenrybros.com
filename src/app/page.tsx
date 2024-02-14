import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Header */}
      <div>
        <div className="flex flex-col lg:flex-row">
          {/* Left (top mobile) */}
          <div className="flex flex-col lg:w-2/5 p-5 2xl:pl-20 justify-center">
            <h1 className="text-stone-900 text-opacity-90 xl:text-7xl text-4xl font-bold capitalize leading-normal">Welcome to <div className="text-gold">McHenry Bros</div></h1>
            <p className="text-stone-900 text-opacity-90 text-2xl text-base font-normal leading-10 pt-7 xl:w-2/3 pb-[43px]">From a first home, a luxury upgrade, a holiday retreat, or a peaceful retirement, we have something for you.</p>
            {/* This green box appears only on larger screens */}
            <div className="hidden lg:block xl:w-[416px] xl:h-[165px] xl:px-[60px] w-[300px] h-[117px] px-[60px] py-[25px] bg-emerald-600 flex-col justify-center items-start gap-[18px] inline-flex">
              <div className="self-stretch text-white xl:text-5xl text-2xl font-bold lowercase">30+ years</div>
              <div className="self-stretch text-white xl:text-2xl text-base font-normal">Of Family Craftsmaship</div>
            </div>
          </div>
          {/* right (bottom mobile*/}
          <div className="lg:w-3/5 relative h-[calc(100vh-450px)] lg:h-[calc(100vh-100px)]">
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
              className='w-auto object-cover z-0'
            />
          </div>
        </div>
      </div>

    </>
  );
}
