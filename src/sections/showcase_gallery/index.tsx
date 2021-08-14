import React from "react"
import Img from "next/image"

import Showcase01 from "@assets/sections/gallery/showcase_01.jpg"
import Showcase02 from "@assets/sections/gallery/showcase_02.jpg"
import Showcase03 from "@assets/sections/gallery/showcase_03.jpg"
import Showcase04 from "@assets/sections/gallery/showcase_04.jpg"
import Showcase05 from "@assets/sections/gallery/showcase_05.jpg"
import Showcase06 from "@assets/sections/gallery/showcase_06.jpg"

const Gallery = () => {
  return (
    <section
      id="gallery-showcase"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
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
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Our Showroom</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,auto)] md:grid-rows-[repeat(3,auto)] gap-6">
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <Img
            src={Showcase01}
            quality="100"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <Img
            src={Showcase02}
            quality="100"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>

        <div className="relative col-span-2 overflow-hidden rounded-md aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 sm:col-span-1 md:col-span-2 md:row-span-2 md:aspect-w-4 md:aspect-h-3">
          <Img
            src={Showcase04}
            quality="100"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative col-span-2 overflow-hidden rounded-md aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 sm:col-span-1 md:col-span-2 md:row-span-2 md:aspect-w-4 md:aspect-h-3">
          <Img
            src={Showcase03}
            quality="100"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <Img
            src={Showcase05}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <Img
            src={Showcase06}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
