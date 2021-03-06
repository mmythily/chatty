import React, {Component} from 'react';

class ChatBar extends Component {

    constructor(props) {
        super(props);
        this.state = {user: this.props.currentUser}
    }

    //On 'enter' the message renders with user and message
    messageDisplay = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const content = event.target.value;
            this.props.changeUser(this.state.user, () => {
                this.props.addMessage(content);
            })
            event.target.value= '';
        }
    }

    updateUser = (event) => {
        this.setState({user:event.target.value})
    }

    render() {
        return (
            <form className='chatbar'>
                <input 
                    className='chatbar-username' 
                    defaultValue={this.state.user} 
                    onChange={this.updateUser} />
                <input 
                    className='chatbar-message' 
                    placeholder='Type a message and hit ENTER' 
                    type='text' 
                    onKeyPress={this.messageDisplay} />
            </form>
        );
    }    
}

export default ChatBar;

