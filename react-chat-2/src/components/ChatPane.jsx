import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json';
import USERS from '../data/users.json';

export function ChatPane(props) {
  console.log("rendering chatpane")
  const { currentChannel, currentUser } = props;

  //USING STATE

  //get value from board (but if nothing on board, use INITIAL VALUE)

  const [messageStateArray, setMessageStateArray] = useState(INITIAL_CHAT_LOG) //get the value from the state
  // const [messageStateArray, setMessageStateArray] = result;
  // const messageStateArray = result[0];
  // const setMessageStateArray = result[1];
  console.log(messageStateArray); //check it updated



  //data: an array of message objects [{}, {}]
  const messageObjArray = messageStateArray;

  //event management
  const handleClick = (event) => {
    const userObj = USERS[1]; //default to Parrot
    const messageText = "Button-posted message"
    const channel = "general"

    addMessage(userObj, messageText, channel);   
  }

  // DATA MANAGEMENT: how do we change
  const addMessage = (userObj, messageText, channel) => {
    console.log("adding message");
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }

    //modify the state
    const newArray = [...messageObjArray, newMessage]
    setMessageStateArray(newArray) //1. write to the board
                                    //2. re-calls the function
  }

  /* RENDERING: what do we look like */

  //Step 1. data processing
  //data: an array of message objects [{}, {}]
  //sorted and filtered
  const channelMessages = messageObjArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp) //reverse chron order
    .filter((msgObj) => { //channel messages only
      return msgObj.channel === currentChannel;
    })

  //Step 2. convert data to views
  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane pt-2 my-2">
        {/* button demo */}
        <div className="mb-2">
          <button className="btn btn-success" onClick={handleClick}>Add a message!</button>
        </div>
        <hr/>

        {/* conditional rendering */}
        { messageItemArray.length === 0 && 
          <p>No messages yet</p>
        }

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm 
        currentChannel={currentChannel} 
        howToAddMessageFunc={addMessage}
        currentUser={currentUser}
      />
      </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  const handleClick = (event) => {
    console.log("You like a post by "+userName);
  }

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
