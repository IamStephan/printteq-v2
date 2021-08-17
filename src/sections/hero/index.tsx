import React from "react"
import Image from "next/image"

import Link from "@components/link"

import BackgroundImg from "@assets/sections/hero/background_01.jpg"
import MiniLogoDark from "@assets/illustrations/logo_mini_dark.svg"

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse pb-16 pt-[calc(77px+64px)] lg:pt-[88px] lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          viewBox="0 0 365 894"
          fill="none"
          preserveAspectRatio="none slice"
          className="absolute left-0 z-10 hidden h-full text-white transform inset-y-1 lg:block"
        >
          <path
            d="M199.889 508.341C199.652 411.524 199.413 313.997 167.857 222.32C138.07 135.867 82.5417 57.422 -4.57764e-05 3.05176e-05L0 894H365C189 872.5 205.934 714.406 201.468 609.199C200.054 575.852 199.971 542.14 199.889 508.341Z"
            fill="currentColor"
          />
        </svg>

        <Image
          src={BackgroundImg}
          placeholder="blur"
          layout="fill"
          objectPosition="bottom"
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          alt="Lase printing | We print it all."
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm" />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-600 uppercase rounded-full bg-red-50 ring-1 ring-red-600">
            Brand new
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white lg:text-gray-900 sm:text-5xl sm:leading-none">
            Digital Printing & <br className="hidden md:block" />
            Engraving{" "}
            <span className="inline-block text-red-600 lg:text-red-600">
              Solutions.
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-white lg:text-gray-700 md:text-lg">
            Solving all your digital printing, signage and engraving needs in
            one shop with expert technicians.
          </p>
          <div className="flex items-center">
            <Link
              to="/#contact-us"
              aria-label="Contact Us"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-red-600 rounded-full hover:bg-opacity-90 focus:shadow-outline focus:outline-none"
            >
              Contact Us
            </Link>
            <Link
              to="/#services"
              aria-label="Services"
              className="inline-flex items-center font-semibold text-white transition-colors duration-200 lg:text-gray-800 hover:text-red-600"
            >
              Services
            </Link>
          </div>
        </div>

        <div className="absolute items-center justify-center hidden transform -translate-y-1/2 right-4 lg:right-8 top-1/2 lg:flex lg:flex-col">
          <MiniLogoDark
            aria-label="We Print it all"
            className="w-auto h-40 mb-8 text-red-600"
          />
          <h1 className="mb-8 text-4xl font-bold text-center text-white uppercase">
            We print it all
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Hero
