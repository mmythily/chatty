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

  componentDidMount() {
    console.log('componentDidMount <App />');
    setTimeout(() => {
      console.log('Simulating incoming message');
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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
