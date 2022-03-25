import React, { useEffect, useState } from 'react';
import './Watches.css'
import {AddToWatchDb,getWatchFromDb,removeFromDb,removeAllFromDb}from '../../utilites/watchDb'
import Watch from './Watch/Watch';
import Cart from '../Cart/Cart';

const Watches = () => {
    const [watches,setWatches]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('smartWatch.json')
          .then(res=>res.json())
          .then(data=>setWatches(data))

    },[])
    useEffect(()=>{
        const storedWatch=getWatchFromDb()
        try{
            const savedWatch=[]
            for(const id in storedWatch){
                const getStoredWatch=watches.find(watch=>watch.id===id)
                if(getStoredWatch){
                    savedWatch.push(getStoredWatch)

                }
            }
            setCart(savedWatch)
        }catch(err){
            console.log(err)
        }
        
    },[watches])

    // add item to the cart
    const handleAddToCart=(watch)=>{
        setCart([...cart,watch])
        AddToWatchDb(watch.id)
    }

    //remove single item from cart
    const handleRemoveFromCart=(id)=>{
        const restWatch=cart.filter(item=>item.id!==id)
        setCart(restWatch)

        //remove from localstorage
        removeFromDb(id)
       

    }

    //remove all items from cart
    const handleRemoveAllFromCart=()=>{
        //remove from cart
        setCart([])
        //remove from localStorage
        removeAllFromDb()

    }

    //choose random item
    const handleRandomItem=(item)=>{
        let randomItem=[]
        randomItem.push(cart[Math.floor(Math.random()*cart.length)])
        setCart(randomItem)
        console.log(randomItem)

    }

    //console.log(cart)
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4'>
                        {
                            watches.map(watch=><Watch key={watch.id} watch={watch} handleAddToCart={handleAddToCart}/>)
                        }

                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleRemoveAllFromCart={handleRemoveAllFromCart} handleRandomItem={handleRandomItem}/>
                </div>
            </div>
        </div>
    );
};

export default Watches;