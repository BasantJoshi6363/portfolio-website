import { useState } from "react";
import SmoothScroll from "./SmoothScroll";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/bb9c979985b3d902cccf63baad01e3fe ", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Your message has been submitted successfully!");
        e.target.reset(); 
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠ Error sending the message. Check your network.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" onScroll={SmoothScroll} className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl font-semibold text-center mb-2">GET IN TOUCH</h2>
        <h1 className="text-blue-400 text-4xl font-bold text-center mb-12">Contact</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
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
            pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
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

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
