import { Link } from "react-router-dom";

const Nav = (props) => {

   const perfilLink = () => {
    if (props.userId == 0){
      return(<p></p>)
      }
      else{
        return( <Link className="nav-link" to={"/usuario/" + props.userId}> Mi Perfil</Link>)
      }
   }


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
      <Link className="nav-link" to='/AdminUsuarios' id="inactiveOption">Registro Funcionario</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/registroProductos" id="inactiveOption">Registro Producto</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/listaUsuarios" id="inactiveOption">Admin Usuarios</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/listaProductos"  id="inactiveOption">Inventario Productos</Link>
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
    <li className="nav-item">
       {perfilLink()}
    </li>
  </ul>
        </header>
    )
}
export default Nav;