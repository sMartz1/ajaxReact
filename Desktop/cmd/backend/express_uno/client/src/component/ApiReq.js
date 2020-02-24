import React, {Component} from "react";
import Summoner from "./Summoner";

class ApiReq extends Component{
	state = {
    stringReceived : this.props.stringReceived,
    summoner: []
  };
  
  componentDidMount() {
  	console.log(this.state.stringReceived);
    this.callApi()
      .then(res => this.setState({ response: res.express,
      							    summoner: res.summoner}))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {

  	
    const response = await fetch('/summoner/?name='+this.state.stringReceived);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  render(){
  	return(
  		<div>
  			<Summoner summFile={this.state.summoner} />
  		</div>
  			)
  		}

  }

  export default ApiReq;
