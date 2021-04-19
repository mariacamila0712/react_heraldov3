import React from 'react';

function Navbar(){
    return(
        <div className="navbar">
            <ul className="navbar_items">
            <li><a>Noticias</a></li>
            <li><a>Judiciales</a></li>
            <li><a href="#">Deportes</a></li>
            <li><a href="#">Clasificados</a></li>
            <li><a href="#">Politica</a></li>
                
        </ul>
        </div>
    )
}

export default Navbar;