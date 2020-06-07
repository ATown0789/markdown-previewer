import React from 'react';
import marked from 'marked';


class Preview extends React.Component{
	
	render(){
		
		marked.setOptions({
		gfm:true,
		breaks: true,
		sanitize:true
		});
		
		return(
		
			<div id='preview' dangerouslySetInnerHTML = {{__html: marked(this.props.input)}} />
		
		)
	}
}

export default Preview;


