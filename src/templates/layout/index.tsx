import React from "react"

import Nav, { Props as NavProps } from "@components/nav"
import Footer from "@components/footer"

interface Props {
  navProps: NavProps
}

const Layout: React.FC<Props> = ({ children, navProps }) => {
  return (
    <>
      <Nav {...navProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
