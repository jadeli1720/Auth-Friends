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
        );

    };

    const loginSubmit = e => {
        e.preventDefault();
        axios
      .post("http://localhost:5000/api/login", login)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        console.log("success", res.data);
      })
      .catch(err => console.log(err.response));
      props.history.push('/friends');
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
                    value={login.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );

}


export default Login;
