import React from "react"
import Image from "next/image"

import VinylImg from "@assets/sections/services/vinyl.jpg"
import EngravingImg from "@assets/sections/services/engraving.jpg"
import DomingImg from "@assets/sections/services/doming.jpg"
import SignageImg from "@assets/sections/services/signage.jpg"
import PrintingImg from "@assets/sections/services/printing.jpg"
import StampsImg from "@assets/sections/services/stamps.jpg"
import OrderBooksImg from "@assets/sections/services/order_books.jpg"
import BannersImg from "@assets/sections/services/banners.jpg"

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 h-10 text-red-600"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Our Services</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 rounded-full scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <Image
            src={SignageImg}
            placeholder="blur"
            layout="fill"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-md">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Signage
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            <Image
              src={EngravingImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Engraving
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            <Image
              src={VinylImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Vinyl
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            <Image
              src={PrintingImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Printing
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            {" "}
            <Image
              src={DomingImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Doming
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            <Image
              src={BannersImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Banners / Gazebos
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            <Image
              src={OrderBooksImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Order Books
            </h3>
          </div>
        </div>

        <div className="relative overflow-hidden transition duration-200 transform rounded-md shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <div className="object-cover w-full h-56 md:h-64 xl:h-80">
            <Image
              src={StampsImg}
              placeholder="blur"
              layout="fill"
              className="absolute inset-0 object-cover w-full h-full"
              alt=""
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-gray-900 bg-opacity-90">
            <h3 className="text-xl font-black tracking-wide text-center text-white">
              Stamps
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
