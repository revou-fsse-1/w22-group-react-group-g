import Logo from "@/components/Logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center p-12 text-gray-100 bg-[#0E141A] md:p-16">
      <div className="w-full max-w-7xl flex flex-col gap-24 items-center">
        <div className="flex items-center gap-5">
          <Logo width="78" height="72" />
          <span className="text-4xl font-bold text-[#1371FF]">Minicrate</span>
        </div>

        <main className="flex flex-col items-center gap-3">
          <h2 className="text-8xl font-bold text-[#222E3F] sm:text-9xl hover:text-[#1371FF] transition-all duration-300">
            404
          </h2>
          <p className="text-2xl sm:text-3xl">Page Not Found</p>
        </main>

        <div className="flex flex-col items-center gap-5">
          <Link href={"/"}>
            <button className="w-full px-5 py-4 rounded-lg font-semibold bg-[#0051CC] bg-opacity-60 md:text-lg xl:text-xl hover:bg-opacity-100 transition-all">
              Back to Homepage
            </button>
          </Link>

          <Link href={"/login"}>
            <button className="w-full px-5 py-4 rounded-lg bg-[#222E3F] bg-opacity-30 md:text-lg xl:text-xl hover:bg-opacity-80 transition-all">
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
