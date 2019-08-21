import React from 'react';

const FriendCard = (props) => {
    // console.log('From Friend', friend)
    return (
        <div className="card">
            <div className="cardHeader">
                <h4>{props.friend.name}</h4>
            </div>
            <div className="cardBody">
                <p>{props.friend.age}</p>
                <p><a>{props.friend.email}</a></p>
            </div>
            <div className="cardFooter">
                <button className="footerButton" >Edit</button>
                <button onClick={() => { props.delete(props.friend.id) }}  className="footerButton" >Delete</button>
            </div>

        </div>
    )
}

export default FriendCard