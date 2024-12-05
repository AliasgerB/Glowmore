import React from "react";

const Footer = () => {
  return (
    <footer className='bg-primary py-4 text-textLight z-10 text-center mt-auto fixed bottom-0 left-0 w-full'>
      <div className='container mx-auto'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Glowmoree By Hawwa. All rights
          reserved.
        </p>
        <p className='text-xs mt-1'>
          Designed with love for beauty and elegance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
