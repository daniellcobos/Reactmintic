import React, { useState, useEffect, useCallback } from 'react';

const Orders = (props) => {
    const userId = props.userId
    const[orders,setOrders]= useState([])

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
            setOrders(dataOrders,console.log("changed"))
            
        } catch (error) {
            console.log("mal")
        }
       
      }, []);
     

     

 return (<div className = "card">
     <button onClick={() => {fetchBasicOrdersHandler()}}>Todas las Ordenes</button>
     <table className="table table-hover">
         <thead className="table table-hover">
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
                    console.log(order)
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
     
 </div>)
}
export default Orders