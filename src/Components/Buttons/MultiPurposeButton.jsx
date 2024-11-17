import React from 'react'
// button can be used for Tab, delete esc 


const MultiPurposeButton = (props) => {
    const {label, position} = props;
    const positionClass = (position === 'start') ? 'justify-end' : 'justify-end items-end';
    let buttonWidth = '94.5px'; // default width for esc, tab and delete button
    if (label === 'caps lock' || label == 'return') buttonWidth = '115px';
    else if (label === 'shift') buttonWidth = '150px';
    else if (!label) buttonWidth = '350px';

    const arr = ['esc', 'delete', 'return', 'tab', 'caps lock', 'shift', 'fn', 'option', 'control'];
    const textSize = arr.includes(label) ? 'text-sm' : 'text-lg';
  return (
    <button className={`bg-black text-white h-[64px] flex flex-col ${positionClass} rounded-md p-2 ${textSize}`} style={{width: buttonWidth}}>
      <div className='mb-[-6px]'>
        {label}
      </div>
    </button>
  )
}

export default MultiPurposeButton