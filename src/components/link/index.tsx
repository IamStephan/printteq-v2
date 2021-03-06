import React from "react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"

import { matchPath } from "@utils/match_path"

interface Props {
  className?: string
  activeClassName?: string
  activePath?: string | Array<string>
  to: string
}

const Link: React.FC<Props & React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  activeClassName,
  activePath,
  to,
  ...rest
}) => {
  const { asPath } = useRouter()
  const pathToMatch = activePath || to

  return (
    <NextLink href={to}>
      <a
        className={clsx(className, {
          [activeClassName || ""]: matchPath(pathToMatch, asPath),
        })}
        {...rest}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
