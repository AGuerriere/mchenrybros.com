export default function ContactForm() {
  return (
    <>
      {/* Contacts */}
      <div className="flex flex-col lg:flex-row p-5 mb-10">
        {/* Left */}
        <div className="flex flex-col lg:mr-10 w-full lg:w-1/2 text-black text-xl font-normal leading-loose">
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
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Contacts End */}
    </>
  )
}