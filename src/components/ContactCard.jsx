import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

function ContactCard() {
  return (
    <div className="mx-2 md:mx-auto max-w-md bg-white shadow-lg rounded-xl md:p-8 text-gray-800 border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-blue-800 text-center">
        Contact Us
      </h2>

      <div className="space-y-4">
        <div className="flex items-start text-sm md:text-base">
          <FiMapPin
            className="text-blue-700 mr-3 mt-1 flex-shrink-0"
            size={18}
          />
          <span>
            Village Bhoodli, Chopanki Road, near Kamdhenu Paint Company,
            Bhiwadi, Rajasthan, 301019
          </span>
        </div>

        <div className="flex items-center text-sm md:text-base">
          <FiPhone className="text-blue-700 mr-3 flex-shrink-0" size={18} />
          <span>+91-9079618080</span>
        </div>

        <div className="flex items-center text-sm md:text-base">
          <FiMail className="text-blue-700 mr-3 flex-shrink-0" size={18} />
          <span>rahulsingh8080@gmail.com</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <a
          href="https://wa.me/919079618080"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          WhatsApp Us Now
        </a>
      </div>
    </div>
  );
}
export default ContactCard;
