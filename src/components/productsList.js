import { useEffect, useState } from "react";
import Product from "./product";

function Productlist(){
    const api_url="https://fakestoreapi.com/products"
    const [products, setproducts]=useState([])
    const [categories, setcategories]=useState([])
    const getproduct=() =>{

        fetch(api_url).then((res)=>res.json()).then((data)=>setproducts(data));
    }
    const getcategories=() =>{

        fetch(`${api_url}/categories`).then((res)=>res.json()).then((data)=>setcategories(data));
    }
    const getproductIncategory=(catName)=>{
        console.log(catName);
        fetch(`${api_url}/category/${catName}`).then((res)=>res.json()).then((data)=>setproducts(data));
    }
    useEffect(()=>{
        getproduct();
        getcategories();
       
    },[])
return(
    <>
    <h2 className="text-center p-3" >Our Products</h2> 
    <div className="container">
      <button onClick={()=>{
                    getproduct();
                }} className="btn btn-info">
                   All
                </button>
        {
            

            categories.map((cat)=>{
                return <button key={cat} onClick={()=>{
                    getproductIncategory(cat)
                }} className="btn btn-info">
                    {cat}
                </button>
            })
        }

    <div className="row">
        {products.map((product)=>{
            return (<div className="col-3" key={product.id}> 
            <Product product={product} showButton={true}/>
             </div>)
        })}
              
        
               </div>
    </div>
    </>
)
}
export default Productlist;