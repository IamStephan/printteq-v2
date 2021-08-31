import React from "react"
import { LocalBusinessJsonLd } from "next-seo"

import Hero from "@sections/hero"
import SocialProof from "@sections/social_proof"
import Benefits from "@sections/benefits"
import Services from "@sections/services"
import Team from "@sections/team"
import ShowcaseGallery from "@sections/showcase_gallery"
import CTA from "@sections/cta"

import GetShowcaseImages from "@utils/get_showcase_images"

import { RemoteImageData } from "@__types__/remote_image"

interface Props {
  images: Array<RemoteImageData>
}

const Home: React.FC<Props> = ({ images }) => {
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
      <ShowcaseGallery images={images} />
      <CTA />
    </>
  )
}

export async function getStaticProps() {
  // If this fails on subsequent generations, it should just keep the old images

  const { images } = await GetShowcaseImages({})

  return {
    props: {
      images,
    },
    // Every Hour
    revalidate: 3600,
  }
}

export default Home
