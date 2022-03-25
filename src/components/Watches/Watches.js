import React, { useEffect, useState } from 'react';
import './Watches.css'
import Watch from './Watch/Watch';

const Watches = () => {
    const [watches,setWatches]=useState([])
    useEffect(()=>{
        fetch('smartWatch.json')
          .then(res=>res.json())
          .then(data=>setWatches(data))

    },[])
    console.log(watches)
    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 g-4'>
                        {
                            watches.map(watch=><Watch key={watch.id} watch={watch}/>)
                        }

                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <h1>Cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Watches;