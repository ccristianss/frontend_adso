import React from "react";
import { useState, useEffect } from "react";
import CardProduct from "../../components/Cards/CardProducts";

function ProductsView() {

    const [Products, setProducts] = useState(null);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=8")
            .then(res => res.json())
            .then(resProducts => setProducts(resProducts));
    }, [])
    console.log(Products)
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Mis Productos
            </h1>
            <div className='grid gap-1 grid-cols-4 w-full max-w-screen-xl my-4'>

                {Products?.map(itemProduct => (
                    <CardProduct key={itemProduct.id} 
                    title={itemProduct.title} 
                    price={itemProduct.price} 
                    description={itemProduct.description} 
                    category={itemProduct.category.name} 
                    image={itemProduct.images[0]} />
                ))}
            </div>
        </div>
    );

}

export default ProductsView;