import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { ADDRESS } from '../data/site'

/**
 * Red teardrop pin as a DivIcon — geographically anchored to the address
 * (so it stays on the building no matter how the user zooms or pans).
 */
const PIN_HTML = `
<div class="lc-pin-wrap">
  <span class="lc-pin-pulse"></span>
  <svg width="36" height="48" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg" class="lc-pin-svg">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 8.5 12 20 12 20s12-11.5 12-20C24 5.4 18.6 0 12 0z"
          fill="#E63946" stroke="#FFFFFF" stroke-width="0.9" />
    <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
  </svg>
</div>`

const redPin = L.divIcon({
  html: PIN_HTML,
  className: 'lc-pin-icon',
  iconSize: [36, 48],
  iconAnchor: [18, 48],
  tooltipAnchor: [0, -48],
})

export default function MapEmbed({
  className = '',
  zoom = 16,
  tooltip = ADDRESS.street,
}) {
  return (
    <MapContainer
      center={[ADDRESS.lat, ADDRESS.lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      zoomControl
      className={`map-grayscale ${className}`}
      style={{ background: '#080808' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ADDRESS.lat, ADDRESS.lng]} icon={redPin}>
        {tooltip && (
          <Tooltip direction="top" offset={[0, -8]} opacity={1} permanent={false}>
            {tooltip}
          </Tooltip>
        )}
      </Marker>
    </MapContainer>
  )
}
