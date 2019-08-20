import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utlis/axiosWithAuth";

const FriendsList = props => {
    const [friend, setFriend] = useState({ 
            name: '', 
            age: '', 
            email: '', 
            id: Date.now() 
        });

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriend(res.data)
                console.log(res.data)
            })
            .catch(err => console.log('Error getting response:', err.respond))
    }

    const handleChange = e => {
        setFriend({ ...friend, [e.target.name]: e.target.value });
        console.log(
            "handleChange",
            e.target.name,
            e.target.value,
        );

    };

    const friendSubmit = e => {
        e.preventDefault();
        setFriend({

        })
    }

    return (
        <div>
            <div className="header">
                <form onSubmit={friendSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={friend.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        value={friend.age}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={friend.email}
                        onChange={handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
            
        </div>
    )
}

export default FriendsList;