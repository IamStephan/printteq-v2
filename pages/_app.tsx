import React from "react"
import { NextSeo } from "next-seo"
import { Directus } from "@directus/sdk"

import { useNormalScrollRoutes } from "@hooks/useNormalScrollRoutes"
import { useProgressBar } from "@hooks/useProgressBar"

import Layout from "@templates/layout"
import { RelationFilterGenerator } from "@utils/relation_filter_gen"

import type { IPage } from "@__t/page"
import type { AppProps } from "next/app"

import "../styles/globals.css"

let menus_cache: any

const SEOLinkTags = [
  {
    rel: "icon",
    href: "/favicon.ico",
  },
]

const _app = ({ Component, pageProps, ...rest }: AppProps) => {
  useNormalScrollRoutes()
  useProgressBar(0.3, 200)

  const { navProps = {} } = Component as IPage

  return (
    <>
      <NextSeo
        titleTemplate="Printteq | %s"
        title="We Print It All"
        additionalLinkTags={SEOLinkTags}
      />

      <Layout navProps={navProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

// _app.getInitialProps = async () => {
//   // The default for tree view structures in directus
//   const RELATIONSHIP_DEPTH = 5

//   let menus: any = {}

//   try {
//     const adminPanel = new Directus("https://admin.printteq.co.za")

//     if (typeof menus_cache !== "object") {
//       menus = await adminPanel.items("menu_items").readMany({
//         fields: [
//           // Titles
//           "title",
//           ...RelationFilterGenerator("children", "title", RELATIONSHIP_DEPTH),

//           // menu item ids
//           "id",
//           ...RelationFilterGenerator("children", "id", RELATIONSHIP_DEPTH),

//           // Service Titles (This data is very deep, find another way...)
//           "linked_to.item.title",
//           ...RelationFilterGenerator(
//             "children",
//             "linked_to.item.title",
//             RELATIONSHIP_DEPTH
//           ),

//           // Service IDs
//           "linked_to.item.id",
//           ...RelationFilterGenerator(
//             "children",
//             "linked_to.item.id",
//             RELATIONSHIP_DEPTH
//           ),
//         ],
//         filter: {
//           is_root: {
//             _eq: true,
//           },
//           title: {
//             _eq: "Services",
//           },
//         },
//       })

//       menus_cache = menus
//     } else {
//       menus = menus_cache
//     }
//   } catch (e) {}

//   return {
//     menus: menus.data,
//   }
// }

export default _app
