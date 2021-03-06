import React, { useState, useEffect, useCallback } from 'react';
import ProductEdit from '../components/productEdit';


let form = <p></p>

const editFragance = async(product) => {
  const response = await fetch( "http://132.226.165.142/api/fragance/update", {
   method: 'PUT',
   body: JSON.stringify(product),
   headers: {
     'Content-Type': 'application/json'
   }
 });
 const data = await response.json();
 console.log(data); 

}

 const  borrarProducto = async(id) => {
   console.log(id)
  const response = await fetch('http://132.226.165.142/api/fragance/' + id, {
    method: 'DELETE',
  });
  const data = await response.json();
  console.log(data);
}

const Fragances = () => {
    const [Showform,setShowForm] = useState(false)
    const [Fragances, setFragances] = useState([]);
    const [Desc, setDesc] = useState("");
    const [Price, setPrice] = useState("");
    //funciones de carga y conexion
    const fetchProductsHandler = useCallback(async () => {
     
        try {
          const response = await fetch('http://132.226.165.142/api/fragance/all');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataFragances = []
            for (const obj of data){
                dataFragances.push(
                    {
                        availability:obj.availability,
                        brand: obj.brand,
                        category: obj.category,
                        description: obj.description,
                        photography: obj.photography,
                        presentation: obj.presentation,
                        price: obj.price,
                        quantity: obj.quantity,
                        reference: obj.reference,}
                )
               

            }
            setFragances(dataFragances)
            console.log(dataFragances)
        } catch (error) {
            console.log("mal")
        }
       
      }, []);
    
      useEffect(() => {
        fetchProductsHandler();
      }, [fetchProductsHandler]);

      const fetchProductsHandlerPrice = useCallback(async (price) => {
        console.log('http://132.226.165.142/api/fragance/price/' + price)
        try {
          const response = await fetch('http://132.226.165.142/api/fragance/price/' + price);
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataFragances = []
            for (const obj of data){
                dataFragances.push(
                    {
                        availability:obj.availability,
                        brand: obj.brand,
                        category: obj.category,
                        description: obj.description,
                        photography: obj.photography,
                        presentation: obj.presentation,
                        price: obj.price,
                        quantity: obj.quantity,
                        reference: obj.reference,}
                )
               

            }
            setFragances(dataFragances)
            console.log(dataFragances)
        } catch (error) {
            console.log("mal")
        }
       
      }, []);

      const fetchProductsHandlerDesc = useCallback(async (desc) => {
       console.log('http://132.226.165.142/api/fragance/description/' + desc)
        try {
          const response = await fetch('http://132.226.165.142/api/fragance/description/' + desc);
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataFragances = []
            for (const obj of data){
                dataFragances.push(
                    {
                        availability:obj.availability,
                        brand: obj.brand,
                        category: obj.category,
                        description: obj.description,
                        photography: obj.photography,
                        presentation: obj.presentation,
                        price: obj.price,
                        quantity: obj.quantity,
                        reference: obj.reference,}
                )
               

            }
            setFragances(dataFragances)
            console.log(dataFragances)
        } catch (error) {
            console.log("mal")
        }
       
      }, []);




      
      const saveFragance = (product) => {
       editFragance(product)
       fetchProductsHandler()
      }
      //formas
      const showForm = (id) => {
        return (<ProductEdit onEditProduct={saveFragance} id={id}></ProductEdit>)
        
      }
      const showFormHandler = (id) => {
        form = showForm(id)
        setShowForm(true)
      }

      const cambioDesc = (e) => {
        const fString = e.toString()
        setDesc(fString)
   
    }
    const cambioPrice = (e) => {
      const fString = e.toString()
      setPrice(fString)
 
  }
      return(
        <div className="container">
        <div className="mx-auto col-sm-16 main-section" id="myTab" role="tablist">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="list" role="tabpanel" aria-labelledby="list-tab">
              <div className="card">
                <div className="card-header">
                  <h4>Productos</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <label htmlFor='descripcion'>Consulta por descripcion</label>
                    <input type="text" id="desc" name="desc" className="form-control" onChange={(e) => {cambioDesc(e.target.value)}}/><br/>
                    <button className="button" onClick={() => {fetchProductsHandlerDesc(Desc)}}>Consultar</button><br/>
                    <label htmlFor='descripcion'>Consulta por precio</label>
                    <input type="number"  className="form-control" id="precio" name="precio" onChange={(e) => {cambioPrice(e.target.value)}}/><br/>
                    <button className="button" onClick={() => {fetchProductsHandlerPrice(Price)}}>Consultar</button><br/>
                    <table id="userList" className="table table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Referencia</th>
                          <th scope="col">Marca</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Descripci??n</th>
                          <th scope="col">Disponibilidad</th>
                          <th scope="col">Fotografia</th>
                          <th scope="col">Editar</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody id="resultado3">
                         {Fragances.map((fr) => { return(
                         <tr key={fr.reference}>
                           <td>{fr.reference}</td>
                           <td>{fr.brand}</td>
                           <td>{fr.category}</td>
                           <td>{fr.price}</td>
                           <td>{fr.quantity}</td>
                           <td>{fr.description}</td>
                           <td>{fr.availability ? "Si" : "No"}</td>
                           <td><img src={fr.photography} alt="no disponible"/></td>
                           <td> <button onClick={() => showFormHandler(fr.reference)}>Editar</button></td>
                           <td> <button onClick={ () => borrarProducto(fr.reference)}>Borrar</button></td>
                          </tr>
                           )} )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         {form}
      </div>
    
      )

      
}


export default Fragances