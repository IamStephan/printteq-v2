export const ObjectToGetParams = (
  data: Record<string, string | number | undefined | null>
): string => {
  const params = Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )

  return params.length > 0 ? `?${params.join("&")}` : ""
}
