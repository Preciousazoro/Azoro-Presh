        "use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-24 md:ml-24 
      bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#ff004f] font-semibold mb-2">Get in Touch</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">Contact me</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
        {/* LEFT SIDE – CONTACT OPTIONS */}
        <div className="flex flex-col gap-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gray-100 dark:bg-[#0f0f0f] border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition-all"
          >
            <div className="text-center">
              <i className="ri-mail-line text-4xl text-[#ff004f] mb-4"></i>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                azoroprecious7@icloud.com
              </p>
              <a
                href="mailto:azoroprecious7@icloud.com"
                className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
              >
                Write me →
              </a>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gray-100 dark:bg-[#0f0f0f] border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition-all"
          >
            <div className="text-center">
              <i className="ri-whatsapp-line text-4xl text-[#ff004f] mb-4"></i>
              <h3 className="font-bold text-lg">Whatsapp</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                08122844144
              </p>
              <a
                href="https://wa.me/08122844144"
                target="_blank"
                className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
              >
                Write me →
              </a>
            </div>
          </motion.div>

          {/* Messenger */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gray-100 dark:bg-[#0f0f0f] border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition-all"
          >
            <div className="text-center">
              <i className="ri-messenger-line text-4xl text-[#ff004f] mb-4"></i>
              <h3 className="font-bold text-lg">Twitter</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                @most_rugged001
              </p>
              <a
                href="https://x.com/most_rugged001"
                className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
              >
                Write me →
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <motion.form
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const form = e.currentTarget;
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            const sendPromise = fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            await new Promise((resolve) => setTimeout(resolve, 500));

            try {
              const res = await sendPromise;
              if (res.ok) {
                toast.success("Message sent successfully!");
                form.reset();
              } else {
                toast.error("Failed to send message. Please try again.");
              }
            } catch {
              toast.error("Something went wrong. Please try again later.");
            } finally {
              setLoading(false);
            }
          }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full p-4 bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg 
            text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-4 bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg 
            text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full p-4 bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg 
            text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all"
          />

          <textarea
            rows={6}
            name="message"
            placeholder="Message"
            required
            className="w-full p-4 bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-gray-700 rounded-lg 
            text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 bg-[#ff004f] text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-fit 
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e10046]"}`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <i className="ri-send-plane-fill"></i> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
        
        
        
        
        
        // "use client"
        
        // import { motion } from 'framer-motion'
        // import { useState } from 'react'
        // import { toast } from 'sonner'
        
        // export default function ContactSection() {
        //   const [loading, setLoading] = useState(false)
        //   return(

        //     <section
        //   id="contact"
        //   className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-24 md:ml-24 bg-black text-white"
        // >
        //   {/* Header */}
        //   <motion.div
        //     initial={{ opacity: 0, y: 40 }}
        //     whileInView={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.6 }}
        //     viewport={{ once: true }}
        //     className="text-center mb-16"
        //   >
        //     <p className="text-[#ff004f] font-semibold mb-2">Get in Touch</p>
        //     <h2 className="text-4xl md:text-5xl font-extrabold">Contact me</h2>
        //   </motion.div>

        //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">

        //     {/* LEFT SIDE – CONTACT OPTIONS */}
        //     <div className="flex flex-col gap-8">
        //       {/* Email */}
        //       <motion.div
        //         initial={{ opacity: 0, x: -40 }}
        //         whileInView={{ opacity: 1, x: 0 }}
        //         transition={{ duration: 0.6 }}
        //         viewport={{ once: true }}
        //         className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] transition-all"
        //       >
        //         <div className="text-center">
        //           <i className="ri-mail-line text-4xl text-[#ff004f] mb-4"></i>
        //           <h3 className="font-bold text-lg">Email</h3>
        //           <p className="text-gray-400 text-sm mb-3">azoroprecious7@icloud.com</p>
        //           <a href="mailto:azoroprecious7@icloud.com"
        //             className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
        //           >
        //             Write me → 
        //           </a>
        //         </div>
        //       </motion.div>

        //       {/* WhatsApp */}
        //       <motion.div
        //         initial={{ opacity: 0, x: -40 }}
        //         whileInView={{ opacity: 1, x: 0 }}
        //         transition={{ duration: 0.6, delay: 0.1 }}
        //         viewport={{ once: true }}
        //         className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] transition-all"
        //       >
        //         <div className="text-center">
        //           <i className="ri-whatsapp-line text-4xl text-[#ff004f] mb-4"></i>
        //           <h3 className="font-bold text-lg">Whatsapp</h3>
        //           <p className="text-gray-400 text-sm mb-3">08122844144</p>
        //           <a href="https://wa.me/08122844144"
        //             target="_blank"
        //             className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
        //           >
        //             Write me → 
        //           </a>
        //         </div>
        //       </motion.div>

        //       {/* Messenger */}
        //       <motion.div
        //         initial={{ opacity: 0, x: -40 }}
        //         whileInView={{ opacity: 1, x: 0 }}
        //         transition={{ duration: 0.6, delay: 0.2 }}
        //         viewport={{ once: true }}
        //         className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] transition-all"
        //       >
        //         <div className="text-center">
        //           <i className="ri-messenger-line text-4xl text-[#ff004f] mb-4"></i>
        //           <h3 className="font-bold text-lg">Messenger</h3>
        //           <p className="text-gray-400 text-sm mb-3">user.fb123</p>
        //           <a href="#"
        //             className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
        //           >
        //             Write me → 
        //           </a>
        //         </div>
        //       </motion.div>
        //     </div>


        //           <motion.form
        //   onSubmit={async (e) => {
        //     e.preventDefault();
        //     setLoading(true);

        //     const form = e.currentTarget;
        //     const formData = new FormData(form);
        //     const data = Object.fromEntries(formData.entries());

        //     // Fire the request immediately
        //     const sendPromise = fetch("/api/contact", {
        //       method: "POST",
        //       headers: { "Content-Type": "application/json" },
        //       body: JSON.stringify(data),
        //     });

        //     // Short delay to show loader but keep UI fast
        //     await new Promise((resolve) => setTimeout(resolve, 500));

        //     try {
        //       const res = await sendPromise;

        //       if (res.ok) {
        //         toast.success("Message sent successfully!");
        //         form.reset();
        //       } else {
        //         toast.error("Failed to send message. Please try again.");
        //       }
        //     } catch (error) {
        //       toast.error("Something went wrong. Please try again later.");
        //     } finally {
        //       // Stop showing spinner quickly
        //       setLoading(false);
        //     }
        //   }}
        //   initial={{ opacity: 0, x: 40 }}
        //   whileInView={{ opacity: 1, x: 0 }}
        //   transition={{ duration: 0.6 }}
        //   viewport={{ once: true }}
        //   className="flex flex-col gap-6"
        // >
        //   <input
        //     type="text"
        //     name="username"
        //     placeholder="Username"
        //     required
        //     className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
        //   />

        //   <input
        //     type="email"
        //     name="email"
        //     placeholder="Email"
        //     required
        //     className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
        //   />

        //   <input
        //     type="text"
        //     name="phone"
        //     placeholder="Phone"
        //     className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
        //   />

        //   <textarea
        //     rows={6}
        //     name="message"
        //     placeholder="Message"
        //     required
        //     className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
        //   ></textarea>

        //   <button
        //     type="submit"
        //     disabled={loading}
        //     className={`mt-4 bg-[#ff004f] text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-fit ${
        //       loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e10046]"
        //     }`}
        //   >
        //     {loading ? (
        //       <>
        //         <svg
        //           className="animate-spin h-5 w-5 text-white"
        //           xmlns="http://www.w3.org/2000/svg"
        //           fill="none"
        //           viewBox="0 0 24 24"
        //         >
        //           <circle
        //             className="opacity-25"
        //             cx="12"
        //             cy="12"
        //             r="10"
        //             stroke="currentColor"
        //             strokeWidth="4"
        //           ></circle>
        //           <path
        //             className="opacity-75"
        //             fill="currentColor"
        //             d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
        //           ></path>
        //         </svg>
        //         Sending...
        //       </>
        //     ) : (
        //       <>
        //         <i className="ri-send-plane-fill"></i> Send Message
        //       </>
        //     )}
        //   </button>
        // </motion.form>

        // </div>
        // </section>

        //   )
        // };
        