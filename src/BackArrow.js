import React from 'react';

export default function BackArrow(props) {
  return (
    <div onClick={props.previousImage} style={{fontSize: '5em', marginRight: '12px'}}>
      <i className="fa fa-caret-left fa-2x" style= {{color: '#282c34' }} aria-hidden="true"></i>
    </div>
  )
}