import React from "react"

import BreadcrumbItem from "./item"

interface Props {
  links: Array<{
    title: string
    url?: string
  }>
}

const Breadcrumbs: React.FC<Props> = ({ links, children }) => {
  return (
    <ol className="flex px-4 py-2 space-x-2 overflow-hidden rounded-md ring-1 ring-gray-900 ring-opacity-10 bg-gray-50">
      {links.map((item, i) => (
        <BreadcrumbItem
          lastItem={i === links.length - 1}
          showSeparator={i < links.length - 1}
          url={item.url}
        >
          {item.title}
        </BreadcrumbItem>
      ))}
    </ol>
  )
}

export default Breadcrumbs
