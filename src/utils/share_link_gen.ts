import { ObjectToGetParams } from "@utils/object_to_get_params"
import { IsMobile } from "@utils/is_mobile"

export const FacebookShareLink = (
  url: string,
  options: {
    quote?: string
    hashtag?: string
  }
) => {
  const { quote, hashtag } = options
  const baseURL = "https://www.facebook.com/sharer/sharer.php"

  return `${baseURL}${ObjectToGetParams({
    u: url,
    quote,
    hashtag,
  })}`
}

export const LinkedShareLink = (
  url: string,
  options: {
    title?: string
    summary?: string
    source?: string
  }
) => {
  const { title, summary, source } = options
  const baseURL = "https://www.facebook.com/sharer/sharer.php"

  return `${baseURL}${ObjectToGetParams({
    u: url,
    title,
    summary,
    source,
  })}`
}

export const WhatsappShareLink = (
  url: string,
  options: {
    message?: string
  }
) => {
  const { message } = options
  const baseURL = `https://${IsMobile() ? "api" : "web"}.whatsapp.com/send'`

  return `${baseURL}${ObjectToGetParams({
    text: message ? `${message}: ${url}` : url,
  })}`
}
