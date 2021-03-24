import React, { useState } from 'react';
import background from '../images/background.jpg'

function Before({setLoggedIn}) {

    const [checked, setChecked]=useState(localStorage.getItem('rmb') ? true : false);
    const [username,setusername]=useState(checked ? localStorage.getItem('user') : "")
    const [password,setpassword]=useState("")
    const [validation, setvalid]=useState(true)

    const handleUser = e => {
        const newusername=(e.target.value);
        setusername(newusername);
    }
    
    const getUserFeedback = () => {
        if (!username.length) {
            return null
        }
        if (username.length < 6) {
            return <p className="small text-danger">Min 6 characters!</p>
        }
    }

    const handlePassword = e => {
        const newpassword=(e.target.value)
        setpassword(newpassword);
    }

    const getPasswordFeedback = () => {
        if (!password.length) {
            return null
        }
        if (password.length<6){
            return <p className="small text-danger">Min 6 characters!</p>
        }
    }

    const handeCheck = () => {
        setChecked(!checked)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (username === "123456" && password === "123456") {
            if (checked === true) {
                console.log("Success with username remembered")
                localStorage.setItem('jwt', "asd123@112333123")
                localStorage.setItem('rmb', checked )
                localStorage.setItem('user', checked ? username : "")
                setLoggedIn(true)
            } else {
                console.log("Success without user remembered")
                localStorage.setItem('jwt', "asd123@112333123")
                localStorage.removeItem('rmb')
                localStorage.removeItem('user')
                setLoggedIn(true)
            }
        } else {
            setvalid(false)
            console.log("Login Failure!")
        }
    }

    return (
        <div className="d-flex" style={{height:"100vh"}}>
            <div className="col-8 d-none d-sm-block">
                <img className="col-12 p-0" alt="background" src={background} style={{height:"100%"}}/>
            </div>
            <div className="row flex-column justify-content-center col-12 col-sm-4 m-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-stack mt-auto mb-3" viewBox="0 0 16 16">
                    <path d="M14.12 10.163l1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                    <path d="M14.12 6.576l1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                </svg>
                <h2>Get Started <br/> with your Dashboard</h2>
                <p>Sign in to your account</p>
                {   
                    validation
                    ?   null
                    :   <p className="text-danger">Login Failure!</p>
                }
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" className="form-control" placeholder="User Name" value={username} onChange={handleUser}/>
                        {getUserFeedback()}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Credentials" value={password} onChange={handlePassword}/>
                        {getPasswordFeedback()}
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" defaultChecked={checked} onChange={handeCheck}/>
                        <label className="form-check-label">Remember me</label>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button disabled={!(username && password)} type="submit" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title={ !(username && password) ? `Please insert Username & Password!` : null}>Sign in</button>
                    </div>
                </form>
                <a href="#">Lost your password?</a>
                <a href="#">Not a member yet? Signup now.</a>
                <div className="d-flex mt-auto">
                    <p className="small p-0 mb-2">&#169; 2019-2020 All Rights Reserved. </p>
                </div>
            </div>
        </div>
    );
}

export default Before;
