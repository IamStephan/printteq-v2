import React from "react"
import clsx from "clsx"
import Link from "@components/link"

import ArrowRightIcon from "remixicon-react/ArrowRightSLineIcon"

interface Props {
  showSeparator: boolean
  lastItem: boolean
  url?: string
}

const Item: React.FC<Props> = ({ url, showSeparator, lastItem, children }) => {
  return (
    <li
      className={clsx(
        "flex space-x-2 hover:underline cursor-pointer whitespace-nowrap",
        {
          "text-red-600 font-bold": lastItem,
        }
      )}
    >
      {url ? <Link to={url}>{children}</Link> : <span>{children}</span>}

      {showSeparator && <ArrowRightIcon />}
    </li>
  )
}

export default Item
