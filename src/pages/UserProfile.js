import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';
import Orders from './Orders';



const UserProfile = (props) => {
    const [user,setUser] = useState({})
    const [order,setOrder] = useState()
    const params = useParams();
   
    const showOrders = () => {
      setOrder(<Orders userId={params.userId}/>)
    }
    const fetchUserHandler = useCallback(async () => {
     
        try {
          const response = await fetch('http://132.226.165.142/api/user/' + params.userId);
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
          const backendUser = data
          setUser(backendUser)
           console.log(backendUser)
            
        } catch (error) {
            console.log("mal")
        }
       
      }, []);



      useEffect(() => {
        fetchUserHandler();
      }, [fetchUserHandler]);


      return(
        <div className="container">
          <div className="card">
              <div  className="card-body">
                  <ul>
                      <p> Identificacion :{user.identification}</p>
                      <p> Nombre:{user.name}</p>
                      <p> Tipo:{user.type}</p>
                      <p> Zona:{user.zone}</p>
                      <p> Correo: {user.email}</p>
                  </ul>
             </div>
        </div>
          
            <Button onClick={showOrders}>Ver Ordenes</Button>
            {order}
          </div>
          
      )
}
export default UserProfile