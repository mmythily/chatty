import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          id:1,
          username: 'Bob',
          content: 'Has anyone seen my marbles?',
        },
        {
          id:2,
          username: 'Anonymous',
          content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.'
        }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage}/>
      </div>
    );
  }

  //method that displays current user message
  addMessage = (content) => {
    console.log(this.state.messages)
    const newMessage = {content, username:this.state.currentUser.name}
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }

  //method which displays received messages from other users
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');

    this.socket.onmessage = event => {
      const sendMessage = JSON.parse(event.data);
      setTimeout(() => {
        const newMessage = {
          username:sendMessage.username,
          content:sendMessage.content,
          //id:sendMessage.id
        };
        
        this.setState({
          messages:this.state.messages.concat([newMessage])
        })
        console.log('component did mount',this);
      }, 1000);

    // setTimeout(() => {
    //   const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
    //   const messages = this.state.messages.concat(newMessage)
    //   this.setState({messages: messages})
    // }, 1000);
  }

  //method that takes the content from bar
  // changeUser = (content) => {
  //   const newMessage = {content, username:this.state.currentUser.name}
  //   const messages = this.state.messages.concat(newMessage)
  //   this.setState({messages: messages})
  // }
}

export default App;
