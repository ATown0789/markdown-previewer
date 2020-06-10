import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Titlebar from './components/Titlebar';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends React.Component{
	constructor(props){
		super(props);	

		this.state = {
			input: initial,
			isEditorMax: false,
			isPreviewMax: false
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.editorMax = this.editorMax.bind(this);
		this.previewMax = this.previewMax.bind(this);
	}
	
	editorMax(){
		this.setState({
			isEditorMax: !this.state.isEditorMax
		});
	}
	
	previewMax(){
		this.setState({
			isPreviewMax: !this.state.isPreviewMax
		})
	}
	
	handleChange(event){
		this.setState({
			input: event.target.value
		});
	}	 

	render(){	
		let classList = this.state.isEditorMax ? ['editorWrapMax','previewWrap hidden','fa fa-compress'] : 
													this.state.isPreviewMax ? ['hidden','previewWrapMax','fa fa-compress'] :
													['editorWrap','previewWrap','fa fa-arrows-alt']
		return(
			<div className="App">
				<h1>Markdown Previewer</h1>
				<div className = {classList[0]}>
					<Titlebar className = {classList[2]} click = {this.editorMax} title = "Editor"/>
					<Editor input = {this.state.input} change = {this.handleChange}/>
				</div>
				<div className = {classList[1]} >
					<Titlebar className = {classList[2]} click = {this.previewMax} title = "Preview"/>
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
