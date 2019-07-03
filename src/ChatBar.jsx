import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        const {currentUser} = this.props;
        return (
            <footer className='chatbar'>

                    <input className='chatbar-username' placeholder={currentUser} />
                    <input className='chatbar-message' placeholder='Type a message and hit ENTER' />

            </footer>
        );
    }
}

export default ChatBar;

//2) Pass currentUser using props
// Now that the initial state is set in the App component, pass the currentUser down to the ChatBar component as a prop. Use the prop to display the name of the current user inside the input field's defaultValue.