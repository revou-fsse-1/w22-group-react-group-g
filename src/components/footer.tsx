import React from "react";
const Footer = () => {
  return (
    <footer className="bg-white-300 py-2">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - LaslesVPN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
