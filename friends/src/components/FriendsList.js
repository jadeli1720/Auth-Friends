import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../utlis/axiosWithAuth";
import { Route, Redirect } from 'react-router-dom';
// import Loader from 'react-loader-spinner';

import FriendsForm from './FriendsForm';
import FriendCard from './FriendCard'

const FriendsList = (props) => {
    const [friend, setFriend] = useState([]);//state for array from server.

    useEffect(() => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                setFriend(res.data)
                // console.log('Success FriendList', res.data)
            })
            .catch(err => console.log('Error getting response:', err.respond));
    }, []);

    //Add Friend
    const addFriend = friend => {
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, friend)
            .then(res => {
                setFriend(res.data)//This allows for the new friend to be added to the array and to render straight to the page
                console.log('Add Friend', res)
            })
            .catch(err => console.log('Add Friend', err.respond));
    };

    //Delete Friend
    const deleteFriend = (id) => {
        console.log(id)//logging the id of the delete button clicked
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${id}`)
            .then(res => {
                setFriend(res.data)
                // console.log('Delete Friend', res)
            })
            .catch(err => console.log('Delete Friend', err.response));
    };

    //Editing Friend
    const editFriend = friend => {
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends${friend.id}`, friend)
            .then(res => {
                setFriend(res.data);
                props.history.push('/friends')
                console.log('Edit Friend', res)
            })
            .catch(err => console.log('Edit Friend', err.respond));
    };


    return (
        <div >
            <h2 className="friendTitle">My Friends</h2>
            <div className="friendsList">
                     <FriendsForm {...props}
                        submitFriend={addFriend}
                    />
                {/* Sub Route is not working properly. may need to create a  seperate edit form */}
                {/* <Route exact path="/friends/edit/:id" render={props =>{
                    const currentFriend = friend.find(friend => friend.id == props.match.params.id)
                    if (!currentFriend) {
                        return <Redirect to="/friends"/>;
                    }
                     return <FriendsForm {...props} submitFriend={editFriend} initialValues={currentFriend}
                    />
                }} /> */}

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