import React from 'react';

export default function NextArrow(props) {
  return (
    <div onClick={props.nextImage} style={{fontSize: '5em', marginLeft: '12px'}}>
      <i className="fa fa-caret-right fa-2x" style= {{color: '#282c34' }} aria-hidden="true"></i>
    </div>
  )
}