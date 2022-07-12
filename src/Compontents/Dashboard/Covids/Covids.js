import React from 'react';
import { Link } from 'react-router-dom';

const Covids = ({cb}) => {
    const {id , name , img} = cb
    console.log(cb)
    return (
      <>
      <Link to={`/dashboard/orderinformation/${id}`}>
        <div style={{backgroundColor:'#9dfdce' , borderRadius:'10px'}}>
            <img src={img} width='50px' alt="" />
            <h2>{name}</h2>

        </div>
        </Link>
      </>
    );
};

export default Covids;