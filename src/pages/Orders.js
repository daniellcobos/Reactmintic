import React, { useState, useEffect, useCallback } from 'react';

const Orders = (props) => {
    const[date,setDate] = useState("");
    const userId = props.userId
    const[orders,setOrders]= useState([])
    const[message,setMessage] = useState('')


    const fetchBasicOrdersHandler = useCallback(async () => {
     
        try {
          const response = await fetch('http://132.226.165.142/api/order/salesman/' + userId);
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataOrders = []
          
            for (const obj of data){
                dataOrders.push(
                    {obj}
                )
               

            }
            setOrders(dataOrders,() => { if (dataOrders.length == 0){setMessage("No existen ordenes para este usuario")}})
            
        } catch (error) {
            console.log("mal")
        }
       
      }, []);
      const fetchPendingOrdersHandler = useCallback(async () => {
     
        try {
          const response = await fetch('http://132.226.165.142/api/order/salesman/' + userId);
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
           const dataOrders = []
           if (dataOrders.length == 0){setMessage()}
            for (const obj of data){
                dataOrders.push(
                    {obj}
                )
               

            }
            setOrders(dataOrders)
            
        } catch (error) {
            console.log("mal")
        }
       
      }, []);
      const fetchDateOrdersHandler = useCallback(async (date) => {
            
         try {
          const response = await fetch('http://132.226.165.142/api/order/date/'+date+'/' + userId);
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          const data = await response.json();
          
           const dataOrders = []
         if (data.length === 0) {
             setMessage("No existe nada en la fecha seleccionada")
         }
         else{
             setMessage("Pedidos a la fecha")
         }
            for (const obj of data){
                dataOrders.push(
                    {obj}
                )
               

            }
            
            setOrders(dataOrders)
            
        } catch (error) {
            console.log(error)
        } 
       
      }, []);
     
 const cambioFecha = (e) => {
     const dateString = e.toString()
     setDate(dateString)

 }
     

 return (<div className = "card">
     <label htmlFor='date'> Fecha</label>
     <input type="date" name="date" id="date" onChange={(e) => {cambioFecha(e.target.value)}}/>
     <table className="table table-hover">
         <thead className="table table-hover">
             <tr>
                 <td>
                 <button onClick={() => {fetchBasicOrdersHandler()}}>Todas las Ordenes</button>
                 <button onClick={() => {fetchPendingOrdersHandler()}}>Ordenes Pendientes</button>
                 <button onClick={() => {fetchDateOrdersHandler(date)}}>Ordenes de Fecha</button>
                 </td>
             </tr>
            <tr className="thead-light">
                    <th scope="col">Id</th>
                    <th scope="col">Status</th>
                    <th scope="col">Dia Registro</th>
            </tr>
         </thead>
         <tbody>
             {
            
            orders.map(
                (order) => {
                    const date =new Date(order.obj.registerDay)
                    return(
                        <tr key ={order.obj.id}>
                        <td>{order.obj.id}</td>
                        <td>{order.obj.status}</td>
                        <td>{date.toDateString()}</td>
                    </tr>
                    )     
                }
            )
             }
         </tbody>
     </table>
     <p>{message}</p>
     
 </div>)
}
export default Orders