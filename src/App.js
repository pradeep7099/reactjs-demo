import logo from './logo.svg';
import './App.css';
import React from "react";
import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App() {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const api_key = process.env.REACT_APP_API_KEY;
  console.log('env variables', process.env);
  return (
    <div className="App">

      <p>Client ID: {client_id}</p>
      <p>API KEY: {api_key}</p>

    </div>
  );
}
