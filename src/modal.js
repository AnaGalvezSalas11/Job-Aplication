import React from 'react';
import './modal.css'

function Modal(props){
return(
    <div className = "contenedorModal" onClick={(e)=> {
        if (e.target.getAttribute("class")==="contenedorModal"){
            props.cerrarmodal()
        }
    } } >
        <div className = "titanic" >
        <img className="img"  src={props.verimagenpuntual} alt="imagen"></img>
        </div>
    </div>

)


}

export default Modal;