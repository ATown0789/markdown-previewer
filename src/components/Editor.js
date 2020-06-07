import React from 'react';


class Editor extends React.Component{
	
	
	render(){
		return(
		
			<textarea id='editor' 
						value = {this.props.input} 
						onChange = {this.props.change}>
					</textarea>
		
		)
	}
}

export default Editor;