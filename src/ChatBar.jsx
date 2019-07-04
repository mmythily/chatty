import React, {Component} from 'react';

class ChatBar extends Component {

    render() {
        const {currentUser} = this.props;
        return (
            <form className='chatbar' onSubmit={this.onFormSubmit}>

                    <input className='chatbar-username' placeholder={currentUser} />
                    <input className='chatbar-message' placeholder='Type a message and hit ENTER' type='text' onKeyPress={this.messageDisplay}/>

            </form>
        );
    }

    //On 'enter' the message adds the 
    messageDisplay = event => {
        //console.log(this)
        if (event.key === 'Enter') {
            event.preventDefault();
            const content = event.target.value;
            this.props.addMessage(content);
            event.target.value='';
        }
        console.log('messageDisplay', this.state)

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

