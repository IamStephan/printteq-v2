import React from "react"
import dynamic from "next/dynamic"

const CTA = () => {
  /**
   * Overcome SSR issue with window
   */
  const MapWithNoSSR = dynamic(() => import("../../components/map"), {
    ssr: false,
  })

  return (
    <section
      id="contact-us"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-md shadow-2xl lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <div className="relative object-cover w-full lg:absolute h-80 lg:h-full">
            <MapWithNoSSR />
          </div>
          <svg
            className="absolute top-0 right-0 z-[9999] hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-3/5">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-600 uppercase rounded-full bg-red-50 ring-1 ring-red-600">
              Get In Touch
            </p>
          </div>
          <h5 className="mb-8 text-3xl font-extrabold leading-none sm:text-4xl">
            We Print It All...
          </h5>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-full bg-red-50">
                <svg
                  className="w-5 h-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <ul>
                <li>
                  <a
                    className="text-sm text-gray-900"
                    href="mailto:info@printteq.co.za"
                  >
                    info@printteq.co.za
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-gray-900"
                    href="mailto:orders@printteq.co.za"
                  >
                    orders@printteq.co.za
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-full bg-red-50">
                <svg
                  className="w-5 h-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <ul>
                <li>
                  <a className="text-sm text-gray-900" href="tel:0220650607">
                    022 065 0067
                  </a>
                </li>
                <li>
                  <a className="text-sm text-gray-900" href="tel:0820794173">
                    082 079 4173
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-start space-x-3 sm:col-span-2">
              <div className="p-2 rounded-full bg-red-50">
                <svg
                  className="w-5 h-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 9C18 11.973 15.8377 14.441 13 14.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.917C8.16229 14.441 6 11.973 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <address>
                <p className="text-sm text-gray-900">
                  Unit 7, 844@Oostewal Centre
                </p>
                <p className="text-sm text-gray-900">
                  Oostewal Road, Langebaan
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
