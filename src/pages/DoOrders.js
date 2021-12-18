import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';


const OrderForm = (props) => {
  const [message,setMessage] = useState("  ");

  const ref =  useRef('');
  const quantityProd  = useRef('');

const log = () => {
    if (props.userId == 0) {
        return(<p>Debe ingresar al sistema</p>)
    } 
    else {
        return(<p></p>)
    }
}
const saveOrder = async() => {
  let dkey = ref.current.value.toString()

  const Order = {
      id: Math.floor(Math.random() * (100000 - 1)) + 1,
      salesMan: {id:props.userId},
      registerDay:new Date(),
      products: {[dkey]:{reference:ref.current.value}},
      quantities:{[dkey]:quantityProd.current.value},
      status:"Pendiente",
    };
    
    try{
      const response = await fetch( "http://132.226.165.142/api/order/new", {
        method: 'POST',
        body: JSON.stringify(Order),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(Order)
      setMessage("Envio exitoso de la siguiente orden: " + JSON.stringify(data))
    }
    catch(err){
      setMessage("Error" + err.toString())
    }
}




return(
    <div className="container-fluid">
    <div className="alert alert-primary"><h4>{message}{log()}</h4></div>
    <Form id="formf">
      <div className="row justify-content-center mt-5">
        <div id="boxForm" className="col-6 p-5 rounded text-black">

         
          <div className="text-center">
            <h2 className="text-black">Hacer una nueva orden</h2>
          </div>

          <Form.Group className="form-group">
            <label htmlFor="modelProd">Referencia del producto</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="logoInput"><i className="bi bi-qr-code text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" className="form-control" placeholder="Referencia" ref={ref} id="modelProd" required/>
            </div>
          </Form.Group>

        <Form.Group className="form-group">
          <label htmlFor="quantityProd">Cantidad</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-123 text-black" id="logoPeople"></i></span>
            <Form.Control type="number" min="0" className="form-control" placeholder="Cantidad" ref={quantityProd}
              id="quantityProd" required/>
          </div>
        </Form.Group>

    
    
          <Form.Group className="form-group text-center">
      
            <Button className="submit" onClick={saveOrder} id="btnMain" name="guardaeDatos"
              value="Guardar">Guardar</Button>
            <Button className="button" id="btnMain" name="cancelarDatos" value="Cancelar">Cancelar</Button>
          </Form.Group>
        </div>
      </div>
    </Form>
  </div>

    )
}
export default OrderForm