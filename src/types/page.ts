import type React from "react"

import { Props as NavProps } from "@components/nav"

export interface IPage<P = {}> extends React.FC<P> {
  navProps?: NavProps
}
