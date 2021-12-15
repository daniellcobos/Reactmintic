import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useParams } from 'react-router-dom';



const UserProfile = (props) => {
    const [user,setUser] = useState({})
    const params = useParams();
   

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
          <div class="card">
              <div  class="card-body">
                  <ul>
                      <p> Identificacion :{user.identification}</p>
                      <p> Nombre:{user.name}</p>
                      <p> Tipo:{user.type}</p>
                      <p> Zona:{user.zone}</p>
                      <p> Correo: {user.email}</p>
                  </ul>
                  
                  
                  
              
             </div>
            <Button>Ver Ordenes</Button>
          </div>
          
      )
}
export default UserProfile