import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { removeWishlist } from '../redux/createSlice';




function Wishlist() {
  const dispatch = useDispatch();
  const fev = useSelector(state => state.fev.fev)

  return (
    <>
      <h2>fev items</h2>
      {fev.map((item) => {
        return (
          <>
            <div style={{ marginTop: "5rem", height: "2rem", width: "30rem" }}>
              <div className='d-flex' className='productCard2'
                style={{ width: "15rem", marginLeft: "23rem" }}
              >
                <img src={item.image} alt='' style={{ width: "50%", height: "50%" }} />
                <div style={{ marginTop: "5rem" }}>
                  <h4 style={{ marginLeft: "2rem" }}>{item.name}</h4>

                  {/* <button style={{marginLeft:"4rem"}} className='btn'>remove</button> */}
                  <button class="button-28" role="button" style={{ marginLeft: "2rem", width: "70%" }} onClick={() => dispatch(removeWishlist({ id: item.id }))}>Remove</button>


                </div>
              </div>
            </div>

          </>
        )
      })}

     
  


    </>
  )
}

export default Wishlist;