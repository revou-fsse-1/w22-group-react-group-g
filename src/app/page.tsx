"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "@/utils/getScrollAnimation";

export default function Home() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="min-h-screen flex flex-col items-center p-12 text-gray-100 bg-gradient-to-br from-[#0E141A] from-40% to-[#00183D] to-100% md:p-16">
      <div className="w-full max-w-7xl flex flex-col gap-11 md:gap-14">
        <Header />

        <ScrollAnimationWrapper className="">
          <motion.div variants={scrollAnimation}>
            <Hero />
            <Footer />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
