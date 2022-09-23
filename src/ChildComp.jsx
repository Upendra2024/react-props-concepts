import React from 'react';

export const Child = (props)=>{
  return(
    <div>
      {/* <button onClick ={props.handler} >Change Click</button> */}
      <button onClick ={ () =>props.handler('child')}> change Click</button>
    </div>
  )
}