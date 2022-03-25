import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Watch.css'
import taka from '../../../utilites/currency/taka.png'


const Watch = ({watch}) => {
    const {img,name,price}=watch
    console.log(img)
    return (
        <div className="col">
            <div className="card">
                <img src={process.env.PUBLIC_URL +`/images/${img}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price:<img src={taka} alt="..." style={{width:'20px',height:'20px'}}/>{price}</p>
                </div>
                <button className='btn btn-primary rounded-bottom'>Add to Cart <FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
        </div>
    );
};

export default Watch;