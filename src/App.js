import React, { useState } from 'react';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import './App.css'; 

function App() {
    const [friends, setFriends] = useState([
        { name: 'Pink-penther ', image: 'https://tse3.mm.bing.net/th?id=OIP.D2vSKvLIuLNlPFZ5cA5T6QHaGk&pid=Api&P=0&h=220', owes: 1 },
        { name: 'Tom', image: 'https://tse1.mm.bing.net/th?id=OIP.Wf7vT5PVo9YE2CtFfBzgGQHaHZ&pid=Api&P=0&h=220', owes: 2 },
        { name: 'Motu-patlu', image: 'https://tse1.mm.bing.net/th?id=OIP.TrymGEYkLMsm8xDFM23ELAHaIq&pid=Api&P=0&h=220', owes: 3 },
    ]);

    return (
        <div className="App">
            <h1>Eat and Split</h1>
            <AddFriend setFriends={setFriends} />
            <FriendList friends={friends} />
        </div>
    );
}

export default App;
