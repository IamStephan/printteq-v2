import React from "react"
import { NextSeo } from "next-seo"
import type { AppProps } from "next/app"

import { useNormalScrollRoutes } from "@hooks/useNormalScrollRoutes"
import Layout from "@templates/layout"

import "../styles/globals.css"

const _app: React.FC<AppProps> = ({ Component, pageProps }) => {
  useNormalScrollRoutes()

  return (
    <>
      <NextSeo titleTemplate="Printteq | %s" title="We Print It All" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default _app
