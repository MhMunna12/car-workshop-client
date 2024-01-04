/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'
import ProductCard from './ProductCard';


const productsData = [

    {
        "id": 1,
        name: ' Car Engine Plug',
        price: '20.00',
        img: img1
    },
    {
        "id": 2,
        name: 'Car Air Filter',
        price: '20.00',
        img: img2
    }
    ,
    {
        "id": 3,
        name: 'Cools Led Light',
        price: '30.00',
        img: img3
    }
    ,
    {
        "id": 4,
        name: 'Cools Led Light',
        price: '15.00',
        img: img4
    }
    ,
    {
        "id": 5,
        name: 'Cools Led Light',
        price: '40.00',
        img: img5
    }
    ,
    {
        "id": 6,
        name: 'Cools Led Light',
        price: '50.00',
        img: img6
    }
]
const PopularProduct = () => {
    // const [products,setProducts] = useState([]);
    return (
        <div className='text-center p-5'>

            <h3 className='text-orange-600 font-bold'>Popular Products</h3>
            <h1 className="text-5xl font-bold">Browse Our Products</h1>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable.</p>
            <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    productsData.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }

            </div>
        </div>
    );
};

export default PopularProduct;