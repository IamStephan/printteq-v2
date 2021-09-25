import React from "react"
import { NextSeo } from "next-seo"
import type { AppProps } from "next/app"

import { useNormalScrollRoutes } from "@hooks/useNormalScrollRoutes"
import Layout from "@templates/layout"

import "../styles/globals.css"
import { IPage } from "@__t/page"

const _app: React.FC<AppProps> = ({ Component, pageProps }) => {
  useNormalScrollRoutes()

  const { navProps = {} } = Component as IPage

  return (
    <>
      <NextSeo
        titleTemplate="Printteq | %s"
        title="We Print It All"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />

      <Layout navProps={navProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default _app
