import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center p-12 text-gray-100 bg-[#0E141A] md:p-16">
      <div className="w-full max-w-7xl flex flex-col gap-11 md:gap-14">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
          <p className="text-lg mb-4">
            Oops! The page you are looking for does not exist.
          </p>
          <p className="text-lg">
            Go back to
            <Link href="/">
              <span> Home</span>
            </Link>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
