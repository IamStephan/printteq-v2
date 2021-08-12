import React from "react"

const SocialProof = () => {
  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 mb-2 text-red-600"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path
              fill="currentColor"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.833 3.337c.237-.166.559-.138.763.067.204.204.23.526.063.76-2.18 3.046-3.38 4.678-3.598 4.897-.586.585-1.536.585-2.122 0-.585-.586-.585-1.536 0-2.122.374-.373 2.005-1.574 4.894-3.602zM17.5 11c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-11 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm2.318-3.596c.39.39.39 1.023 0 1.414-.39.39-1.024.39-1.414 0-.39-.39-.39-1.024 0-1.414.39-.39 1.023-.39 1.414 0zM12 5.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
            />
          </svg>
          <p className="text-xl font-bold text-gray-900">Quick</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 mb-2 text-red-600"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>
          <p className="text-xl font-bold text-gray-900">Affordable</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 mb-2 text-red-600"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.969 9.969 0 0 1 2 12zm4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414-.929.929zM8 13h8a4 4 0 1 1-8 0z"
            />
          </svg>
          <p className="text-xl font-bold text-gray-900">Supportive</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-10 h-10 mb-2 text-red-600"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M10 10.5l1.038-3.635a1 1 0 0 1 1.924 0L14 10.5V12h.72a1 1 0 0 1 .97.757l1.361 5.447a8 8 0 1 0-10.102 0l1.362-5.447A1 1 0 0 1 9.28 12H10v-1.5zm2 9.5a7.952 7.952 0 0 0 3.265-.694L13.938 14h-3.876l-1.327 5.306A7.95 7.95 0 0 0 12 20zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
            />
          </svg>
          <p className="text-xl font-bold text-gray-900">Experts</p>
        </div>
      </div>
    </section>
  )
}

/**
 * NOTE:
 * =====
 * There is no data for any form of valid social proofing
 * So as an attempt to not make the website feel empty
 * I'm using incentives
 */
export default SocialProof
