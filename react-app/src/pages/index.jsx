import React from "react";

export default function Index(){
    return (
        <div class="wrapper">
      <script type="module" src="/src/main.jsx"></script>
      <form id="login-form" action="#">
        <h2>Iniciar Sesion</h2>
        <div class="input-field">
          <input type="text" id="username" required />
          <label>Usuario</label>
        </div>
        <div class="input-field">
          <input type="password" id="password" required />
          <label>Contraseña</label>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
    )
}