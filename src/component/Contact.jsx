import SmoothScroll from "./SmoothScroll";

export default function Contact() {
  return (
    <div id="contact" onScroll={SmoothScroll} className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl font-semibold text-center mb-2">GET IN TOUCH</h2>
        <h1 className="text-blue-400 text-4xl font-bold text-center mb-12">Contact</h1>
        <form
          action="https://formsubmit.co/71d2304295440c61e0a627c502a54ad7"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name"
            className="w-full p-4 bg-transparent text-white border border-blue-400 rounded-md"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-4 bg-transparent text-white border border-blue-400 rounded-md"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Your Message"
            className="w-full p-4 bg-transparent text-white border border-blue-400 rounded-md"
          ></textarea>

          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://basantjoshi.netlify.app/thankyou" />

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-black font-semibold px-8 py-3 rounded-md"
          >
            Submit
          </button>
        </form>

      </div>
    </div>
  );
}
