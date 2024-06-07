import React from "react";
export default function Star(props){
    let imgUrl;
    if (props.contact.isFavorite) {
        imgUrl = "./images2/star-filled.png"
    }
    else {
        imgUrl = "./images2/star-empty.png"
    }
    return (
        <div>
            <img
            src={`${imgUrl}`}
            className="card--favorite"
            onClick={props.handleClick}
        />
            
        </div>
        
    )
}