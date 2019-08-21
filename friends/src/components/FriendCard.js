import React from 'react';

const FriendCard = ({friend}) => {
    console.log('From Friend', friend)
    return (
        <div>
            <h4>{friend.name}</h4>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
        </div>
    )
}

export default FriendCard