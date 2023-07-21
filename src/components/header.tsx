"use client";
import Logo from "@/components/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center justify-between sm:flex-row">
      <div className="flex items-center gap-5">
        <Logo width="78" height="72" />
        <span className="text-4xl font-bold text-[#1371FF]">Minicrate</span>
      </div>

      <div className="gap-4 hidden sm:flex">
        <Link href={"/login"}>
          <button className="px-5 py-3 rounded-lg bg-[#222E3F] bg-opacity-0 hover:bg-opacity-80 transition-all">
            Login
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="px-5 py-3 rounded-lg bg-[#0051CC] bg-opacity-60 hover:bg-opacity-100 transition-all">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
