import React, {useState} from 'react';

const FriendsList= props => {
    const [friend, setFriend] = useState({name:'', age:'', email:''});

    const handleChange = e => {
        setFriend({ ...friend, [e.target.name]: e.target.value });
        console.log(
            "handleChange",
            e.target.name,
            e.target.value,
        );

    };

    const friendSubmit = e => {
        
    }

    return (
        <div>
            This is the friends list
        </div>
    )
}

export default FriendsList;