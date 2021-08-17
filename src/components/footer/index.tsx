import React from "react"

import Link from "@components/link"

import LogoMini from "@assets/illustrations/logo_mini.svg"

const Footer = () => {
  return (
    <footer className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <section className="flex flex-row items-center justify-between mb-4">
        <div className="">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <LogoMini className="w-auto text-red-600 h-7" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-900 uppercase">
              Printteq
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="https://facebook.com/PRINTTEQ"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-red-600"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </section>
      <section className="flex flex-col-reverse justify-between pt-5 pb-10 border-t md:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2021 Printteq. All rights reserved.
        </p>
        {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <Link
              to="/privacy-policy"
              activePath="/privacy-policy"
              activeClassName="text-red-600 underline"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-red-600"
            >
              Privacy Policy
            </Link>
          </li>
        </ul> */}
      </section>
    </footer>
  )
}

export default Footer
