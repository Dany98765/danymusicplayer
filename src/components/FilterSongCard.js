import React from "react";

export default function FilterSongCard(props){
    return(
        <div className="song--card">
            <img className="song--img" src={props.img}/>
            <h3 className="song--title">{props.title}</h3>
            <p className="song--subtitle">{props.subtitle}</p>
        </div>
    )
}
