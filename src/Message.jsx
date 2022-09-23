import React from 'react';

//way to use props in state component

// export class Message extends React.Component{
//   render(){
//     return(
//       <div>
//         <h4>Hello {this.props.name} from {this.props.studioName}</h4>
//       </div>
//     )
//   }
// }

//wat to destructure props in class component

export class Message extends React.Component{
  render(){
    const {name,studioName} = this.props;
    return(
      <div>
        <h4>Hello {name} from {studioName}</h4>
      </div>
    )
  }
};