import React from 'react';
import './Titlebar.css';



class Titlebar extends React.Component{
	
	
	render(){
		return(
		
			<div className = "Titlebar">
				<h3>{this.props.title}</h3>
				<i onClick = {this.props.click}>X</i>
			</div>
		
		)
	}
}

export default Titlebar;