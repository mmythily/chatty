import React, {Component} from 'react';

class Navigation extends Component {
    
    render() {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <span className="user-count">{this.props.userCount} users online</span>
            </nav>
        );
    }
}

export default Navigation;