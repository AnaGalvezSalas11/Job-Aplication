import React from 'react';
import './galeryimg.css';


function ImageApi(props){
    // console.log(ImageApi)
    

    return(
        <div className="element">
            <img className="img"  onClick={()=> props.click(props)} src={props.imageURL} alt="imagen"></img>
        </div>
    
    )
}

    export default ImageApi;

