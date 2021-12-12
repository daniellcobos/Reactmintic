import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



const ProductEdit=(props) => {
    
    
    
    const available = useRef('');
    const brandProd  = useRef('');
    const categoriaProd  = useRef('');
    const presentacionProd  = useRef('');
    const priceProd  = useRef('');
    const descProd  = useRef('');
    const quantityProd  = useRef('');
    const fotoProd  = useRef('');
const saveFragance = (id) => {
    

    const fragance = {
   
        availability:available.current.value,
        brand: brandProd.current.value,
        category: categoriaProd.current.value,
        description: descProd.current.value,
        photography: fotoProd.current.value, 
        presentation: presentacionProd.current.value,
        price: priceProd.current.value,
        quantity: quantityProd.current.value,
        reference: id,
      };
      console.log(fragance)
      console.log("component here")
      props.onEditProduct(fragance)
}



return( <div className="container-fluid">
  <Form id="formf">
    <div className="row justify-content-center mt-5">
      <div id="boxForm" className="col-6 p-5 rounded text-black">

       
        <div className="text-center">
          <h2 className="text-black">Edicion Producto</h2>
        </div>
        <Form.Group className="form-group">
          <label htmlFor="brandProd">Marca</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-playstation text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" className="form-control" placeholder="Marca" ref={brandProd} id="brandProd" required/>
          </div>
        </Form.Group>
        < Form.Group className="form-group">
          <label htmlFor="categoriaProd">Categoria</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-diagram-2-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" className="form-control" placeholder="Categoria" ref={categoriaProd} id="categoriaProd"
              required/>
          </div>
        </Form.Group>
        <Form.Group className="form-group">
          <label htmlFor="presentacionProd">Presentacion</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-eyedropper text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" className="form-control" placeholder="Presentacion" ref={presentacionProd}
              id="presentacionProd" required/>
          </div>
        </Form.Group>
        <Form.Group className="form-group">
          <label htmlFor="descProd">Descripcion</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-chat-square-text-fill text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" className="form-control" placeholder="Descripcion" ref={descProd} id="descProd" required/>
          </div>
        </Form.Group>

   
        <Form.Group className="col-md-13">
          <label htmlFor="availabilityProduct" className="form-label" id="labelInput">Disponibilidad</label>
          <select className="form-select" id="availabilityProduct" required ref={available}>
            <option selected disabled value="">Disponibilidad</option>
            <option value="true">SI</option>
            <option value="false">NO</option>
          </select>
        </Form.Group>


        <Form.Group className="form-group">
          <label htmlFor="priceProd">Precio</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-currency-dollar text-black"
                id="logoPeople"></i></span>
            <Form.Control type="number" min="0" className="form-control" placeholder="Precio" ref={priceProd} id="priceProd"
              required/>
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

    
        <Form.Group className="form-group">
          <label htmlFor="fotoProd">Fotografia</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="logoInput"><i className="bi bi-card-image text-black"
                id="logoPeople"></i></span>
            <Form.Control type="text" className="form-control" placeholder="URL Fotografia" ref={fotoProd} id="fotoProd"
              required/>
          </div>
        </Form.Group>

  
        <Form.Group className="form-group text-center">
    
          <Button className="submit" onClick={() => saveFragance(props.id)} id="btnMain" 
            value="Guardar">Guardar</Button>
          <Button className="button" onClick={() => {console.log("Cancelar")}} id="btnMain"  value="Cancelar">Cancelar</Button>
        </Form.Group>
      </div>
    </div>
  </Form>
</div>)
}
export default ProductEdit