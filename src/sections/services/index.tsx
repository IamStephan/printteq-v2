import React from "react"

const Icon: React.FC = () => {
  return (
    <svg
      className="w-8 h-8 text-red-600"
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
  )
}

interface IService {
  icon: React.ReactNode
  title: string
  description: string
}

const ServicesList: Array<IService> = [
  {
    icon: <Icon />,
    title: "Football Sports",
    description:
      "Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <Icon />,
    title: "Bowling Sports",
    description:
      "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
  },
  {
    icon: <Icon />,
    title: "Cycling Sports",
    description:
      "A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a cracker.",
  },
  {
    icon: <Icon />,
    title: "Weight Lifting Sports",
    description:
      "Meanwhile, in behind the bicycle shed, Hercules Morse, as big as a horse.",
  },
  {
    icon: <Icon />,
    title: "Golf Sports",
    description:
      "Disrupt inspire and think tank, social entrepreneur but preliminary thinking think tank compelling.",
  },
  {
    icon: <Icon />,
    title: "Hockey Sports",
    description:
      "A business big enough that it could be listed on the NASDAQ goes belly up.",
  },
  {
    icon: <Icon />,
    title: "Shooting Sports",
    description:
      "Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down clap of thunder.",
  },
  {
    icon: <Icon />,
    title: "Martial Arts",
    description:
      "Webtwo ipsum orkut reddit meebo skype vimeo jajah spock empressr zimbra, mobly napster.",
  },
]

const Services = () => {
  return (
    <section className="relative">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-90" />

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ServicesList.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
            >
              <div className="p-5">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-red-50">
                  {service.icon}
                </div>
                <p className="mb-2 font-bold">{service.title}</p>
                <p className="text-sm leading-5 text-gray-900">
                  {service.description}
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-red-600 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
