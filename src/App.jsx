//Rule 1: always import React (and)
import React, {Component} from 'react';

//Rule 2: Make class and it must extend compnet
class App extends Component {
  //Rule 4: your class must have a reder function() and it must 
  render() {
    //Rule 5: must return jsx
    return (
      <h1>Hello React :)</h1>
    );
  }
}

//Rule 3: always export your component
export default App;
