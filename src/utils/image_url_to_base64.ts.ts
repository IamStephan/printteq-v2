export const ImageUrlToBase64 = async (url: string, type: string) => {
  const res = await fetch(url)
  const arrayBuff = await res.arrayBuffer()

  return `data:${type};base64,${Buffer.from(arrayBuff).toString("base64")}`
}
