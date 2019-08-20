import React, { useState } from 'react';
import axios from 'axios';


const Login = props => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(
            "handleChange",
            e.target.name,
            e.target.value,
            setLogin
        );

    };

    const loginSubmit = e => {
        e.preventDefault();
        setLogin({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <form onSubmit={loginSubmit}>
                <input
                    type="text"
                    name="username"
                    value={props.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={props.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );

}


export default Login;
