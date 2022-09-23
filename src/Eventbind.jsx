import React from 'react';

export class Eventbind extends React.Component{

constructor(){
  super()
  this.state={
    message :'Hello'
  }
  // this.changeHandler =this.changeHandler.bind(this)
}
//  changeHandler (){
//   this.setState({
//     message : 'Goodbye'
//   })
// }

changeHandler = () =>{
  this.setState({
        message : 'Goodbye'
      })
}



// ways to bind events in class components
  render(){
    return(
      <div>
        <h5>{this.state.message}</h5>
        
        {/* <button onClick ={this.changeHandler.bind(this)}>click</button> 
        */}
        {/* <button onClick= { this.changeHandler}>click</button> */}
        <button onClick = {this.changeHandler}>click</button>
      </div>
    )
  }
}