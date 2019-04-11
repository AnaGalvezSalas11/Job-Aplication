import React from 'react';
import './galeryimg.css';


function ImageApi(props){
    

    return(
        <div className="element">
            <img className="img"  onClick={()=> props.click(props)} src={props.imageURL} alt="imagen"></img>
            {/* <p>{props.descriptionImg}</p> */}
        </div>
    
    )
}

    export default ImageApi;

