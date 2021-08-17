import React from "react"
import { useEmblaCarousel } from "embla-carousel/react"
import Img from "next/image"

import Showcase01 from "@assets/sections/gallery/showcase_01.jpg"
import Showcase02 from "@assets/sections/gallery/showcase_02.jpg"
import Showcase03 from "@assets/sections/gallery/showcase_03.jpg"
import Showcase04 from "@assets/sections/gallery/showcase_04.jpg"
import Showcase05 from "@assets/sections/gallery/showcase_05.jpg"
import Showcase06 from "@assets/sections/gallery/showcase_06.jpg"

const slides = [
  {
    imgSrc: Showcase01,
    alt: "Printing Fooderia vinyl.",
  },
  {
    imgSrc: Showcase02,
    alt: "Printteq laser printing example.",
  },
  {
    imgSrc: Showcase03,
    alt: "We print it all vinyl.",
  },
  {
    imgSrc: Showcase04,
    alt: "Demo print of the forest.",
  },
  {
    imgSrc: Showcase05,
    alt: "Emblem engraving.",
  },
  {
    imgSrc: Showcase06,
    alt: "Team meeting.",
  },
]

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  })

  return (
    <section
      id="gallery-showcase"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid grid-rows-2 gap-6 lg:grid-rows-1 lg:grid-cols-4">
        <div className="flex flex-col sm:items-center md:items-start">
          <a href="/" aria-label="Item" className="block mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50">
              <svg
                className="w-10 h-10 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 15.9C15.2822 15.4367 17 13.419 17 11V4H7V11C7 13.419 8.71776 15.4367 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z"
                  fill="currentColor"
                />
                <path d="M18 6H20V11H18V6Z" fill="currentColor" />
                <path d="M6 6H4V11H6V6Z" fill="currentColor" />
              </svg>
            </div>
          </a>
          <h2 className="mb-4 font-sans text-xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Our Showroom</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 scale-x-30" />
          </h2>
          <p className="w-full text-gray-700 sm:text-center md:text-left lg:text-sm lg:max-w-md">
            Just some of the work we've done for our clients. You can let us
            know if you'd like us to showcase your work.
          </p>
        </div>

        <div
          className="relative w-full h-full py-px overflow-hidden lg:col-span-3"
          ref={emblaRef}
        >
          <div className="grid h-full grid-flow-col auto-cols-[75%] sm:auto-cols-[50%] md:auto-cols-[25%] gap-x-6">
            {slides.map((item, i) => (
              <div
                key={i}
                className="relative h-full overflow-hidden rounded-md ring-1 ring-gray-900 ring-opacity-20"
              >
                <Img
                  src={item.imgSrc}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 object-cover w-full h-full"
                  alt={item.alt}
                />

                <div className="absolute inset-0">
                  <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-gray-900 bg-opacity-90" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
