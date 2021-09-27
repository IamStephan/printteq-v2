import React from "react"
import { Directus } from "@directus/sdk"

import ServiceContentHeader from "@sections/service_content_header"
import ServiceContentBody from "@sections/service_content_body"
import Showroom from "@sections/showcase_gallery"

import { NavModes } from "@components/nav"

import { RelationFilterGenerator } from "@utils/relation_filter_gen"
import { ImageUrlToBase64 } from "@utils/image_url_to_base64.ts"

import type { IPage } from "@__t/page"
import type { GetServerSideProps } from "next"
import type { IService } from "@__t/api/service"

interface Props {
  service: IService
}

const PreviewDraftService: IPage<Props> = ({ service }) => {
  return (
    <>
      <ServiceContentHeader
        title={service.title}
        summary={service.summary}
        showcase={service.showcase}
      />
      <ServiceContentBody content={service.content} />
      <Showroom />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const service_id = params?.service_id
  const adminPanel = new Directus("https://admin.printteq.co.za")

  if (!service_id || Array.isArray(service_id)) {
    return {
      notFound: true,
    }
  }

  let data: any

  try {
    const service = await adminPanel
      .items<"services", IService>("services")
      .readOne(service_id, {
        fields: ["*", "showcase.*"],
      })

    console.log()

    data = service as IService

    //@ts-ignore
    if (service?.showcase?.id) {
      const showcaseThumbnail = await ImageUrlToBase64(
        `https://admin.printteq.co.za/assets/${
          // @ts-ignore
          service?.showcase.id as any
        }?key=thumbnail`,
        //@ts-ignore
        service?.showcase.type as any
      )

      data.showcase = {
        thumbnail: showcaseThumbnail,
        url: `https://admin.printteq.co.za/assets/${
          //@ts-ignore
          service?.showcase.id as any
        }`,
      }
    }
  } catch (e) {
    console.log(e)
    return {
      notFound: true,
    }
  }

  return {
    props: {
      service: data,
    },
  }
}

PreviewDraftService.navProps = {
  isOverlay: true,
  mode: NavModes.DARK,
}

export default PreviewDraftService
