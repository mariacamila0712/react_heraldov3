import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div class="container bg-warning thumbnail text-center">
        <ul className="Navbar1" class="nav nav-tabs col-sm-10"
            >
            <li className="Navbar1"><a href="#">Noticias</a></li>
            <li className="Navbar1"><a href="#">Judiciales</a></li>
            <li className="Navbar1"><a href="#">Deportes</a></li>
            <li className="Navbar1"><a href="#">Clasificados</a></li>
            <li className="Navbar1"><a href="#">Politica</a></li>
            <div class="col-sm-2 dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Noticias
                    <span class="caret"></span></button>
                <ul class="dropdown-menu">
                    <li><a href="#">Locales</a></li>
                    <li><a href="#">Regionales</a></li>
                    <li><a href="#">Pais</a></li>
                </ul>
            </div>
            <p className="search1" class="col-sm-2">Búsqueda:
            <input
            id="search"
            type="text"
            class="form-control"
            name="search"
            placeholder="Ingrere noticia a buscar"
          />
                <button type="button" class="btn btn-default">
                    <span class="glyphicon glyphicon-search"></span> Buscar
                </button>
            </p>
        </ul>
    </div>
  );
}

export default Navbar;
