import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


const Registro = () => {
    return (
        <div class="container-fluid">
        <Form id="formf">
            <div class="row justify-content-center mt-5">
                <div id="boxForm" class="col-6 p-5 rounded text-black">

                  
                    <div class="text-center">
                        <h2 class="text-black">Crear Cuenta</h2>
                    </div>

                  
                    <Form.Group class="form-group">
                        <label for="username">Nombre</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="logoInput">
                                <i class="bi bi-person-bounding-box text-black" id="logoPeople"></i>
                            </span>
                            <Form.Control  type="text" class="form-control" placeholder="@ Nombre" name="username" id="username"
                                required="required"/>
                        </div>
                    </Form.Group>

                  
                    <Form.Group class="form-group"  controlId="formBasicEmail">
                        <label for="useremail">E-mail</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="logoInput">
                                <i class="bi bi-envelope-fill text-black" id="logoPeople">
                                </i></span>
                            <Form.Control  type="email" class="form-control" placeholder="@ Usuario" name="useremail"
                                id="useremail" required="required"/>
                        </div>
                    </Form.Group>

                   
                    <Form.Group class="form-group" controlId="formBasicPassword">
                        <label for="password">Contraseña</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="logoInput"><i class="bi bi-key text-black"></i></span>
                            <Form.Control  type="password" class="form-control" placeholder="Contraseña" name="password"
                                id="password" required="required"/>
                        </div>
                    </Form.Group>

                  
                    <Form.Group class="form-group" controlId="formBasicPassword">
                        <label for="passwordrepeat">Confirmar Contraseña</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="logoInput"><i class="bi bi-key text-black"></i></span>
                            <Form.Control  type="password" class="form-control" placeholder="Contraseña" name="passwordrepeat"
                                id="passwordrepeat" required="required"/>
                        </div>
                    </Form.Group>

                   
                    <div class="form-group text-center">
                        <Button id="btnMain" type="submit" name="submit" class="btn btn-info btn-md"
                            value="Registrar Usuario" > Registrar Usuario</Button>
                    </div>

                  
                    <div class="text-center">
                        <p class="text-center text-black">¿Ya tienes cuenta?
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