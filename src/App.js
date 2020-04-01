import React from 'react';

// function App() {
//   return (
//     <div><h1>hello world!!</h1></div>
//   );
// }

// class App extends Component{
//   render() {
//     return (
//       <React.Fragment>
//         <input type="text" onChange={() => { alert("aa") }}></input>
//       </React.Fragment>
//     )
//   }
// }
  
const App = () => {
  return (
    <div>
      <Cat />
      <Cat/>
      <Cat/>      
    </div>
  )
}

const Cat = () => {
  return <div>Meaw!</div>
}


export default App;
