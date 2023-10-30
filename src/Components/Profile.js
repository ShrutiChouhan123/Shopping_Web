import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Profile() {
    let navigate = useNavigate()
    let users = useSelector(state => state.cart.user)
    console.log(users)
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
                          
                                <div>
                                    <h4>{i.username}</h4>
                                    <h4>{i.city}</h4>
                                    <h4>{i.mob}</h4>
                                    <button onClick={logout}>logout</button>
                                </div>
                         

                        </>
                    )
                })}
            </table>
        </>
    )
}

export default Profile