"use client";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "./misc/ButtonOutline.";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <header
      className={
        "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
        (scrollActive ? " shadow-md pt-0" : " pt-4")
      }
    >
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
        <a className="col-start-1 col-end-2 flex items-center">
          <svg
            className="h-8 w-auto"
            width="93"
            height="94"
            viewBox="0 0 93 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 73.9925V20.7556L45 38.9975V91.7667L1.5 73.9925ZM48 91.7667V38.9975L91.5 20.7556V73.9925L48 91.7667ZM89.0341 18.5365L46.5 36.3734L3.96585 18.5365L46.5 1.61435L89.0341 18.5365Z"
              stroke="black"
              stroke-width="3"
            />
            <path d="M3 21L45 39V90.5L3 73V21Z" fill="#0E141A" />
            <path
              d="M5.5 19.5L46.5 3L87.5 19.5L46.5 36.5L5.5 19.5Z"
              fill="#3F5574"
            />
            <path d="M90 21L48 39V90.5L90 73V21Z" fill="#2D3D53" />
          </svg>

          <span className="ml-3 text-xl">Minicrate</span>
        </a>
        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
          <LinkScroll
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("about");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "about"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 a")
            }
          >
            About
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("feature");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "feature"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Feature
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("pricing");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "pricing"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Pricing
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="testimoni"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("testimoni");
            }}
            className={
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
              (activeLink === "testimoni"
                ? " text-orange-500 animation-active "
                : " text-black-500 hover:text-orange-500 ")
            }
          >
            Testimonial
          </LinkScroll>
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <button className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
            Sign In
          </button>
          <ButtonOutline>Sign Up</ButtonOutline>
        </div>
      </nav>
    </header>
  );
};

export default Header;
