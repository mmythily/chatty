import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        return (
            <footer className="chatbar">
                <input className="chatbarUsername" placeholder="Your Name (Optional)" />
                <input className="chatbarMessage" placeholder="Type a message and hit ENTER" />
            </footer>
        );
    }
}

export default ChatBar;

//2) Pass currentUser using props
// Now that the initial state is set in the App component, pass the currentUser down to the ChatBar component as a prop. Use the prop to display the name of the current user inside the input field's defaultValue.