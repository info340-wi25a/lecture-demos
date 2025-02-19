import React, {useState} from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelList } from './ChannelList.jsx';
import { ChatPane } from './ChatPane.jsx';

import USERS from '../data/users.json';

function App(props) {

  const [currentChannel, setCurrentChannel] = useState('general');
  const [currentUser, setCurrentUser] = useState(USERS[0])
  console.log(currentUser);

  const channelNames = ["general", "social", "birds", "channel-4", "random"]

  const changeUser = (userObj) => {
    setCurrentUser(userObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} howToChangeUser={changeUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList channelNames={channelNames} currentChannel={currentChannel} />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;