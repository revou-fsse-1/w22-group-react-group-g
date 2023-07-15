import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featureList = [
    "Inventory & Transaction Tracking",
    "Simple & Intuitive Dashboard",
    "Eye-friendly UI",
    "FREE!*",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-12 text-gray-100 bg-[#0E141A] md:p-16">
      <div className="w-full max-w-7xl flex flex-col gap-11 md:gap-14">
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

        <main className="flex flex-col gap-11 md:flex-row-reverse">
          <div className="w-full flex items-center justify-center">
            <Logo width="278" height="272" />
          </div>

          <div className="flex flex-col gap-9">
            <h1 className="text-4xl font-bold md:text-5xl xl:text-6xl">
              Inventory Management In Simple Form
            </h1>

            <p className="md:text-lg xl:text-xl">
              Keep track of all your products and transactions for your business
              needs, with less hassle and complexity
            </p>

            <ul className="flex flex-col gap-3 font-semibold md:text-lg xl:text-xl">
              {featureList.map((feature, i) => (
                <li key={feature} className="flex gap-3 items-center">
                  <Image
                    src="/assets/icons/avatar.png"
                    alt={`feature ${i + 1}`}
                    width={28}
                    height={28}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href={"/signup"}>
              <button className="w-full px-5 py-4 rounded-lg font-semibold bg-[#0051CC] bg-opacity-60 md:w-3/5 md:text-lg xl:text-xl hover:bg-opacity-100 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </main>

        <footer className="w-full text-center text-gray-700 md:text-left md:text-lg">
          <span>© {new Date().getUTCFullYear()} Minicrate</span>
        </footer>
      </div>
    </div>
  );
}
