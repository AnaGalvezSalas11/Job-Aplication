import React from 'react'
import './nav.css'



function NavPinterest(){
    return(
    <div>
    <nav className="elementNav">

        <ul className = "btnnav" >
            <i className="fab fa-pinterest fa-2x logopinterest"></i>
            <input placeholder="Buscar" className=" search" ></input>
            <a className="iconNavInicio" href="#" alt="#" >Inicio</a>
            <a className="iconNav" href="#" alt="#" >Siguiendo</a>
            <a className="iconNav" href="#" alt="#">Anita G</a>
            <i class="fas fa-comment-dots fa-2x logoChat"></i>
            <i class="fas fa-bell fa-2x logoAlert"></i>
            <a className="iconNav points" href="#" alt="#">...</a>

        </ul>

    </nav>
    </div>
    )
}

export default NavPinterest;


