import React from "react"

const Gallery = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8">
        <div className="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <a href="/" aria-label="Item" className="mr-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-50">
              <svg
                className="w-12 h-12 text-red-600"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
            <span className="inline-block mb-2">Our Gallery</span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-red-600 scale-x-30 group-hover:scale-x-100" />
          </h2>
        </div>
        <p className="w-full text-gray-700 lg:text-sm lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[repeat(4,auto)] md:grid-rows-[repeat(3,auto)] gap-6">
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <img
            src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative col-span-2 overflow-hidden rounded-md aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 sm:col-span-1 md:col-span-2 md:row-span-2 md:aspect-w-4 md:aspect-h-3">
          <img
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative col-span-2 overflow-hidden rounded-md aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 sm:col-span-1 md:col-span-2 md:row-span-2 md:aspect-w-4 md:aspect-h-3">
          <img
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <img
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="relative overflow-hidden rounded-md aspect-w-1 aspect-h-1">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Gallery
