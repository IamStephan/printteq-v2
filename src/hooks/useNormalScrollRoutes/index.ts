import { useEffect } from "react"
import { useRouter } from "next/router"

const useNormalScrollRoutes = () => {
  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("normal-scroll")
    })
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("normal-scroll")
    })
  }, [])
}

export { useNormalScrollRoutes }
