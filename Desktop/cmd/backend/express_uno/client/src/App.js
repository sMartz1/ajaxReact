import React from 'react';

import './App.css';
import ApiReq from "./component/ApiReq";
const summName ="Martinez"
class App extends React.Component {
  

render() {
    return (
      <div className="container-fluid bodyMain">
        <ApiReq stringReceived={summName}/>
        
      </div>
    );
  }
}

export default App;
