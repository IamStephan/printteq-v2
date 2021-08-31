import axios from "axios"
import { getPlaiceholder } from "plaiceholder"

import type {
  InstaResponse,
  InstaParams,
} from "@__types__/external_api/instagram"
import type { RemoteImageData } from "@__types__/remote_image"

interface IOptions {
  after?: string
  limit?: number
}

export default async ({ after, limit = 9 }: IOptions) => {
  const params: InstaParams = {
    fields: "caption,media_url,media_type,timestamp,thumbnail_url",
    limit: 9,
    access_token: process.env["INSTA_ACCESS_TOKEN"] as string,
  }

  if (after) {
    params.after = after as string
  }

  if (limit) {
    params.limit = Number(limit)
  }

  const { data: responseData } = await axios.get<InstaResponse>(
    "https://graph.instagram.com/me/media",
    { params }
  )

  let images: Array<RemoteImageData> = []

  for (let i = 0; i < responseData.data.length; i++) {
    const item = responseData.data[i]

    const { base64, img } = await getPlaiceholder(
      item["media_type"] === "IMAGE" ? item["media_url"] : item["thumbnail_url"]
    )

    images.push({
      id: item.id,
      src: img.src,
      blurData: base64,
      alt: item?.caption || "",
    })
  }

  return {
    images,
    cursor: responseData.paging.cursors.after,
  }
}
