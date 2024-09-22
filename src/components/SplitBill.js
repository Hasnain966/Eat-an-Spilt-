import React, { useState } from 'react';

const SplitBill = ({ friend, onClose }) => {
    const [billValue, setBillValue] = useState('');
    const [yourExpense, setYourExpense] = useState('');
    const [friendExpense, setFriendExpense] = useState('');

    const handleSplitBill = () => {
        
        console.log(`Bill Value: ${billValue}`);
        console.log(`Your Expense: ${yourExpense}`);
        console.log(`${friend.name}'s Expense: ${friendExpense}`);
        onClose(); 
    };

    return (
        <div className="split-bill-container">
            <h3>Select</h3>
            <div className="input-container">
                <label>Bill Value:</label>
                <input 
                    type="text" 
                    value={billValue} 
                    onChange={e => setBillValue(e.target.value)} 
                    placeholder="Enter total bill value"
                />
            </div>
            <div className="input-container">
                <label>Your Expense:</label>
                <input 
                    type="text" 
                    value={yourExpense} 
                    onChange={e => setYourExpense(e.target.value)} 
                    placeholder="Enter your expense"
                />
            </div>
            <div className="input-container">
                <label>{friend.name}'s Expense:</label>
                <input 
                    type="text" 
                    value={friendExpense} 
                    onChange={e => setFriendExpense(e.target.value)} 
                    placeholder="Enter friend's expense"
                />
            </div>
            <div className="input-container">
                <label>Who is paying the bill?</label>
                <select>
                    <option value={friend.name}>{friend.name}</option>
                    <option value="You">You</option>
                </select>
            </div>
            <div className="button-container">
                <button className="split-button" onClick={handleSplitBill}>Split Bill</button>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SplitBill;
