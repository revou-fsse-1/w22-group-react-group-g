import React from "react";
const Footer = () => {
  return (
    <footer className="w-full mt-14 text-center text-gray-700 md:text-left md:text-lg">
      <span>© {new Date().getUTCFullYear()} Minicrate</span>
    </footer>
  );
};

export default Footer;
