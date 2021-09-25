import React from "react"
import { LocalBusinessJsonLd } from "next-seo"

import Hero from "@sections/hero"
import SocialProof from "@sections/social_proof"
import Benefits from "@sections/benefits"
import Services from "@sections/services"
import Team from "@sections/team"
import ShowcaseGallery from "@sections/showcase_gallery"
import CTA from "@sections/cta"

import type { IPage } from "@__t/page"
import { NavModes } from "@components/nav"

const Home: IPage = () => {
  return (
    <>
      <LocalBusinessJsonLd
        type="Store"
        id="https://printteq.co.za"
        name="Printteq | We Print It All"
        description="Digital Printing, Signage and Engraving Solutions."
        telephone="022 065 0067"
        address={{
          streetAddress: "Unit 7, 844@Oostewal Centre, Oostewal Road",
          addressCountry: "ZA",
          postalCode: "7357",
          addressLocality: "Langebaan, Western Cape",
        }}
        sameAs={["https://facebook.com/PRINTTEQ"]}
        images={[
          "https://printteq.co.za/preview_lg.jpg",
          "https://printteq.co.za/preview_md.jpg",
          "https://printteq.co.za/preview_sm.png",
        ]}
      />
      <Hero />
      <SocialProof />
      <Benefits />
      <Services />
      {/* <Team /> */}
      <ShowcaseGallery />
      <CTA />
    </>
  )
}

Home.navProps = {
  isOverlay: true,
  mode: NavModes.SPLIT_L,
}

export default Home
