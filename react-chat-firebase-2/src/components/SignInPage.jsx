import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

import DEFAULT_USERS from '../data/users.json';


export default function SignInPage(props) {

  const { currentUser, changeUserFunction } = props;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    changeUserFunction(selectedUserObj)
  }

  //convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    if(userObj.userId === currentUser.userId){
      return null; //don't include!
    }
    return (
      <Dropdown.Item className="user-icon" key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
        {userObj.userName}
      </Dropdown.Item>
    )
  })

  const auth = getAuth();

  const firebaseUIConfig = {
    signInOptions: [ GoogleAuthProvider.PROVIDER_ID,
      { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    ],
    signInFlow: 'popup', //don't redirect to authenticate
    credentialHelper: 'none', //don't show the email account chooser
    callbacks: { //"lifecycle" callbacks
      signInSuccessWithAuthResult: () => {
        return false; //don't redirect after authentication
      }
    }
  }  


  return (
    <div className="card bg-light">
      <div className="container card-body">

        {/* render the firebaseui */}
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={firebaseUIConfig} />

        {/* <p className="lead">Pick a user:</p>
        <Dropdown>
          <Dropdown.Toggle variant="light">
            <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  )
}