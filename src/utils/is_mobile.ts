export const IsMobile = () => {
  if (typeof window !== "undefined") {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
  }

  return false
}
