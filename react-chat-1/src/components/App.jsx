import React from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelNav } from './ChannelNav.jsx';
import { ChatPane } from './ChatPane.jsx';

function App(props) {
  return (
    <div className="fluid-container">
      <HeaderBar />
      <div className="row">
        <div className="col-3">
          <ChannelNav />
        </div>      
        <div className="col">   
          <ChatPane />
        </div>
      </div>
    </div>
  );
}

export default App;