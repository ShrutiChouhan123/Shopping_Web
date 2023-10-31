import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './index.css';
function Profile() {
    let navigate = useNavigate()
    let users = useSelector(state => state.cart.user)
    // console.log(users)
    // let newdata=users.find((data)=>data.username==username && data.password==password)
    const logout = () => {
        let login = false
        localStorage.setItem("login", JSON.stringify(login))
        navigate("/login")

    }
    return (
        <>
            <table style={{ marginTop: "200px" }}>
                {users.map((i) => {
                    return (
                        <>
                            <div class="card" style={{marginLeft:"25rem"}}>
                                <img src="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png" alt="John" style={{ width: "50%",marginLeft:"5rem" }} />
                                <h1>{i.username}</h1>
                                <p class="title">{i.mob}</p>
                                <p>{i.city}</p>
                                <p>{i.email}</p>
                                <p><button onClick={logout}>logout</button></p>
                            </div>


                        </>
                    )
                })}
            </table>
        </>
    )
}
export default Profile