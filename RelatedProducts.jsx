/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems';

const RelatedProducts = ({category, subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=> {
        if(products.length > 0){

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=>category === item.category);
            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,10));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}></Title>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((item,index)=>(
                    <ProductItems key={index} id={item._id} name={item.name} price={item.price} image={item.image}></ProductItems>
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProducts