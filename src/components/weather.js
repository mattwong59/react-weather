import React from 'react'

const Weather = (props) =>  (
    <React.Fragment>
        {props.city && props.country &&  <p>Location: {props.city}, {props.country}</p>}
        {props.temp && <p>Temperature: { props.temp }</p>}
        {props.humidity && <p>Humidity: { props.humidity }</p>}
        {props.description && <p>Conditions: { props.description }</p>}
        {props.error && <p>{ props.error }</p>}      
    </React.Fragment>
)

export default Weather;