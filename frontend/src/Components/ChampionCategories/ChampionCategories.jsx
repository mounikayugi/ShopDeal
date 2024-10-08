import React, { useEffect, useState } from 'react'
import './ChampionCategories.css'
import Item from '../Item/Item'

const ChampionCategories = () => {

     const [new_collection, setNew_collection] = useState([]);

     useEffect(()=>{
        fetch('https://upgrad-capstone-project-backend.onrender.com/newcollections')
        .then((response)=>response.json())
        .then((data)=>setNew_collection(data));
     },[])
    return (
        <div className="championcategories">
            <h1>Champion Categories</h1>
            <hr/>
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default ChampionCategories
