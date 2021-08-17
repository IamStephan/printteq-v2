import L from "leaflet"

const IconPublicURL = "/pin-alt.svg"

const CustomMarker = L.icon({
  iconUrl: IconPublicURL,
  iconRetinaUrl: IconPublicURL,
  iconSize: new L.Point(50, 50),
  className: "",
})

export { CustomMarker }
