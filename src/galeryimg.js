import React from 'react';
import './galeryimg.css'


function ImageApi(props){
    

    return(
        <div className="contenedor">
        <div className="elemento">
            <img className="img" src={props.imageURL} alt="imagen"></img>
            <p>{props.descriptionImg}</p>
            
        </div>
      </div>
    )
}

    export default ImageApi;

