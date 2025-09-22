import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

function ContactCard() {
  return (
    <div className="max-w-md mx-auto my-8 bg-white shadow-md rounded-lg p-6 text-gray-800">
      <h2 className="text-xl font-bold mb-3 text-blue-800">Contact Us</h2>
      <div className="flex items-center mb-2">
        <FiMapPin className="text-blue-700 mr-2" />
        Village Bhoodli, Chopanki Road, near Kamdhenu Paint Company, Bhiwadi,
        Rajasthan, 301019
      </div>
      <div className="flex items-center mb-2">
        <FiPhone className="text-blue-700 mr-2" />
        <span>+91-9079618080</span>{" "}
        {/* Replace with your actual phone number */}
      </div>
      <div className="flex items-center mb-2">
        <FiMail className="text-blue-700 mr-2" />
        <span>rahulenterprise8080@gmail.com</span>{" "}
        {/* Replace with your actual email */}
      </div>
      <a
        href="https://wa.me/919079618080"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-green-700 font-bold hover:underline"
      >
        WhatsApp Us Now
      </a>
    </div>
  );
}
export default ContactCard;
