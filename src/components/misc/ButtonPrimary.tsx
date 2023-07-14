import React, { FC } from "react";
interface Props {
  children: React.ReactNode;
  className: string;
}

const ButtonPrimary: FC<Props> = ({ children }) => (
  <button
    className={
      "py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-blue-500 hover:shadow-orange-md transition-all outline-none "
    }
  >
    {children}
  </button>
);

export default ButtonPrimary;
