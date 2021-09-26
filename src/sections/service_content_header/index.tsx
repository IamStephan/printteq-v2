import React from "react"
import Image from "next/image"

import { NavOverlayHeights } from "@components/nav"
import { FormatTitle } from "@utils/format_title"

import FacebookIcon from "remixicon-react/FacebookFillIcon"
import LinkedInIcon from "remixicon-react/LinkedinFillIcon"
import WhatsappIcon from "remixicon-react/WhatsappFillIcon"
import ArrowDownIcon from "remixicon-react/ArrowDownSLineIcon"

import BackgroundImg from "@assets/sections/hero/background_01.jpg"

interface Props {
  title: string
  summary: string
  showcase: any
}

const DevWarnSocialShare = () => {
  if (typeof window !== "undefined") {
    alert(
      "Cannot share page in stagging area as it's not meant for the general public."
    )
  }
}

const ServicesHeader: React.FC<Props> = ({ title, summary, showcase }) => {
  const formatedTitle = FormatTitle(title)

  return (
    <div className={`relative bg-gray-900 ${NavOverlayHeights.padding}`}>
      <Image
        src={showcase.url}
        placeholder="blur"
        layout="fill"
        blurDataURL={showcase.thumbnail}
        objectPosition="bottom"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Lase printing | We print it all."
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-sm" />
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 pt-0 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none">
            {formatedTitle.main}{" "}
            <span className="relative inline-block">
              {formatedTitle.tail}{" "}
              <div className="w-full h-3 -mt-3 bg-red-600 rounded-full " />
            </span>
          </h2>
          <p className="mb-12 text-base tracking-wide text-gray-300 opacity-75 md:text-md">
            {summary}
          </p>
          <ul className="grid max-w-md grid-cols-3 mb-8 text-xs font-thin tracking-wide text-center divide-x divide-gray-500 text-gray-50 sm:text-sm sm:mx-auto md:mb-12">
            <li className="flex items-center justify-center">
              <button onClick={DevWarnSocialShare} className="p-2 group">
                <FacebookIcon
                  className="transition duration-150 group-hover:scale-110 group-hover:text-red-400"
                  size={28}
                />
              </button>
            </li>
            <li className="flex items-center justify-center">
              <button onClick={DevWarnSocialShare} className="p-2 group">
                <LinkedInIcon
                  className="transition duration-150 group-hover:scale-110 group-hover:text-red-400"
                  size={28}
                />
              </button>
            </li>
            <li className="flex items-center justify-center">
              <button onClick={DevWarnSocialShare} className="p-2 group">
                <WhatsappIcon
                  className="transition duration-150 group-hover:scale-110 group-hover:text-red-400"
                  size={28}
                />
              </button>
            </li>
          </ul>
          <a
            href="#article"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-red-400 hover:border-red-400 hover:shadow hover:scale-110"
          >
            <ArrowDownIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServicesHeader
