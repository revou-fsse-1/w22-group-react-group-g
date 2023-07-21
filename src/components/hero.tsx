"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import illustration1 from "../../public/assets/images/illustration-1.png";
import illustration2 from "../../public/assets/images/illustration-2.png";
import illustration3 from "../../public/assets/images/illustration-3.png";

const featureList = [
  "Inventory & Transaction Tracking",
  "Simple & Intuitive Dashboard",
  "Eye-friendly UI",
  "FREE!*",
];

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <main className="flex flex-col gap-11 md:flex-row-reverse">
      <div className="w-full flex items-center justify-between py-8">
        <Image
          src={illustration1}
          alt="illustration one"
          className="w-1/3 object-contain hidden lg:block lg:scale-150 lg:translate-x-6 lg:-translate-y-10"
        />
        <Image
          src={illustration2}
          alt="illustration two"
          className="w-1/2 max-w-[455px] object-contain translate-y-4 z-10 md:scale-150 md:translate-y-20 lg:w-1/3 lg:-translate-x-6 lg:translate-y-28"
        />
        <Image
          src={illustration3}
          alt="illustration three"
          className="w-1/2 max-w-[455px] object-contain scale-125 -translate-y-8 sm:-translate-y-14 md:scale-[1.5] md:-translate-y-20 lg:w-1/3 lg:scale-[1.7] lg:-translate-x-10"
        />
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
              custom={{ duration: 0.5 + i }}
              variants={scrollAnimation}
              key={feature}
              whileHover={{
                scale: 1.1,
                x: 40,
                transition: {
                  duration: 0.21,
                },
              }}
            >
              <Image
                src="/assets/icons/check.png"
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
  );
};

export default Hero;
