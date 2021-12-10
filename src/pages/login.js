import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


const Login = () => {
    return(
        <div className="container-fluid">
    <Form>
      <div className="row justify-content-center mt-5">
        <div id="boxForm" className="col-6 p-5 rounded text-black">

          <div className="text-center">
            <h2 className="text-black">Inicio de sesion</h2>
          </div>

       
          <Form.Group className="form-group">
            <label for="useremail">E-mail</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="logoInput"><i className="bi bi-person-bounding-box text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="email" className="form-control" placeholder="@ Usuario" name="useremail" id="useremail" required="required"
                title="El usuario no puede llevar espacios en blanco"/>
            </div>
          </Form.Group>

     
          <Form.Group className="form-group" controlId="formBasicPassword">
            <label for="password">Contraseña</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="logoInput"><i className="bi bi-key text-black"></i></span>
              <Form.Control type="password" className="form-control" placeholder="Contraseña" name="password" id="password"
                     required="required" title="La contraseña no puede llevar espacios en blanco"/>
     
              <span className="input-group-text" id="showPassword" type="button" onclick="showPassword()"><i
                  className="bi bi-eye" id="icon"></i></span>
           
            </div>
          </Form.Group>



         

   
          <div className="form-group text-center">
              <Button id="btnMain" type="submit" name="submit" className="btn btn-info btn-md" onClick="login()" >
                  Iniciar Sesion
              </Button>
          </div>

         
          <div className="text-center">
            <p className="text-center text-black">¿No tienes una cuenta?
              <a href="registro.html" >Crear una cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </Form>
  </div>
    )
}
export default Login;