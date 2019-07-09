import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        
        const {messages} = this.props;
        const messagesArr = messages.map(message => {
            return (
                <div key={message.id}>
                    <Message message={message}/>
                </div>
            )
        })
        
        return (
            <main className="messages">
                {messagesArr}
            </main>
        );
    }
}

export default MessageList;
