import { useEffect } from "react";



export function Location(props) {

        function getLocation()  {
            if (!navigator.geolocation) {
                props.setStatus('Geolocation is not supported by your browser');
            } else {
                props.setStatus('Locating...');
                navigator.geolocation.getCurrentPosition((position) => {
                    props.setStatus(null);
                    props.setLat(position.coords.latitude);
                    props.setLng(position.coords.longitude);
                }, () => {
                    props.setStatus('Unable to retrieve your location');
                });
            }
            props.setLocationParam(`lat=${props.lat}&lng=${props.lng}`)
            // setSwitch('coordinates')
        }
        

    const onCurrentClick = () => {

        getLocation();
        

        // props.setSwitch('coordinates')
        
    }

    const onCityChange = (event) => {
        // props.setCity(event.target.value)
        // props.setSwitch('search')
        props.setLocationParam(`city=${event.target.value}`)
    }

    
    return (

        <>
        <button onClick={onCurrentClick}>Use Current Location?</button>
        <input value={props.city} onChange={onCityChange}></input>
        </>
    )

}