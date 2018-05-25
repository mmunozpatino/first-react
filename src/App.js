import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const welcome = "Welcome to React";

class App extends Component {

  constructor(props){
    super(props);
    console.log('constructor')
  }

  componentWillMount(){
    console.log('will mount');
  }

  componentDidMount(){
    console.log('mount')
  }
  //por defecto el estado del componente es true
  state = {
    toggle: true
  }
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome
            text={welcome}
            toggle={this.state.toggle}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggle}>Show / Hide </button>
        {this.state.toggle && 
          <p>This should show and hide</p>        
        }
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle)
    return (
      <h1 className="App-title">{text}, State: {toggle}</h1>
    )
  }
}
export default App;
