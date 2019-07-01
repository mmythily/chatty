//Rule 1: always import React (and)
import React, {Component} from 'react';

//Rule 2: Make class and it must extend component

const greeting = () => {
  return ( 
    <div>
      <p> hello </p>
    </div>
  )
}

const videos = () => {
  return (
  <div>
    <img className='image' src='http://place-puppy.com/200x200'/>
  </div>)
}

class App extends Component {
  //Rule 4: your class must have a reder function() and it must 
  render() {
    //Rule 5: must return jsx
    return (
      <div>
        <h1>Hello React :)</h1>
        <p>how are you reacting, haha.</p>
        <p>{greeting()}</p>
        <p>{videos()}</p>
        <p>{videos()}</p>
      </div>
    );
  }
}

//Rule 3: always export your component
export default App;
