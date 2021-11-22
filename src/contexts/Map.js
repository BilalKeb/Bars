import { createContext, useEffect, useState } from "react"
import barsMap from "../bars.json"

const MapContext= createContext({})


      
    const MapContextProvider=(props)=> {
        const [location, setLocation]=useState (null);
        const [bars, setbBars]=useState (barsMap);
        
        const value = {
        location: location,
        bars: bars
    }
    


    useEffect(()=> {
        navigator.geolocation.getCurrentPosition (
           location => {
               console.log(location)
               setLocation({
                   lat:location.coords.latitude,
                   lng:location.coords.longitude
               })
           },
           error => {
               console.log(error)
           }
           ) 
    },[]);

 
    return (
        <>
         <MapContext.Provider value={value}>
            {props.children}
        </MapContext.Provider>
        </>
    );
};

export {
    MapContext,
    MapContextProvider}