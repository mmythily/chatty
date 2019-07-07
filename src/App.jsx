import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: {name: 'Anonymous'},
      messages:[],
      userCount: 1
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
    console.log("componentDidMount <App/>")

    //establish connection with websocket
    this.socket = new WebSocket('ws://localhost:3001');
    
    //display received messages from other users
    this.socket.onopen = (event) => {
      console.log('Connected to Web Socket server')
    }
    //receive the broadcasted messages
    this.socket.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      console.log('before swtich',receivedData);
      switch(receivedData.type){
        case "postMessage":
          const postMessage = {
            // oldUser: receivedData.currentUser,
            username: receivedData.username,
            content: receivedData.content,
            id: receivedData.id
          }
          // const messages = this.state.messages.concat(postMessage)
          console.log('from App incoming:', receivedData)
          this.setState({messages:this.state.messages.concat(postMessage)});
          break;

        case "postNotification":
          const oldUser = receivedData.oldUser;
          const newUser = receivedData.username;
          if (oldUser !== newUser) {
            const postNotification = {
              newUsername:newUser,
              content: `${oldUser} changed their name to ${receivedData.username}`
            }
            this.setState({messages:this.state.messages.concat(postNotification)});
          }
          break;
        case "userCount":
          console.log('postCOunt',receivedData)
          const userCount = receivedData.userCount;
          console.log("userCount", userCount )
          default:
            throw new Error(`Unknown event type: ${receivedData.type}`)
      }


      // console.log(receivedData)
      // const postMessage = {
      //   username: receivedData.username,
      //   content: receivedData.content,
      //   id: receivedData.id
      // }
      // const messages = this.state.messages.concat(postMessage)
      // this.setState({messages:messages})
    }
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage} changeUser={this.changeUser} />
      </div>
    );
  }
}


export default App;