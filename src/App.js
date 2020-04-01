import React, {Component} from 'react';

// function App() {
//   return (
//     <div><h1>hello world!!</h1></div>
//   );
// }

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={() => { alert("aa") }}></input>
      </React.Fragment>
    )
  }
}
  
  export default App;
