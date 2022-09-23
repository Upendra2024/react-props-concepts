import React from "react";
import "./style.css";
import {Greet} from './Greet'
import {Message} from './Message'
import {Eventbind} from './Eventbind'
import {Parent} from './ParentComp'

export default function App() {
  return (
    <div>
      <Greet name = "Batman"  studioName ="DC comics"/>
      <Message name ="SpiderMan" studioName="Marvel"/>
      <Eventbind/>
      {/* <Parent/> */}
      
    </div>
  );
}
