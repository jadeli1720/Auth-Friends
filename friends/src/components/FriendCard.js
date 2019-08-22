import React from 'react';
import { Link } from 'react-router-dom'

const FriendCard = ({ friend, deleteFriend }) => {
    // console.log('From Friend', friend)
    return (
        <div className="card">
            <div className="cardHeader">
                <h4>{friend.name}</h4>
            </div>
            <div className="cardBody">
                <p>{friend.age}</p>
                <p><a>{friend.email}</a></p>
            </div>
            <div className="cardFooter">
                <button className="footerButton" >Edit</button>
                <button onClick={() => { deleteFriend(friend.id) }}  className="footerButton" >Delete</button>
            </div>

        </div>
    )
}

export default FriendCard