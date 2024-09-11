import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
        for(let index = 0; index < 300+1; index++ ){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product,setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    useEffect (()=>{

        // error is coming from here okay
        fetch('http://localhost:4000/allproducts')
        .then((response)=> {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])


    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    // sending json dont use formdata instead use json 
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
             //backend data in json right? 
             //u r right but listen when we u uploading image file or any fil
             //frontend is all_products.js 
             // this is right code i need to change form data to json
                    'Content-Type':'application/json',
                },
                // spelling mistake here  JSON.stringify()
                // body:JSON.stringify({"itemId":itemId}),  error here
                body: JSON.stringify({"itemId": itemId}),


            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }   

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    //just comment out then change
                    //yess doing that only for u to undertsand after easily dont worry
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringfy({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }  

    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
              let itemInfo  = all_product.find((product)=>product.id ===Number(item))
              totalAmount += (itemInfo.new_price * cartItems[item]);
            }     
        } 
        return totalAmount; 
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};
   
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider


/*


Just for u to undertstand 
json data + files png,jpg,jpeg  we are using form data
json  application/json

*/
 