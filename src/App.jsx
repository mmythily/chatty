import React, {Component} from 'react';
import Navigation from './Navigation.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Anonymous'},
      messages:[],
      userCount: ""
    }
  }
  
  //display current user message on MessageList from input form
  addMessage = (content) => {
    const newMessage = {
      type:"postMessage",
      username: this.state.currentUser.name, 
      content
      }
    this.socket.send(JSON.stringify(newMessage));
  }

  //shows change of user
  changeUser = (currentUser, cb) => {
    const oldUser = this.state.currentUser.name;
    const newUser = currentUser;
    
    const newNotification = {
      type:"postNotification",
      oldUser,
      username: newUser
    }

    this.socket.send(JSON.stringify(newNotification));
    this.setState({
      currentUser:{name:currentUser}
      }, cb);
  }

  

  componentDidMount() {

    //establish connection with websocket
    this.socket = new WebSocket('ws://localhost:3001');
    
    //display received messages from other users
    this.socket.onopen = (event) => {
      console.log('Connected to Web Socket server')
    }
    //receive the broadcasted messages
    this.socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);

      switch(receivedData.type){
        case "postMessage":
          const postMessage = {
            username: receivedData.username,
            content: receivedData.content,
            id: receivedData.id
          }

          this.setState({messages:this.state.messages.concat(postMessage)});
          break;

        case "postNotification":
          const oldUser = receivedData.oldUser;
          const newUser = receivedData.username;
          if (oldUser !== newUser) {
            const postNotification = {
              newUsername:newUser,
              content: `${oldUser} changed their name to ${newUser}`
            }
            this.setState({messages:this.state.messages.concat(postNotification)});
          }
          break;

        case "userCount":
          const userCount = receivedData.users;
          this.setState({userCount:userCount});
          break;
        default:
          throw new Error(`Unknown event type: ${receivedData.type}`);
      }
    }
  }

  render() {
    return (
      <div>
        <Navigation userCount={this.state.userCount}/>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage} changeUser={this.changeUser} />
      </div>
    );
  }
}


export default App;