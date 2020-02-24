import React, {Component} from "react";

class Summoner extends Component{
	
	state = {
		name : this.props.summFile.name,
		level: this.props.summFile.summonerLevel,
		id: this.props.summFile.id
	}

	render(){
		return(
			<div className="col-md-8">
				<div className="col-md-8">
				<div className="card">
					<div className="box">
        				<div className="img">
         				   <img/>
        				</div>
        				<h2>{this.state.name}<br/><span>{this.state.level}</span>
        				</h2>
        				<p> {this.state.id}</p>
        				
    					</div>
    					</div>
					
					</div>
				</div>
			);
	}
}

export default Summoner;