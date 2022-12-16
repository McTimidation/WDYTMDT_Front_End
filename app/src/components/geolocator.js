import { useEffect } from "react";



export function Location(props) {

        
            
        

    const onCurrentClick = () => {
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
        
    }
        

        
        
    

    const onCityChange = (event) => {
        // props.setCity(event.target.value)
        // props.setSwitch('search')
        props.setLocationParam(`city=${event.target.value}`)
    }

    
    return (

        <div id="locationBox">
        <button id="coorButton" onClick={onCurrentClick}>Click here to use current location</button>
        <p>OR Enter a City Below</p> 
        <input id="cityInput" value={props.city} onChange={onCityChange} placeholder="Lexington"></input>
        </div>
    )

}