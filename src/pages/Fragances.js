import React, { useState, useEffect, useCallback } from 'react';

const Fragances = () => {
    const [Fragances, setFragances] = useState([]);
    //funciones de carga
    const fetchMoviesHandler = useCallback(async () => {
     
        try {
          const response = await fetch('http://132.226.165.142/api/fragance/all');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataFragances = []
            for (const obj in data){
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
        fetchMoviesHandler();
      }, [fetchMoviesHandler]);
    
      async function addMovieHandler(movie) {
        const response = await fetch('https://react-http-6b4a6.firebaseio.com/movies.json', {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
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
                    <table id="userList" className="table table-hover">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Referencia</th>
                          <th scope="col">Marca</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Descripción</th>
                          <th scope="col">Disponibilidad</th>
                          <th scope="col">Fotografia</th>
                          <th scope="col">Editar</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody id="resultado3">
                          {Fragances}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
}


export default Fragances