import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';

const Registro = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const passConfirmRef = useRef("");

 
    
    const [message,setMessage] = useState("  ");


    const createUser = async(event) => {
        event.preventDefault();
        const newUser = {
            id: Math.floor(Math.random() * (100000 - 1)) + 1,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            name: nameRef.current.value,
        }
        try{
            const response = await fetch( "http://132.226.165.142/api/user/new", {
              method: 'POST',
              body: JSON.stringify(newUser),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            setMessage("Creacion exitosa del usuario " + newUser.name)
          }
          catch(err){
            setMessage("Error" + err.toString())
          }
    }

    return (
        <div className="container-fluid">
        <div className="alert alert-primary"><h4>{message}</h4></div>
        <Form id="formf" onSubmit={createUser}>
            <div className="row justify-content-center mt-5">
                <div id="boxForm" className="col-6 p-5 rounded text-black">

                  
                    <div className="text-center">
                        <h2 className="text-black">Crear Cuenta</h2>
                    </div>

                  
                    <Form.Group className="form-group">
                        <label htmlFor="username">Nombre</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="logoInput">
                                <i className="bi bi-person-bounding-box text-black" id="logoPeople"></i>
                            </span>
                            <Form.Control  type="text" className="form-control" placeholder="@ Nombre" ref={nameRef} id="username"
                                required="required"/>
                        </div>
                    </Form.Group>

                  
                    <Form.Group className="form-group"  controlId="formBasicEmail">
                        <label htmlFor="useremail">E-mail</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="logoInput">
                                <i className="bi bi-envelope-fill text-black" id="logoPeople">
                                </i></span>
                            <Form.Control  type="email" className="form-control" placeholder="@ Usuario" ref={emailRef}
                                id="useremail" required="required"/>
                        </div>
                    </Form.Group>

                   
                    <Form.Group className="form-group" controlId="formBasicPassword">
                        <label htmlFor="password">Contraseña</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="logoInput"><i className="bi bi-key text-black"></i></span>
                            <Form.Control  type="password" className="form-control" placeholder="Contraseña" ref={passwordRef}
                                id="password" required="required"/>
                        </div>
                    </Form.Group>

                  
                    <Form.Group className="form-group" controlId="formBasicPassword">
                        <label htmlFor="passwordrepeat">Confirmar Contraseña</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="logoInput"><i className="bi bi-key text-black"></i></span>
                            <Form.Control  type="password" className="form-control" placeholder="Contraseña" ref={passConfirmRef}
                                id="passwordrepeat" required="required"/>
                        </div>
                    </Form.Group>

                   
                    <div className="form-group text-center">
                        <Button id="btnMain" type="submit" className="btn btn-info btn-md"
                            value="Registrar Usuario" > Registrar Usuario</Button>
                    </div>

                  
                    <div className="text-center">
                        <p className="text-center text-black">¿Ya tienes cuenta?
                            <a href="index.html">Ingresa Aqui</a>
                        </p>
                    </div>
                </div>
            </div>
        </Form>
    </div>
    )
    
}

export default Registro