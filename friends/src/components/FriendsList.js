import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utlis/axiosWithAuth";

import FriendCard from './FriendCard'

const FriendsList = props => {
    const [friend, setFriend] = useState([]);
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: '',
        // id: Date.now()
    })

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriend(res.data)
                console.log('Success FriendList', res.data)
            })
            .catch(err => console.log('Error getting response:', err.respond))
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
            .then(res => console.log('New Friend', res))
            .catch(err => console.log('New Friend', err.respond))
        setNewFriend({
            name: '',
            age: '',
            email: '',
            // id: Date.now()
        })
    }


    return (
        <div>
            <form onSubmit={friendSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="age"
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            <h2>My Friends</h2>
            <button onClick={getData}>Refresh</button>
            {friend.map(friend => (
                <FriendCard key={friend.id} friend={friend}
                />
            ))}
        </div>

    );
};

export default FriendsList;