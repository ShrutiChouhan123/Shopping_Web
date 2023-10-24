import React from 'react';
import Product from './Product';


const product_data = [
    {
      id: 1,
      name: 'Product A',
      price: 19.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 2,
      name: 'Product B',
      price: 29.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 3,
      name: 'Product C',
      price: 15.49,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 4,
      name: 'Product D',
      price: 34.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 5,
      name: 'Product E',
      price: 49.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 6,
      name: 'Product F',
      price: 22.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 7,
      name: 'Product G',
      price: 18.75,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 8,
      name: 'Product H',
      price: 27.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 9,
      name: 'Product I',
      price: 39.99,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
    {
      id: 10,
      name: 'Product J',
      price: 45.00,
      description: 'Description of the Product',
      image: 'https://picsum.photos/230',
    },
  ];
  
function ProductData() {
  debugger
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