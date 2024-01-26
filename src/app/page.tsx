import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-emerald-600 w-full h-[100vh]">
        <Image
          src="/images/logo-white.png"
          width={500}
          height={500}
          alt="McHenry Bros Logo"
        />
        <h1 className="text-white text-[40px] mt-20">McHenry Bros</h1>
        <p className="text-white text-[40px] mt-20">Coming Soon!</p>
        <p className="text-white text-[40px] mt-20">For enquiries call Darren +44 7751 116624</p>
      </div>
    </>
  );
}
