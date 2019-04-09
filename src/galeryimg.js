import React from 'react';
import './galeryimg.css'


function ImageApi(props){
    

    return(
        <div className="elemento">
            <img className="img" onClick={()=> props.hacerclick(props.imageURL)} src={props.imageURL} alt="imagen"></img>
            {/* <p>{props.descriptionImg}</p> */}
        </div>
    
    )
}

    export default ImageApi;

