import React, { useState, useEffect, useCallback } from 'react';
import ProductEdit from '../components/productEdit';


let form = <p></p>

const editUser = async(product) => {
  const response = await fetch( "http://132.226.165.142/api/user/update", {
   method: 'PUT',
   body: JSON.stringify(product),
   headers: {
     'Content-Type': 'application/json'
   }
 });
 const data = await response.json();
 console.log(data); 

}

 const  borrarUser = async(id) => {
   console.log(id)
  const response = await fetch('http://132.226.165.142/api/user/' + id, {
    method: 'DELETE',
  });
  const data = await response.json();
  console.log(data);
}

const UserList = () => {
    const [Showform,setShowForm] = useState(false)
    const [Users, setUsers] = useState([]);
    //funciones de carga y conexion
    const fetchProductsHandler = useCallback(async () => {
     
        try {
          const response = await fetch('http://132.226.165.142/api/user/all');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataUsers = []
            for (const obj of data){
                dataUsers.push(
                    {   id:obj.id,
                        identification:obj.identification,
                        name: obj.name,
                        birthtDay: obj.birthtDay,
                        monthBirthtDay: obj.monthBirthtDay,
                        address: obj.address,
                        cellPhone: obj.cellPhone,
                        email: obj.email,
                        zone: obj.zone,
                        type: obj.type,}
                )
               

            }
            setUsers(dataUsers)
            console.log(dataUsers)
        } catch (error) {
            console.log("mal")
        }
       
      }, []);
    
      useEffect(() => {
        fetchProductsHandler();
      }, [fetchProductsHandler]);
      
      const saveUser = (user) => {
       editUser(user)
       fetchProductsHandler()
      }
      //formas
      const showForm = (id) => {
        return (<ProductEdit onEditProduct={saveUser} id={id}></ProductEdit>)
        
      }
      const showFormHandler = (id) => {
        form = showForm(id)
        setShowForm(true)
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
                        <th scope="col">Identificacion</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                   
                            <th scope="col">Zona</th>
                            <th scope="col">Tipo Usuario</th>
                          <th scope="col">Editar</th>
                          <th scope="col">Eliminar</th>
                        </tr>
                      </thead>
                      <tbody id="resultado3">
                         {Users.map((user) => { return(
                         <tr key={user.id}>
                           <td>{user.name}</td>
                           <td>{user.address}</td>
                           <td>{user.cellPhone}</td>
                           <td>{user.email}</td>
                           <td>{user.zone}</td>
                           <td>{user.type}</td>
                           <td> <button onClick={() => showFormHandler(user.id)}>Editar</button></td>
                           <td> <button onClick={ () => borrarUser(user.id)}>Borrar</button></td>
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


export default UserList