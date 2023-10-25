import './index.css';
import { addTocart, fevCart } from '../redux/createSlice';
import { useDispatch } from 'react-redux';
import './index.css'
import Footer from './Footer';


function Product({ product }) {

    const dispatch = useDispatch()
    const { id, name, description, price, image } = product
    return (
        <>

            <div className='productCard' style={{ float: "left", marginTop: "6rem", marginLeft: "6rem", height: "25rem", width: "13rem" }}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price : {price}</p>
                <button style={{ background: "#032542", color: "white", borderRadius: "10rem" }} onClick={() => dispatch(addTocart({ id, name, description, price, image }))}>Add to cart</button><br />
                <button style={{ background: "#032542", color: "white", borderRadius: "10rem" }} onClick={() => dispatch(fevCart({ id, name, description, price, image }))}>Mark favourite</button>
            </div>
            
        </>
    )
}

export default Product;