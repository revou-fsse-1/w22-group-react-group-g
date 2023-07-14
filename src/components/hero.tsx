"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = [
  "Real-time Inventory Tracking.",
  "Intuitive Order Management.",
  "Smart Analytics.",
  "Seamless Integration.",
];

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper className="">
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-2 sm:py-4"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <strong>Minicrate</strong>: Inventory Management Simplified.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Inventory management made easy for your business needs, with less
              hassle and complexity.
            </p>
            <ul className="text-black-500 mb-6 ml-8 self-start ">
              {features.map((feature, index) => (
                <motion.li
                  className="mb-6 relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div
              className="h-full w-full self-center justify-center"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/boxlogo.png"
                alt="Feature"
                quality={100}
                width={1000}
                height={1000}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
