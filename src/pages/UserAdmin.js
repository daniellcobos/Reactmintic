import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';

const UserAdmin = () => {
    const [message,setMessage] = useState("  ");
    const idRef = useRef("")
    const nameRef = useRef("")
    const addRef =  useRef("")
    const phoneRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const zoneRef = useRef("")
    const typeRef =useRef("")


    const saveUser= async() => {
    const newUser = {
        id:  Math.floor(Math.random() * (1000000 - 1)) + 1,
        identification : idRef.current.value,
        name : nameRef.current.value,
        address : addRef.current.value,
        cellPhone :phoneRef.current.value,
        email :emailRef.current.value,
        password : passwordRef.current.value,
        zone :zoneRef.current.value,
        type :typeRef.current.value,
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
        console.log(data)
        setMessage("Creacion exitosa del usuario " + newUser.name)
      }
      catch(err){
        setMessage("Error" + err.toString())
      }
}





    return(
        
  <div class="container-fluid">
      <div className="alert alert-primary"><h4>{message}</h4></div>
  <Form id="formf" onSubmit={saveUser}>
    <div class="row justify-content-center mt-3">
      <div id="boxForm" class="col-6 p-5 rounded text-black">

       
        <div class="text-center">
          <h2 class="text-black">Registro Funcionario Nuevo</h2>
        </div>

      
        <Form.Group>
          <label htmlFor="identificationUser">Identificacion</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="logoInput"><i class="bi bi-upc-scan text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" class="form-control" placeholder="Identificacion" ref={idRef}
              id="identificationUser" required pattern="\S+"
              title="La Identificacion no puede llevar espacios en blanco"/>
          </div>
        </Form.Group>

      
        <Form.Group>
          <label htmlFor="nameUser">Nombre</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="logoInput"><i class="bi bi-person-plus-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" class="form-control" placeholder="Nombre" ref={nameRef} id="nameUser" required/>
          </div>
        </Form.Group>

       
        <Form.Group>
          <label htmlFor="addressUser">Direccion</label>
          <div class="Form.Control-group mb-3">
            <span class="Form.Control-group-text" id="logoInput"><i class="bi bi-house-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" class="form-control" placeholder="Direccion" ref={addRef} id="addressUser"
              required/>
          </div>
        </Form.Group>

       
        <Form.Group>
          <label htmlFor="cellphoneUser">Telefono</label>
          <div class="Form.Control-group mb-3">
            <span class="Form.Control-group-text" id="logoInput"><i class="bi bi-telephone-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" class="form-control" placeholder="Telefono" ref={phoneRef} id="cellphoneUser"
              required pattern="\S+" title="El numero telefonico no puede llevar espacios en blanco"/>
          </div>
        </Form.Group>

        
        <Form.Group>
          <label htmlFor="emailUser">Email</label>
          <div class="Form.Control-group mb-3">
            <span class="Form.Control-group-text" id="logoInput"><i class="bi bi-envelope-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="email" class="form-control" placeholder="@ Email" ref={emailRef} id="emailUser" required
              pattern="\S+" title="El email no puede llevar espacios en blanco"/>
          </div>
        </Form.Group>

     
        <Form.Group>
          <label htmlFor="passwordUser">Contrase??a</label>
          <div class="input-group mb-3">
            <span class="Form.Control-group-text" id="logoInput"><i class="bi bi-key text-black"></i></span>
            <Form.Control type="password" class="form-control" placeholder="Contrase??a" ref={passwordRef} id="passwordUser"
              required/>
            </div>
          </Form.Group>
       

        
        <Form.Group>
          <label htmlFor="zoneUser">Zona</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="logoInput"><i class="bi bi-diagram-3-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" class="form-control" placeholder="Zona" ref={zoneRef} id="zoneUser" required/>
          </div>
        </Form.Group>

        
        <div class="col-md-13">
          <label htmlFor="typeUser" class="form-label" id="labelInput">Tipo Usuario</label>
          <select class="form-select" id="typeUser" required ref={typeRef}>
            <option selected disabled value="">Tipo Usuario</option>
            <option value="coordinadorZona">Coordinador de zona</option>
            <option value="asesorComercial">Asesor Comercial</option>
          </select>
        </div>

      
        <div class="form-group text-center">
          <Button class="submit" id="btnMain"
            value="Guardar">Guardar</Button>
          <button class="button" id="btnMain" value="Cancelar">Cancelar</button>
        </div>
      </div>
    </div>
  </Form>
</div>

    )
}
export default UserAdmin