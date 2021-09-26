import React from "react"

import Breadcrumbs from "@components/breadcrumbs"

interface Props {
  content: string
}

const ServiceContentBody: React.FC<Props> = ({ content }) => {
  return (
    <section
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="article"
    >
      <nav className="max-w-4xl mx-auto mb-12">
        <Breadcrumbs
          links={[
            {
              title: "Services",
            },
            {
              title: "Service Page",
            },
          ]}
        />
      </nav>

      {/* Main Content */}
      <article
        className="max-w-4xl mx-auto prose prose-red"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  )
}

export default ServiceContentBody
