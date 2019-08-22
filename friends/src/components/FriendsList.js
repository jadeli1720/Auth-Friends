import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utlis/axiosWithAuth";
// import Loader from 'react-loader-spinner';

import FriendsForm from './FriendsForm';
import FriendCard from './FriendCard'

const FriendsList = () => {
    const [friend, setFriend] = useState([]);//state forarray from server.
    
    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriend(res.data)
                console.log('Success FriendList', res.data)
            })
            .catch(err => console.log('Error getting response:', err.respond))
    }, []);

    //Add Friend
    const addFriend = friend => {
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, friend)
            .then(res => {
                setFriend(res.data)//This allows for the new friend to be added to the array and to render straight to the page
                console.log('Add Friend', res)
            })
            .catch(err => console.log('Add Friend', err.respond))
    }

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

    //Editing Friend
    

    return (
        <div >
            <h2 className="friendTitle">My Friends</h2>
            <div className="friendsList">
                <FriendsForm
                    addFriend={addFriend}
                />
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