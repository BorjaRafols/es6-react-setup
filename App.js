import React from 'react';

class App extends React.Component{
	render(){
		let name = this.props.name;
		return <div>Hello {name}</div>
	}
}

App.propTypes = {
	name: React.PropTypes.string,
	txt: React.PropTypes.string.isRequired
}

export default App;