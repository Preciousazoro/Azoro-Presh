"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="text-4xl md:text-5xl font-extrabold">Let's Connect</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm available for remote projects, freelance work, and AI coding evaluation tasks. 
          Reach out and let's build something amazing. I typically respond within 24 hours.
        </p>
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
                azoroprecious@outlook.com
              </p>
              <a
                href="mailto:azoroprecious@outlook.com"
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

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gray-100 dark:bg-[#0f0f0f] border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition-all"
          >
            <div className="text-center">
              <i className="ri-linkedin-box-fill text-4xl text-[#ff004f] mb-4"></i>
              <h3 className="font-bold text-lg">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                Connect with me professionally
              </p>
              <a
                href="https://linkedin.com/in/precious-azoro-"
                target="_blank"
                className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
              >
                Connect →
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center"
            >
              <i className="ri-check-double-line text-4xl text-green-600 dark:text-green-400 mb-4"></i>
              <h3 className="font-bold text-lg text-green-800 dark:text-green-200 mb-2">Message Sent!</h3>
              <p className="text-green-600 dark:text-green-400">Thank you for reaching out. I'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-4 bg-gray-100 dark:bg-[#111] border rounded-lg 
                  text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all
                  ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-4 bg-gray-100 dark:bg-[#111] border rounded-lg 
                  text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all
                  ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  rows={6}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-4 bg-gray-100 dark:bg-[#111] border rounded-lg 
                  text-gray-900 dark:text-white focus:border-[#ff004f] outline-none transition-all resize-none
                  ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-4 bg-[#ff004f] text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 w-full 
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
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}