import React,{useState, useEffect, useContext} from 'react'
import GeolocationContext from '../../context/GeolocationContext'
import { useFetch } from '../../hooks/useFetch'

const MainComponent = () => {

    //Desestructuramos myPosition y GeolocationError del Context.
    const {myPosition, geolocationError} = useContext(GeolocationContext)

    //Definimos constantes, latitud , longitud y APIKEY para armar la URL del pedido.
    const latitude = myPosition.latitude || "", longitude = myPosition.longitude|| "", APIKEY = "563f7b3abd1587500f94949f2e242e8b"

    // Definimos URL para ser usada por el hook de useFetch.
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`

    // Desestructuramos los estados provenientes del useFetch.
    const { data, error, loading } = useFetch(url)

    console.log(data,error)

    useEffect(() => {
        
    }, [myPosition])

    if (geolocationError) return <h1>{geolocationError}</h1>
    
    if (loading) return <h1>LAODING....</h1>

    if (error) return <h1>{error}</h1>

    return (
        <div>
            <h2>Main Component</h2>
        </div>
    )
}

export default MainComponent
