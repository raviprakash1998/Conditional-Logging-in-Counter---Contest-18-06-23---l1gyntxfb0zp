import React from 'react'
import '../styles/App.css';

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {count:0}
  }
  
  shouldCompUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }
  
  handleClick = () => {
    this.setState((prevState) => ({count: prevState + 1}), () => {
        console.log(`Rendering with count:-${this.state.count}`);
      });
  }


  render(){
    return(
      <div>
        <span id="count">{this.state.count}</span>
        <button id="incr-btn" onClick={this.handleClick}>Increment</button>
      </div>
    )

  }
}

export default App;
