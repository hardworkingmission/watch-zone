import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Watch.css'


const Watch = ({watch}) => {
    const {img,name,price}=watch
    console.log(img)
    return (
        <div className="col">
            <div className="card">
                <img src={process.env.PUBLIC_URL +`/images/${img}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                </div>
                <button></button>
            </div>
        </div>
    );
};

export default Watch;