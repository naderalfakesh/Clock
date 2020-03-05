import React from 'react';
import './App.css';
import Clock from "./Clock"

class App extends React.Component {
constructor() {
  super()
  this.state = {
    clockIDs: [1,2]
  }
}
handleAdd= ()=>{
  let newArr = this.state.clockIDs
  newArr.push(newArr.length+1)
  this.setState({clockIDs: newArr})

}
handleRemove = (clock)=>{
const newArr = this.state.clockIDs.filter(el=> el !== clock)
this.setState({
  clockIDs: newArr
})
}

  render() {
    return (
      <div>
          <button onClick={this.handleAdd} >Add</button>

        <div style={{display: "flex", justifyContent: "flex-start" , alignItems: "center" ,flexWrap: "wrap"}}>
          {
            this.state.clockIDs.map(id=><Clock key={id} id={id} handleRemove={this.handleRemove}  />)
          }
        </div>
      </div>
    );
  
  }
}

export default App;
