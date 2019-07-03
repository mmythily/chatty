import React, {Component} from 'react';
import MessageList from './MessageList';
import ChatBar from './ChatBar';

//1) Set the initial state
// Set your App component's initial state. 
//Look at how this is done in the TimerComponent 
//in the reading Component State and Props.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name:'Anonymous'},
      messages: []
    };
  }
  
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name}/>
      </div>
    );
  }
}

export default App;
