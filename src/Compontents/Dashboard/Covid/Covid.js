import React, { useEffect, useState } from 'react';
import Covids from '../Covids/Covids';
import './Covid.css'
const Covid = () => {
    const [covid , setCovid ] = useState([])

    useEffect(() => {
        fetch('/CardData.JSON')
        .then(res => res.json())
        .then(data => setCovid(data))
    } , [] )
    return (
        <div className='row'>

            <div className='service-container'>
                {
                    covid.map(cb => <Covids
                    key={cb.id}
                    cb = {cb}
                    ></Covids>)
                }

            </div>
            
        </div>
    );
};

export default Covid;