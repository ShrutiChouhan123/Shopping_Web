import './index.css';
import { addTocart, fevCart } from '../redux/createSlice';
import { useDispatch } from 'react-redux';
import './index.css'
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Product({ product }) {

    const { id, name, description, price, image } = product;
    const dispatch = useDispatch()




    const add = () => {
        dispatch(addTocart(product))

    }

    const markFavorite = () => {
        dispatch(fevCart(product));

    }
    const cart = useSelector(state => state.cart.cart);
    const fev = useSelector(state => state.fev.fev);
    return (
        <>
            <div className="body-navbar">

                <ul className="nav-links">
                    <li>
                        <Link to='/' className="nav-buttons">Home</Link>
                    </li>

                    {/* <li className="center">
                        <Link to="/products" className="nav-buttons">Products</Link>
                    </li> */}


                    <li className="upward" style={{ marginLeft: "40rem" }} >
                        <Link to='/cart' className="nav-buttons">
                            <span class="material-icons" >shopping_cart </span>
                            <span class="notification-counter">{cart.length}</span>

                        </Link>

                    </li>
                    <li className="forward" >
                        <Link to='/wishlist' className="nav-buttons">
                            <span class="material-icons" > <i class="material-icons">favorite</i></span>
                            <span class="notification-counter">{fev.length}</span>
                        </Link>
                    </li>

                    <li className="forward">
                        <Link to="/products/profile" className="nav-buttons">Profile</Link>
                    </li>
                    {/* <li className="forward" >
                        <Link to='/login' className="nav-buttons">
                            <span><i class="fa fa-user" style={{ fontSize: "29px" }}></i></span>
                        </Link>
                    </li> */}
                </ul>

            </div>
            <form method='post'>
                <div className="grid-container" style={{ marginTop: "100px" }}>
                    <div className='productCard'>
                        <Link to={"/productdetails/" + id}><img src={image} alt={name} /></Link>

                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p>Price : {price}</p>
                        <button style={{ background: "#032542", color: "white", borderRadius: "10rem", width: "50%" }} onClick={add}>Add to cart</button><br />
                        <button style={{ background: "#032542", color: "white", borderRadius: "10rem", width: "50%" }} onClick={markFavorite}>Mark favourite</button>

                    </div>
                </div>
            </form>



        </>
    )

}

export default Product;