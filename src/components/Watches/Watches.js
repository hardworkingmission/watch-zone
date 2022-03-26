import React, { useEffect, useState } from 'react';
import './Watches.css'
import {AddToWatchDb,getWatchFromDb,removeFromDb,removeAllFromDb}from '../../utilites/watchDb'
import Watch from './Watch/Watch';
import Cart from '../Cart/Cart';
import Questions from '../Questions/Questions';
import CustomModal from '../CustomModal/CustomModal';


const Watches = () => {
    const [watches,setWatches]=useState([])
    const [cart,setCart]=useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    const[message,setMessage]=useState('')

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
        const watchInCart=cart.find(item=>item.id===watch.id)
        //item exist or not
        if(watchInCart){                             
            setIsOpen(true)
            setMessage('Selected Item Is Already Exist')
            
        }else{
            //limit the cart item
            if(cart.length<4){
                setCart([...cart,watch])
                AddToWatchDb(watch.id)
            }else{
                setIsOpen(true)
                setMessage('You Can Not Buy More than 4 Items')
            }
            
        }  
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
    //modal close
    const closeModal=()=>{
        setIsOpen(false)
    }
    //console.log(cart)
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12 mb-3">
                    {/* Modal */}
                    <CustomModal warningMessage={message} modalIsOpen={modalIsOpen} closeModal={closeModal} setIsOpen={setIsOpen}/>
                    {/* watches */}
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4'>
                        {
                            watches.map(watch=><Watch key={watch.id} watch={watch} handleAddToCart={handleAddToCart}/>)
                        }

                    </div>
                </div>
                {/* Cart */}
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleRemoveAllFromCart={handleRemoveAllFromCart} handleRandomItem={handleRandomItem}/>
                </div>
            </div>
            <hr />
            {/* Questions */}
            <div className="row mt-3">
                <div className="col-12">
                    <Questions/>
                </div>
            </div>
        </div>
    );
};

export default Watches;