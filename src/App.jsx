import React, {Component} from 'react';
import MessageList from './MessageList';
import ChatBar from './ChatBar';


class App extends Component {
  
  render() {
    return (
      <div>
        <MessageList/>
        <ChatBar/>
      </div>
    );
  }
}

export default App;
