import React, { Fragment } from "react"
import { useRouter } from "next/router"
import { Popover, Transition } from "@headlessui/react"
import clsx from "clsx"

import Link from "@components/link"

import LogoMini from "@assets/illustrations/logo_mini.svg"
import LogoMiniDark from "@assets/illustrations/logo_mini_dark.svg"

const Links = [
  {
    title: "Benefits",
    url: "/#benefits",
  },
  {
    title: "Services",
    url: "/#services",
  },
  {
    title: "Team",
    url: "/#team",
  },
  {
    title: "Showcase",
    url: "/#gallery-showcase",
  },
]

const Navbar: React.FC = () => {
  const { route } = useRouter()

  const isHome = route === "/"

  return (
    <nav
      className={clsx({
        "absolute inset-x-0 top-0 z-10": isHome,
      })}
    >
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            {isHome ? (
              <>
                <LogoMini className="hidden w-auto text-red-600 lg:block h-7" />
                <LogoMiniDark className="w-auto text-red-600 lg:hidden h-7" />
              </>
            ) : (
              <LogoMini className="w-auto text-red-600 h-7" />
            )}
            <span
              className={clsx(
                "ml-2 text-xl font-bold tracking-wide text-gray-900",
                {
                  "text-white lg:text-gray-900": isHome,
                }
              )}
            >
              PRiNTTEQ
            </span>
          </Link>
          <ul className="items-center hidden space-x-6 lg:flex">
            {Links.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.url}
                  aria-label={item.title}
                  title={item.title}
                  className={clsx(
                    "font-medium tracking-wide transition-colors duration-200",
                    {
                      "text-white hover:text-red-200": isHome,
                      "text-gray-700 hover:text-red-600": !isHome,
                    }
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contact-us"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-red-600 rounded-full hover:bg-opacity-90 focus:shadow-outline focus:outline-none"
                aria-label="Contact Us"
                title="Contact Us"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <Popover>
              <Popover.Button
                className={clsx(
                  "p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-red-50 focus:bg-red-50",
                  {
                    "hover:bg-red-600 hover:bg-opacity-10 focus:bg-red-600 focus:bg-opacity-75":
                      isHome,
                  }
                )}
              >
                <svg
                  className={clsx("w-5 text-gray-600", {
                    "text-white": isHome,
                  })}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 z-40 bg-gray-900 bg-opacity-75" />
              </Transition>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-0 left-0 z-50 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <LogoMini className="w-auto text-red-600 h-7" />
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-900">
                            PRiNTTEQ
                          </span>
                        </Link>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        {Links.map((item, i) => (
                          <li key={i}>
                            <Popover.Button as={Fragment}>
                              <Link
                                to={item.url}
                                aria-label={item.title}
                                title={item.title}
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-600"
                              >
                                {item.title}
                              </Link>
                            </Popover.Button>
                          </li>
                        ))}
                        <li>
                          <Popover.Button as={Fragment}>
                            <Link
                              to="/#contact-us"
                              className="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-white transition duration-200 bg-red-600 rounded-full hover:bg-opacity-90 focus:shadow-outline focus:outline-none"
                              aria-label="Contact Us"
                              title="Contact Us"
                            >
                              Contact Us
                            </Link>
                          </Popover.Button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
