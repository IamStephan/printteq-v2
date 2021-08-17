import React from "react"

import Hero from "@sections/hero"
import SocialProof from "@sections/social_proof"
import Benefits from "@sections/benefits"
import Services from "@sections/services"
import Team from "@sections/team"
import ShowcaseGallery from "@sections/showcase_gallery"
import CTA from "@sections/cta"

const Home: React.FC = () => {
  return (
    <>
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

export default Home
