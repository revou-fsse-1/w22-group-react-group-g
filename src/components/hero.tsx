"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const featureList = [
  "Inventory & Transaction Tracking",
  "Simple & Intuitive Dashboard",
  "Eye-friendly UI",
  "FREE!*",
];

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper className="">
      <motion.div className="" variants={scrollAnimation}>
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
                <motion.li
                  className="flex gap-3 items-center"
                  custom={{ duration: 1 + i }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Image
                    src="/assets/icons/avatar.png"
                    alt={`feature ${i + 1}`}
                    width={28}
                    height={28}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Link href={"/signup"}>
              <button className="w-full px-5 py-4 rounded-lg font-semibold bg-[#0051CC] bg-opacity-60 md:w-3/5 md:text-lg xl:text-xl hover:bg-opacity-100 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </main>
      </motion.div>
    </ScrollAnimationWrapper>
  );
};

export default Hero;
