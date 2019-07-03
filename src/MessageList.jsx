import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component {
    renderMessage = () => {
        const {messages} = this.props;
        return messages.map(message => {
            return (
                <div key={message.id}>
                    <Message message={message}/>
                </div>
            )
        })
    }
    render() {
        return (
            <main className="messages">
                
            </main>
        );
    }
}

export default MessageList;


//   3) Pass messages as props
// Task: Pass the messages as a prop to MessageList. 
//Use a loop inside the MessageList component to render one Message component for each message.