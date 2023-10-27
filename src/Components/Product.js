import './index.css';
import { addTocart, fevCart } from '../redux/createSlice';
import { useDispatch } from 'react-redux';
import './index.css'
// import Footer from './Footer';
import { Link } from 'react-router-dom';





function Product({ product }) {
    const { id, name, description, price, image } = product;
    const dispatch = useDispatch()




    const add = () => {
        dispatch(addTocart(product))

    }

    const markFavorite = () => {
        dispatch(fevCart(product));

    }
    return (
        <>
        <div className="grid-container" style={{marginTop:"100px"}}>
            <div className='productCard'>
                <Link to={"/productdetails/" + id}><img src={image} alt={name} /></Link>

                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price : {price}</p>
                <button style={{ background: "#032542", color: "white", borderRadius: "10rem",width:"50%" }} onClick={add}>Add to cart</button><br />
                <button style={{ background: "#032542", color: "white", borderRadius: "10rem",width:"50%" }} onClick={markFavorite}>Mark favourite</button>

            </div>
          </div>




        </>
    )

}

export default Product;