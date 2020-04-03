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
  const profiles = [
    {name: "Taro", age:10 },
    { name: "Hanako", age: 5 },
    { name: "noname"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, Iam {props.name}, {props.age} years old!</div>
}

User.defaultProps = {
  age:1
}

export default App;
