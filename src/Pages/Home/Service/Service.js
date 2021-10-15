import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id, name, price, description, img} = props.service;
    
    const url = `/booking/${id}`;
    return (
        <div className="service pb-3">
            <img src={img} width="100%" alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-2">{description}</p>
            <Link to = {url}>
                <button className="btn btn-primary">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;