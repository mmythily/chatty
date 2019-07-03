import React, {Component} from 'react';

class ChatBar extends Component {

    render() {
        const {currentUser} = this.props;
        return (
            <form className='chatbar' onSubmit={this.onFormSubmit}>

                    <input className='chatbar-username' placeholder={currentUser} />
                    <input className='chatbar-message' placeholder='Type a message and hit ENTER' type='text' onKeyPress={this.messageChange}/>

            </form>
        );
    }

    messageChange = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const content = event.target.value;
            this.props.addMessage(content);
            event.target.value='';
        }
    }

    // userChange = (event) => {
    //     if (event.key === 'Enter') {
    //         event.preventDefault();
    //         const user = event.target.value;
    //         this.props.addMessage(user);
    //     }
    // }
}

export default ChatBar;

