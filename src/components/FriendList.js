import React, { useState } from 'react';
import SplitBill from './SplitBill';
import './FriendList.css';

const FriendList = ({ friends = [] }) => {
    const [selectedFriend, setSelectedFriend] = useState(null);

    return (
        <div className="friend-list">
            {friends.map((friend, index) => (
                <div key={index} className="friend-card">
                    <img src={friend.image} alt={friend.name} className="friend-image" />
                    <h3>{friend.name}</h3>
                    <p className="owes-you">Owes you: ${friend.owes}</p>
                    <button 
                        className="select-button" 
                        onClick={() => setSelectedFriend(friend === selectedFriend ? null : friend)}
                    >
                        Select
                    </button>
                    {selectedFriend === friend && (
                        <SplitBill friend={friend} onClose={() => setSelectedFriend(null)} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default FriendList;
