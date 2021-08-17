import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { CustomMarker } from "./marker"
import { LatLngExpression } from "leaflet"

import "leaflet/dist/leaflet.css"

const Position: LatLngExpression = [-33.0863235, 18.0359083]

const Map = () => {
  return (
    <MapContainer
      center={Position}
      zoom={15.5}
      scrollWheelZoom={false}
      className="absolute inset-0 w-full h-full bg-gray-900 border-none"
    >
      <TileLayer
        // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker icon={CustomMarker} position={Position}>
        {/* <Popup className="">
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  )
}

export default Map
