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
  componentDidMount() {
    console.log(this);
    setTimeout(() => {
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 2000);
  }
  
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage}/>
      </div>
    );
  }

  //method that takes the content from bar
  addMessage = (content) => {
    const newMessage = {content, username:this.state.currentUser.name}
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }

  // //method that takes the content from bar
  // changeUser = (content) => {
  //   const newMessage = {content, username:this.state.currentUser.name}
  //   const messages = this.state.messages.concat(newMessage)
  //   this.setState({messages: messages})
  // }
}

export default App;
