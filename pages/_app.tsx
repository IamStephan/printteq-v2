import type { AppProps } from "next/app"

import Layout from "@templates/layout"
import "../styles/globals.css"

const _app: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default _app
