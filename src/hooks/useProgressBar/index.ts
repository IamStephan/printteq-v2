import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nprogress"

let timer: any

export const useProgressBar = (startPos: number, stopDelayMs: number) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.set(startPos)
      NProgress.start()
    })
    router.events.on("routeChangeComplete", () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        NProgress.done(true)
      }, stopDelayMs)
    })
  }, [])
}
