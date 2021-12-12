import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';



const Login = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [message,setMessage] = useState("  ");
    
    
    const checkId = (data) => {
      if (data.id !== null){
        setMessage("Ingreso Exitoso")
      }
      else{
        setMessage("Credenciales equivocadas")
      }
    }


    const login = async(event) => {
      event.preventDefault();
      const credentials = {
        email:emailRef.current.value,
        password:passwordRef.current.value,
   
    }
    if (credentials.email != "" && credentials.password != "") {
      try{
        const url = "http://132.226.165.142/api/user/"+ credentials.email + "/" + credentials.password
        const response = await fetch(url)
        
        const data = await response.json();
        checkId(data)

      }
      catch(e){
        setMessage("Problemas de Conexion")
      }
    }


    }
    
    return(

        <div className="container-fluid">
           <div className="alert alert-primary" ><h4>{message}</h4></div>
    <Form onSubmit={login} >
      <div className="row justify-content-center mt-5">
        <div id="boxForm" className="col-6 p-5 rounded text-black">

          <div className="text-center">
            <h2 className="text-black">Inicio de sesion</h2>
          </div>

       
          <Form.Group className="form-group">
            <label htmlFor="useremail">E-mail</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="logoInput"><i className="bi bi-person-bounding-box text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="email" className="form-control" placeholder="@ Usuario" ref={emailRef} name="useremail" id="useremail" required="required"
                title="El usuario no puede llevar espacios en blanco"/>
            </div>
          </Form.Group>

     
          <Form.Group className="form-group" controlId="formBasicPassword">
            <label htmlFor="password">Contraseña</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="logoInput"><i className="bi bi-key text-black"></i></span>
              <Form.Control type="password" className="form-control" placeholder="Contraseña" name="password" id="password" ref={passwordRef}
                     required="required" title="La contraseña no puede llevar espacios en blanco"/>
     
              <span className="input-group-text" id="showPassword" type="button" ><i
                  className="bi bi-eye" id="icon"></i></span>
           
            </div>
          </Form.Group>



         

   
          <div className="form-group text-center">
              <Button id="btnMain" type="submit" name="submit" className="btn btn-info btn-md"  >
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