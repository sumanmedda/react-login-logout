import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

function Auth(){
    let elem_email = useRef()
    let elem_pass = useRef()
    const navigate = useNavigate()

    useEffect(() => {
        let browserLocalStorage = localStorage.getItem('localStorageKey')  
        if(browserLocalStorage){
            navigate("/")
        }
    })


    const loginFunction = (email, pass) => {
        if(email === "" || pass === ""){
            return alert("Please Fill All Details.")
        }else{
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                
                username: email,
                password: pass,
                expiresInMins: 1, // optional, defaults to 60
                })
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('localStorageKey', data.token)
            }).then(
                navigate("/")
            )
        }
    }
    

    return<>
        <h1><center>Login To HomePage</center></h1>
        <br />
        <div className="container">
            <div className="row">
                <div className="col">
                    <input ref={elem_email} placeholder="Email" type="text"/>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <input ref={elem_pass} placeholder="Password" type="password"/>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={(e) => loginFunction(elem_email.current.value, elem_pass.current.value)}>Login</button>
                </div>
            </div>
        </div>
    </>
}

export default Auth