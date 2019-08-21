import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utlis/axiosWithAuth";
// import Loader from 'react-loader-spinner';



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

    //Delete Friend
    const deleteFriend = (id) => {
        // axiosWithAuth()
        //     .delete(`http://localhost:5000/api/friends${id}`, friend)
        //     .then(res => {
        //         // setFriend(friend.filter(person => person.id !== id))
        //         console.log('Delete Friend',id)
        //     })
        //     .catch(err => console.log('Delete Friend', err.respond))
            setFriend(friend.filter(person => person.id !== id))
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
            .then(res =>{ 
                console.log('New Friend', res)
            })
            .catch(err => console.log('New Friend', err.respond))
        setNewFriend({
            name: '',
            age: '',
            email: '',
            id: Date.now()
        });
        getData();//Allows for new post to immediately render to the screen
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
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            <h2>My Friends</h2>
            <button onClick={getData}>Refresh</button>
            {friend.map(friend => (
                <FriendCard key={friend.id}
                    friend={friend}
                    delete={deleteFriend}

                />
            ))}
        </div>

    );
};

export default FriendsList;