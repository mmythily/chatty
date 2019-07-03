import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        const currentUser = this.props.currentUser;
        return (
            <footer className="chatbar">
                <form>
                    <input className="chatbar-username" placeholder={currentUser} value={currentUser} />
                    <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
                </form>
            </footer>
        );
    }
}

export default ChatBar;

//2) Pass currentUser using props
// Now that the initial state is set in the App component, pass the currentUser down to the ChatBar component as a prop. Use the prop to display the name of the current user inside the input field's defaultValue.