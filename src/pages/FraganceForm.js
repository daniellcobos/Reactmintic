import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



const FraganceForm = () => {
    return(
    <div class="container-fluid">
    <Form id="formf">
      <div class="row justify-content-center mt-5">
        <div id="boxForm" class="col-6 p-5 rounded text-black">

         
          <div class="text-center">
            <h2 class="text-black">Registro Producto Nuevo</h2>
          </div>

          <Form.Group class="form-group">
            <label for="modelProd">Referencia</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-qr-code text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" class="form-control" placeholder="Referencia" name="modelProd" id="modelProd" required/>
            </div>
          </Form.Group>


          <Form.Group class="form-group">
            <label for="brandProd">Marca</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-playstation text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" class="form-control" placeholder="Marca" name="brandProd" id="brandProd" required/>
            </div>
          </Form.Group>

        
          < Form.Group class="form-group">
            <label for="categoriaProd">Categoria</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-diagram-2-fill text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" class="form-control" placeholder="Categoria" name="categoriaProd" id="categoriaProd"
                required/>
            </div>
          </Form.Group>


          <Form.Group class="form-group">
            <label for="presentacionProd">Presentacion</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-eyedropper text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" class="form-control" placeholder="Presentacion" name="presentacionProd"
                id="presentacionProd" required/>
            </div>
          </Form.Group>

    
          <Form.Group class="form-group">
            <label for="descProd">Descripcion</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-chat-square-text-fill text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" class="form-control" placeholder="Descripcion" name="descProd" id="descProd" required/>
            </div>
          </Form.Group>

     
          <Form.Group class="col-md-13">
            <label for="availabilityProduct" class="form-label" id="labelInput">Disponibilidad</label>
            <select class="form-select" id="availabilityProduct" required>
              <option selected disabled value="">Disponibilidad</option>
              <option value="true">SI</option>
              <option value="false">NO</option>
            </select>
          </Form.Group>


          <Form.Group class="form-group">
            <label for="priceProd">Precio</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-currency-dollar text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="number" min="0" class="form-control" placeholder="Precio" name="priceProd" id="priceProd"
                required/>
            </div>
          </Form.Group>

     
          <Form.Group class="form-group">
            <label for="quantityProd">Cantidad</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-123 text-black" id="logoPeople"></i></span>
              <Form.Control type="number" min="0" class="form-control" placeholder="Cantidad" name="quantityProd"
                id="quantityProd" required/>
            </div>
          </Form.Group>

      
          <Form.Group class="form-group">
            <label for="fotoProd">Fotografia</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="logoInput"><i class="bi bi-card-image text-black"
                  id="logoPeople"></i></span>
              <Form.Control type="text" class="form-control" placeholder="URL Fotografia" name="fotoProd" id="fotoProd"
                required/>
            </div>
            <div>
              <Form.Control class="form-control" type="file" id="addPhotography"/>
            </div>
          </Form.Group>

    
          <Form.Group class="form-group text-center">
      
            <Button class="submit" onclick="saveFragance()" id="btnMain" name="guardaeDatos"
              value="Guardar">Guardar</Button>
            <Button class="button" onclick="" id="btnMain" name="cancelarDatos" value="Cancelar">Cancelar</Button>
          </Form.Group>
        </div>
      </div>
    </Form>
  </div>

    )
}
export default FraganceForm