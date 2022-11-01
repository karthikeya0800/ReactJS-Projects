import React from "react"

export default function Section(props){
    return(
        <div className="card">
            <div className="place">
                <img className="place-img" src={props.imageUrl}/>
                <div className="loc-details">
                    <img className="loc-logo" src="./Images/location-logo.png"/>
                    <span className="place-location">{props.location.toUpperCase()}</span>
                    <span><a className="place-mapurl" href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <p className="place-title">{props.title}</p>
                <p className="place-duration">{props.startDate} - {props.endDate}</p>
                <p className="place-description">{props.description}</p>
            </div>
            <hr></hr>
        </div>     
    )
}