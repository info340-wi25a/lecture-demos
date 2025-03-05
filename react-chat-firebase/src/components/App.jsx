import React, {useEffect, useState} from 'react';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

import { Routes, Route, Outlet, Navigate, useNavigate, data } from 'react-router';

import { HeaderBar } from './HeaderBar.jsx';

import ChatPage from './ChatPage.jsx';
import SignInPage from './SignInPage.jsx';
import * as Static from './StaticPages.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState([]);
  console.log(messageStateArray);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

  const navigateTo = useNavigate(); //navigation hook

  useEffect(() => {
    const db = getDatabase();
    const messagesRef = ref(db, "allMessages");
    //addEventListener('databaseChange', function() {})
    onValue(messagesRef, (snapshot) => {
      console.log("value changed!");
      const dataObj = snapshot.val();

      const objKeys = Object.keys(dataObj);
      const dataArray = objKeys.map((keyString) => {
        const transformed = dataObj[keyString];
        return transformed; 
      })
      console.log(dataArray);
      //update the state and rerender
      setMessageStateArray(dataArray);
    })

  },[])

  //effect to run when the component first loads!
  useEffect(() => {
    //log in a default user
    changeUser(DEFAULT_USERS[1])

  }, []) //array is list of variables that will cause this to rerun if changed

  const changeUser = (userObj) => {
    console.log("changing user to", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/'); //go to chat after login
    }
  }

  const addMessage = (userObj, text, channel) => {
    console.log("Adding message");

    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }

    //put the message in Firebase
    const db = getDatabase();
    const messagesRef = ref(db, "allMessages");
    firebasePush(messagesRef, newMessageObj);

    // const nameRef = ref(db, "person/firstName");
    // firebaseSet(nameRef, "Mud");

    //const userDataRef = ref(db, "userData/"+userId+"/data")



    // const newMessageArray = [...messageStateArray, newMessageObj];
    // setMessageStateArray(newMessageArray); //update state & rerender
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="/about" element={ <Static.AboutPage /> } />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:chanName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              addMessageFunction={addMessage}
              />
          } />
        </Route>
        <Route path="/signin" element={ 
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
        />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  const {currentUser} = props;

  //...determine if user is logged in
  if(currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;