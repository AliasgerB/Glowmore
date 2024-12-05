import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"; // FontAwesome icons for social media

const Footer = () => {
  return (
    <footer className='py-2 text-textDark z-10 text-center mt-auto fixed bottom-0 left-0 w-full bg-primary'>
      <div className='container mx-auto'>
        <p className='text-s'>
          &copy; {new Date().getFullYear()}{" "}
          <span className='text-accent font-bold'>Glowmoree By Hawwa.</span> All
          rights reserved.
        </p>

        {/* Social Media and Contact Information */}
        <div className='flex justify-center space-x-4 mt-2'>
          {/* Instagram */}
          <a
            href='https://www.instagram.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='text-xl hover:text-accent transition' />
          </a>

          {/* WhatsApp */}
          <a
            href='https://wa.me/yourphonenumber'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaWhatsapp className='text-xl hover:text-accent transition' />
          </a>

          {/* Phone */}
          <a
            href='tel:+yourphonenumber'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaPhoneAlt className='text-xl hover:text-accent transition' />
          </a>

          {/* Email */}
          <a
            href='mailto:yourmail@example.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope className='text-xl hover:text-accent transition' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
