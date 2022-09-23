import React from 'react';
// way to use props in functional component
// export const Greet = (props) =>{
//   return(
//     <div>
//       <h4> Hello {props.name} from {props.studioName}</h4>
//     </div>
//   )
// }

//way to destructure the props and use it on own comp.

// export const Greet = ({name,studioName}) =>{
//   return(
//     <div>
//       <h4> Hello {name} from {studioName}</h4>
//     </div>
//   )
// }

//another way to use props

export const Greet = (props) =>{
  const{name,studioName} = props
  return(
    <div>
      <h4> Hello {name} from {studioName}</h4>
    </div>
  )
}