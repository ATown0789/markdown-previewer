import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Titlebar from './components/Titlebar';


class App extends React.Component{
	constructor(props){
		super(props);	

		this.state = {
			input: initial,
			isEditorMin: false
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.editorMin = this.editorMin.bind(this);
		this.previewMin = this.previewMin.bind(this);
	}
	
	editorMin(){
		this.setState({
			isEditorMin: true,
			isPreviewMin: false
		});
	}
	
	previewMin(){
		this.setState({
			isEditorMin: false,
			isPreviewMin: true
		})
	}
	
	handleChange(event){
		this.setState({
			input: event.target.value
		});
	}	 

	render(){	
		let classList = this.state.isEditorMin ? ['editorWrapMin','previewWrap'] : 
													this.state.isPreviewMin ? ['editorWrap','previewWrapMin'] :
													['editorWrap','previewWrap']
		return(
			<div className="App">
				<h1>Markdown Previewer</h1>
				<div className = {classList[0]}>
					<Titlebar click = {this.editorMin} title = "Editor"/>
					<Editor input = {this.state.input} change = {this.handleChange}/>
				</div>
				<div className = {classList[1]} >
					<Titlebar click = {this.previewMin} title = "Preview"/>
					<Preview input = {this.state.input}/>
				</div>
			</div>
		);
	}
}

const initial = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;


export default App;
