import React, { useState } from 'react';
import axios from 'axios';

import { Form } from 'semantic-ui-react';

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
                props.history.push('/friends');
                console.log("Successful login", res.data);
            })
            .catch(err => console.log(err.response));
        setLogin({
            username: '',
            password: ''
        })
    }

    return (
        <div>
            <div className="formContainer">
                <h2>Please Login to see your friends!</h2>
                <Form onSubmit={loginSubmit} className="loginForm" >
                    <Form.Field className="loginField">
                        <label className="loginLabel" >Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder='username'
                            fluid
                            className="loginInput"
                            width={6}
                            value={login.username}
                            onChange={handleChange} />
                    </Form.Field>
                    <Form.Field className="loginField">
                        <label className="loginLabel" >Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='password'
                            fluid
                            className="loginInput"
                            width={6}
                            value={login.password}
                            onChange={handleChange} />
                    </Form.Field>
                    <button type="submit" className="loginButton">Log in</button>

                </Form>
            </div>
        </div>
    );

}


export default Login;
