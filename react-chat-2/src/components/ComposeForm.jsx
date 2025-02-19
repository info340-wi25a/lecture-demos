import React, { useState } from 'react';

import USERS from '../data/users.json';

export function ComposeForm(props) {
  const { currentChannel, howToAddMessageFunc, currentUser } = props;

  const [typedInput, setTypedInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting form");

    const userObj = currentUser;
    const messageText = typedInput;
    const channel = currentChannel;

    howToAddMessageFunc(userObj, messageText, channel);   

    setTypedInput(''); //clear the input
  }

  const handleChange = (event) => {
    //write to the board
    const value = event.target.value;
    // console.log(value);
    setTypedInput(value);
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={typedInput}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}