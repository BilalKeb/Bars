
import { useContext} from "react"
import GoogleMapReact from 'google-map-react';
import { MapContext } from "../contexts/Map";
import styled from 'styled-components'

const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
`

const Map = () => {
const {location} = useContext (MapContext)
    if (!location) {
        return <p>Chargement...</p>
      }

    return(
        <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={14}
        >
        </GoogleMapReact>
      </MapContainer>
    )
}

            
    

export default Map;