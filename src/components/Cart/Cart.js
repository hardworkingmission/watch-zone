import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart,handleRemoveAllFromCart,handleRandomItem}) => {
    //console.log(cart)
    return (
        <div className='p-2 border border-1 cart rounded'>
            <h5 className='text-center '>Selected Items</h5>
            <hr />
            {
                cart?.map(item=>(
                    <div key={item.id} className='d-flex justify-content-between align-items-center mb-1 border border-1 p-2 rounded'>
                        <img src={process.env.PUBLIC_URL +`/images/${item.img}`} alt="" style={{width:'50px',height:'50px'}}/>
                        <i className='fs-6'>{item.name}</i>
                        <FontAwesomeIcon role={'button'} color='red' onClick={()=>handleRemoveFromCart(item.id)} icon={faTrash}/>
                    </div>

                ))
            }
            <button className="btn btn-primary w-100 my-3" onClick={()=>handleRandomItem()}>Choose 1 For Me</button>
            <button className="btn btn-danger w-100" onClick={()=>handleRemoveAllFromCart()}>Choose Again</button>
        </div>
    );
};

export default Cart;