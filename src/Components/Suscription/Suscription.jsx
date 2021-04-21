import React from "react";
import './Suscription.css';


function Suscription() {
  return (
    <div className="form1" class="container bg-warning thumbnail">
      <h2>
        <strong className="tit_susc">SUSCRIBETE.</strong>
      </h2>
      <p className="text">Recibe el contenido de noticias gratis en tu correo electronico.</p>
      <form class ="for-line" action ="/action_page.php">
        <div class="form-group">
        <i class="glyphicon glyphicon-user"></i>
          <label className="tit_susc" for="name">Nombre completo:</label>
          <input
            id="name"
            type="text"
            class="form-control"
            name="name"
            placeholder="Ingrese su nombre completo"
          />
        </div>
        <div class="form-group">
          <label className="tit_susc" for="Email">Email: </label>
          <input
            id="email"
            type="email"
            class="form-control"
            name="email"
            placeholder="Ingrere su correo electronico"
          />
        </div>
        <div class="checkbox">
                <label className="text">
                    <input  type="checkbox" name="remember"/> 
                    Aceptar términos y condiciones.
                </label>
              </div>
              <button type="submit" class="btn btn-default">Enviar</button>
      </form>
    </div>
  );
}

export default Suscription;
