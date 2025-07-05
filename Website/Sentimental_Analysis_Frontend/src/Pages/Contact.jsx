import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Contact() {
   const teamMembers = [
    {
      name: 'Prasiddha Karki',
      phone: '+977-9812345678',
      email: 'prasiddha@gmail.com',
    },
    {
      name: 'Sabin Sapkota',
      phone: '+977-9823456789',
      email: 'sabin@gmail.com',
    },
    {
      name: 'Suman Karki',
      phone: '+977-9834567890',
      email: 'suman@gmail.com',
    },
  ];
  return (
    <>
     <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
          Contact Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <h2 className="text-xl font-semibold text-purple-800 mb-2">
                {member.name}
              </h2>
              <p className="flex justify-center items-center gap-2 text-gray-700 mb-1">
                <FaPhoneAlt className="text-purple-500" /> {member.phone}
              </p>
              <p className="flex justify-center items-center gap-2 text-gray-700">
                <FaEnvelope className="text-purple-500" /> {member.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    /* 
     <div className="bg-gradient-to-br from-purple-50 to-white min-h-screen py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">
          Contact Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center"
            >
              <h2 className="text-xl font-semibold text-purple-800 mb-2">
                {member.name}
              </h2>
              <p className="flex justify-center items-center gap-2 text-gray-700 mb-1">
                <FaPhoneAlt className="text-purple-500" /> {member.phone}
              </p>
              <p className="flex justify-center items-center gap-2 text-gray-700">
                <FaEnvelope className="text-purple-500" /> {member.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    */
    // <div>Contact</div>
  )
}

export default Contact