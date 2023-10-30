import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import { useParams } from 'react-router-dom';

const Product_Details = () => {
  const id = useParams()
  const data = useSelector(state=>state.data.data)
  const product=data.find((i)=>i.id===Number(id.id))
  return (
    <>
    <Product product={product}/>
    </>
  )
}
export default Product_Details