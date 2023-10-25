import React from 'react';
import Product from './Product';
import './index.css'

export const product_data = [
    {
      id: 1,
      name: 'Tomato Pizza',
      price: 99,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/3944311/pexels-photo-3944311.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 2,
      name: 'Special Thali',
      price: 150,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/11912788/pexels-photo-11912788.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 3,
      name: 'Biryaani',
      price: 120,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&dpr=1',
    },
    {
      id: 4,
      name: 'Cheese Roll',
      price: 99,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/12737663/pexels-photo-12737663.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&dpr=1',
    },
    {
      id: 5,
      name: 'Cheese Pizza',
      price: 199,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 6,
      name: 'Cheese Sandwich',
      price: 140,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/15126957/pexels-photo-15126957/free-photo-of-a-slice-of-cheesy-pizza.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 7,
      name: 'Burger',
      price: 99,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/12567335/pexels-photo-12567335.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 8,
      name: 'Pasta',
      price: 110,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/12667658/pexels-photo-12667658.jpeg?auto=compress&cs=tinysrgb&w=250&h=200&dpr=1',
    },
    {
      id: 9,
      name: 'Noodles',
      price: 120,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/12737657/pexels-photo-12737657.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 10,
      name: 'Special Samosa',
      price: 45,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: 10,
      name: 'Special food',
      price: 200,
      description: 'Description of the Product',
      image: 'https://images.pexels.com/photos/16423835/pexels-photo-16423835/free-photo-of-tortilla-wraps-with-fries-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    
  ];
  
function ProductData() {
  return (
   <>
   <div className='grid-container'>
        {product_data.map((product) => {
          
          console.log(product,"product_data")
          return <Product key={product.id} product={product} />
        })}
      </div>
   </>
  )
}

export default ProductData;