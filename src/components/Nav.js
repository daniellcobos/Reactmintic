import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <header>
           <div className="container-fluid bg-dark d-flex justify-content-center" id="header">
    <img src="Images/Logo_Tienda2.png" width="80" height="80" id="logoShop" alt="noimg"/>
    <p>...</p>
    <div className="company_name">Zorillo LTDA</div>
  </div>
  <ul className="nav nav-tabs" id="menu">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/login" id="activeOption">Ingresar</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/registro" id="inactiveOption">Registrarse</Link>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="userForm.html" id="inactiveOption">Registro Funcionario</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="fraganceForm.html" id="inactiveOption">Registro Producto</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="tableUser.html" id="inactiveOption">Admon Usuarios</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="registroProductos.html  " id="inactiveOption">Inventario Productos</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"
        id="inactiveOption">Idiomas</a>
      <ul className="dropdown-menu" id="itemList">
        <li><a className="dropdown-item" href="#">Español</a></li>
        <li><a className="dropdown-item" href="#">Ingles</a></li>
      </ul>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="contact.html" id="inactiveOption">Contactanos</a>
    </li>
  </ul>
        </header>
    )
}
export default Nav;