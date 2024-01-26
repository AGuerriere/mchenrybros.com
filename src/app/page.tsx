import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-emerald-600 w-full h-[100vh] p-10">
        <Image
          src="/images/logo-white.png"
          width={500}
          height={500}
          alt="McHenry Bros Logo"
        />
        <p className="text-white text-[18px] xl:text-[40px] mt-20">Website Coming Soon!</p>
        <p className="text-white text-[18px] xl:text-[40px] mt-20">For enquiries call: <br /> Darren: +44 7751 116624 <br />Jonathan: +44 7763 071143</p>
      </div>
    </>
  );
}
