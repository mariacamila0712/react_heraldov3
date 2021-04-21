import React from "react";
import './Pagination.css';

function Pagination() {
  return (
    <nav class= "navbar navbar-inverse fixed top">
    <div className="navbar">
      <ul class="nav navbar-nav">
        <li>
          <a href="#">Página inicial</a>
        </li>
        <li>
          <a>Pág. 2</a>
        </li>
        <li>
          <a>Pág. 3</a>
        </li>
        <li>
          <a>Pág. 4</a>
        </li>
        <li>
          <a>Pág. 5</a>
        </li>
      </ul>
    </div></nav>
  );
}

export default Pagination ;
