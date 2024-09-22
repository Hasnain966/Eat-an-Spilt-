import React, { useState } from 'react';
import './AddFriend.css'; 

const AddFriend = ({ setFriends }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [showAddFriend, setShowAddFriend] = useState(false);

    const handleAddFriend = () => {
        if (name && image) {
            setFriends(prev => [...prev, { name, image, owes: 0 }]);
            setName('');
            setImage('');
            setShowAddFriend(false);
        }
    };

    return (
        <div className="add-friend-container">
            {!showAddFriend ? (
                <button
                    className="add-friend-button"
                    onClick={() => setShowAddFriend(true)}
                >
                    Add Friend
                </button>
            ) : (
                <div className="add-friend-form">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Friend's Name"
                    />
                    <input
                        type="text"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        placeholder="Image URL"
                    />
                    <button className="orange-button" onClick={handleAddFriend}>Add</button><br/>
                    <button className="orange-button" onClick={() => setShowAddFriend(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default AddFriend;
