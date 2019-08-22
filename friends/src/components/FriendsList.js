import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utlis/axiosWithAuth";
// import Loader from 'react-loader-spinner';

import { Form } from 'semantic-ui-react';

import FriendCard from './FriendCard'

const FriendsList = () => {
    const [friend, setFriend] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        id: Date.now()
    })

    
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriend(res.data)
                console.log('Success FriendList', res.data)
            })
            .catch(err => console.log('Error getting response:', err.respond))
    }, []);



    //Delete Friend
    const deleteFriend = (id) => {
        console.log(id)//logging the id of the delete button clicked
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                setFriend(res.data)
                console.log('Delete Friend', res)
            })
            .catch(err => console.log('Delete Friend', err.response))
    }

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
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(res => {
                setFriend(res.data)//This allows for the new friend to be added to the array and to render straight to the page
                console.log('New Friend', res)
            })
            .catch(err => console.log('New Friend', err.respond))
        setNewFriend({
            name: '',
            age: '',
            email: '',
            id: Date.now()
        });
    }


    return (
        <div >
            <h2 className="friendTitle">My Friends</h2>
            {/* <button onClick={getData} className="refresh">Refresh</button> */}
            <div className="friendsList">
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
                <div className="cardContainer">
                    {friend.map(friend => (
                        <FriendCard key={friend.id}
                            friend={friend}
                            deleteFriend={deleteFriend}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default FriendsList;