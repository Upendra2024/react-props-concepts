import React from 'react';
import {Child} from '/ChildComp';
export class Parent extends React.Component{

  constructor(){
    super()
    this.state ={
      Parent : 'Parent Component'
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
   changeHandler(){
     alert(`Hello this to ${this.state.Parent} from `)
   }
  
  render(){
   
  return(
    <div>
    <Child handler ={this.changeHandler}/>
    </div>
  ) 

  }
};