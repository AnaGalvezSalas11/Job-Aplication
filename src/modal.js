import React from 'react';
import './modal.css'

function Modal(props){
return(
    
    <div className = "containerModal" onClick={(e)=> {
        if (e.target.getAttribute("class")==="containerModal"){
            props.closemodal()}
    } } >
        <div className= "divBig">
            <div className="headModal" >
                <p className="pointsModal">...</p>
                <button className="btnHead submit">Enviar</button>
                <button className="btnHead save" >Guardar</button>

            </div>
            <div className = "imgModalWhatch" >
                <div className="divImage">
                <img className="imgModal"  src={props.imgModal} alt="imagen"></img>
                </div>
            <div className="divContent">
                <div className="divTextContent">
                    <p className="textModal titlemodal" >{props.newtitle}</p>
                    <p className="textModal descriptionmodal">{props.newdescription}</p>
                    <p className="textModal option">Fotos y Comentarios</p>
                </div>
                
            </div>
            </div>
        </div>
    </div>

)


}

export default Modal;