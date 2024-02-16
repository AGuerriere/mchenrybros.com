import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Success() {
  return(
    <>
      <Navbar />
      <main className="h-[50vh] flex justify-center items-center m-10">
        <h1 className="text-2xl xl:text-5xl text-black font-normal">Thank you for your message! A member of our stuff will get in touch with you soon!</h1>
      </main>
      <Footer />
    </>
  )
}