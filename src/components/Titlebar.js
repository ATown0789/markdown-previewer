import React from 'react';
import './Titlebar.css';



class Titlebar extends React.Component{
	
	
	render(){
		return(
		
			<div className = "Titlebar">
				<h3>{this.props.title}
					<i onClick = {this.props.click}>X</i>
				</h3>
				
			</div>
		
		)
	}
}

export default Titlebar;