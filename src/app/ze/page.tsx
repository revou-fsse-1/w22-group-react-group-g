import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-12 text-gray-100 bg-[#0E141A] md:p-16">
      <div className="w-full max-w-7xl flex flex-col gap-11 md:gap-14">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
