'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Have questions or want to work with us? Fill out the form below or use our contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaEnvelope className="text-blue-500 text-3xl" />
              <p className="text-gray-700 text-lg font-medium">siamthca@gmail.com</p>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaPhone className="text-blue-500 text-3xl" />
              <p className="text-gray-700 text-lg font-medium">+880 1234 567 890</p>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <FaMapMarkerAlt className="text-blue-500 text-3xl" />
              <p className="text-gray-700 text-lg font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-10 shadow-lg border border-gray-200"
          >
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition"
                rows="6"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
