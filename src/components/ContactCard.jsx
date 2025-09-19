import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

function ContactCard() {
  return (
    <div className="mx-2 md:mx-auto max-w-md my-6 bg-white shadow-md rounded-lg p-4 md:p-6 text-gray-800 flex flex-col gap-2">
      <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-3 text-blue-800">Contact Us</h2>
      <div className="flex items-center mb-1 text-sm">
        <FiMapPin className="text-blue-700 mr-2" />
        Village Bhoodli, Chopanki Road, near Kamdhenu Paint Company, Bhiwadi, Rajasthan, 301019
      </div>
      <div className="flex items-center mb-1 text-sm">
        <FiPhone className="text-blue-700 mr-2" />
        <span>+91-9079618080</span>
      </div>
      <div className="flex items-center mb-1 text-sm">
        <FiMail className="text-blue-700 mr-2" />
        <span>rahulsingh8080@gmail.com</span>
      </div>
      <a
        href="https://wa.me/919079618080"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-green-700 font-bold hover:underline text-sm"
      >
        WhatsApp Us Now
      </a>
    </div>
  );
}
export default ContactCard;
