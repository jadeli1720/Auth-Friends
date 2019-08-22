import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

const FriendsForm = ({ addFriend }) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    const handleChange = e => {
        setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
        console.log(
            "handleChange",
            e.target.name,
            e.target.value,
        );

    };

    const friendSubmit = e => {
        e.preventDefault();
        addFriend();
        setNewFriend({
            name: '',
            age: '',
            email: '',
            id: Date.now()
        });
    }

    return (
        <div>
            <div className="addFormContainer">
                <Form onSubmit={friendSubmit} className="addForm">
                    <h3>Add a Friend</h3>
                    <Form.Field className="friendField">
                        <label className="loginLabel">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Sally"
                            fluid
                            className="friendInput"
                            value={newFriend.name}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field className="friendField">
                        <label className="loginLabel">Age:</label>
                        <input
                            type="number"
                            name="age"
                            placeholder='0'
                            fluid
                            className="friendInput"
                            value={newFriend.age}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field className="friendField">
                        <label className="loginLabel">Email:</label>
                        <input
                            type="email"
                            name="email"
                            fluid
                            className="friendInput"
                            placeholder='sally@email.com'
                            value={newFriend.email}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <button type="submit" className="friendButton" >Add Friend</button>
                </Form>
            </div>
        </div>
    );
};

export default FriendsForm;