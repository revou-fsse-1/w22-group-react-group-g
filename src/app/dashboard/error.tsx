"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const router = useRouter();

  const handleRedirect = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <section className="w-full h-full flex flex-col justify-center px-4 py-3 gap-4 rounded-md bg-[#0E141A]">
        <div className="w-full flex flex-col items-center gap-7">
          <div className="w-full flex justify-center gap-3">
            <span className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
              ⛔
            </span>
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
              ERROR
            </h1>
            <span className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
              ⛔
            </span>
          </div>

          <div className="w-full flex flex-col items-center text-center gap-5">
            <span className="sm: text-lg">
              There seems to be a problem when accessing your data. Please try
              again!
            </span>
            <button
              onClick={() => handleRedirect()}
              className="px-4 py-3 rounded-lg bg-[#0051CC] bg-opacity-50 hover:bg-opacity-100 sm:text-lg transition-all"
            >
              Return to Login
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
