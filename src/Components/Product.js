import './index.css';
import { addTocart, fevCart} from '../redux/createSlice';
import { useDispatch } from 'react-redux';
import './index.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Product({ product }) {

    const cart = useSelector(state => state.cart.cart);
    const fev = useSelector(state => state.fev.fev);
    const login = JSON.parse(localStorage.getItem('login'))

    const { id, name, description, price, image,quntity} = product;
    const dispatch = useDispatch()

    const add = () => {
        dispatch(addTocart(product))
    }

    const markFavorite = () => {
        dispatch(fevCart(product));
    }

 

    return (
        <>
            {login && <div><div className="body-navbar">

                <ul className="nav-links">
                    <li>
                        <Link to='/' className="nav-buttons"><i class="fa fa-home" style={{ fontSize: "35px" }}></i></Link>
                    </li>

                    <li className="center">
                        <Link to="/products" className="nav-buttons">Products</Link>
                    </li>

                    <li className="upward" style={{ marginLeft: "40rem" }} >
                        <Link to='/cart' className="nav-buttons">
                            <span className="material-icons" >shopping_cart </span>
                            <span className="notification-counter">{cart.length}</span>
                        </Link>

                    </li>
                    <li className="forward" >
                        <Link to='/wishlist' className="nav-buttons">
                            <span className="material-icons" > <i className="material-icons">favorite</i></span>
                            <span className="notification-counter">{fev.length}</span>
                        </Link>
                    </li>

                    <li className="forward">
                        <Link to="/products/profile" className="nav-buttons"><i className="fa fa-user" style={{ fontSize: "29px" }}></i></Link>
                    </li>

                </ul>

            </div>
                <div className="grid-container" style={{ marginTop: "100px" }}>
                    <div className='productCard'>
                        <Link to={"/productdetails/" + id}><img src={image} alt={name} /></Link>

                        <h4>{name}</h4>
                        <p>{description}</p>
                        <button style={{ background: "#032542", color: "white", borderRadius: "10rem", width: "50%" }} onClick={add}>Add to cart</button><br />
                        <button style={{ background: "#032542", color: "white", borderRadius: "10rem", width: "50%" }} onClick={markFavorite}>Mark favourite</button>

                    </div>
                </div>
            </div>}
        </>
    )

}

export default Product;