import React from 'react';
import './individualquestion.css'
export default function Individualquestion(prop) {
  return <div className='indiquestion'>
    <p className='questiononly'>{prop.id+". "+prop.question}</p>
    <div className='options'>
      <button>{prop.option1}</button>
      <button>{prop.option2}</button>
      <button>{prop.option3}</button>
      <button>{prop.option4}</button>
    </div>
 
  </div>;
}
