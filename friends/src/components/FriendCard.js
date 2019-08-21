import React from 'react';

const FriendCard = (props) => {
    // console.log('From Friend', friend)
    return (
        <div>
            <h4>{props.friend.name}</h4>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button>Edit</button>
            <button onClick={() =>{ props.delete(props.friend.id)}} >Delete</button>
        </div>
    )
}

export default FriendCard