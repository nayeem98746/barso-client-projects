import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Orderinformation = () => {
    const { orderID } = useParams()
    const [orderinformation , setOrderinformation] = useState([])
    
    useEffect(() => {
        fetch('/data.JSON')
        .then(res => res.json())
        .then(data => setOrderinformation(data))
    } , [] )


    
    return (
        <div >
          {/* <h1 style={{ color:'white' }}> All orders </h1> */}
           <Table striped bordered hover >
  <thead>
    <tr >
      <th className='shop-data-cat'>id</th>
      <th>email</th>      
      <th>number</th>
      <th className='shop-data-cat'>Frist Name</th>
      <th className='shop-data-cat'>Last Name </th>
    
    </tr>
  </thead>
  {
    orderinformation.map((pd, index) => (   
      <tbody >
      <tr>
      <td >{index.id}</td>
      <td >{pd.email}</td>
      <td >{pd.number}</td>
      <td>{pd.FristName}</td>
      <td  >{pd.LastName}</td>
      <td >
      <Link to={`/dashboard/orderinformation/`} style={{textDecoration: "none", margin: "10px"}} >
      <button  className="btn text-white  p-2 shop-data-shadow">Details</button>
      </Link>
      
       </td>
      </tr>
      </tbody>
   ))}
  
  
</Table>
        </div>
    );
};

export default Orderinformation;