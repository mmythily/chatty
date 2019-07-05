import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
      
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

  //display current user message on MessageList from input form
  addMessage = (content) => {
    const newMessage = {username:this.state.currentUser.name,content }
    //const messages = this.state.messages.concat(newMessage)
    this.socket.send(JSON.stringify(newMessage));
    //this.setState({messages:messages})
    //console.log('add messages', this.state)
  }

  componentDidMount() {
    //establish connection with websocket
    this.socket = new WebSocket('ws://localhost:3001');
    
    //display received messages from other users
    this.socket.onopen = (event) => {
      console.log('Connected to Web Socket')
      console.log('socket on open', this.state)
    }
    //receive the broadcasted messages
    this.socket.onmessage = (event) => {
      console.log('event onmessage',event)
      //console.log('event onmessage',event.data)
      const receivedData = JSON.parse(event.data);
      console.log(receivedData)
      const postMessage = {
        username: receivedData.username,
        content: receivedData.content,
        id: receivedData.id
      }
      const messages = this.state.messages.concat(postMessage)
      this.setState({messages:messages})

      //console.log('display incoming messages', this.state)

      console.log('Message received',postMessage)
      //this.socket.send(postMessage);

      //this.socket.close()
    }


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