import React, { useEffect, useState } from 'react'
import './ShopLook.css'
import Item from '../Item/Item'

const ShopLook = () =>{

    const [popularProducts,setPopularProducts] = useState([]);
    
    useEffect(()=>{
        fetch('https://upgrad-capstone-project-backend.onrender.com/popularinwomen')
        .then((response)=>response.json())
        .then((data)=>setPopularProducts(data));
    },[])
    return (
        <div className="shoplook">
            <h1>Shop the look</h1>
            <hr/>
            <div className="shoplook-item">
                {popularProducts.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default ShopLook
