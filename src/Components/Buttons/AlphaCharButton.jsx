import React from 'react'

const AlphaCharButton = (props) => {
    const {label1, label2, position} = props;
    let txt;
    try {
        txt = label2 && label2[0] === 'F' ? 'text-xs' : '';
    } catch (error) {
        console.log(label2, error);
    }
    const positionClass = (position) ? position : 'center';

    const arr = ['esc', 'delete', 'return', 'tab', 'caps lock', 'shift', 'fn', 'option', 'control'];
    const textSize = arr.includes(label2) ? 'text-sm' : (label2 && label2[0] === 'F' ? 'text-xs' : '');
    return (
        <button className={`bg-black text-white h-[64px] w-[64px] flex flex-col justify-center items-${positionClass} rounded-md p-2`}>
            {label2===''?'':<div className={`flex justify-${positionClass}`}>{label1}</div>}
            <div className={label2 === '' ? `bg-powerButton w-10 h-10 rounded-3xl` : `${textSize}`}>{label2}</div>

        </button>
    )
}

export default AlphaCharButton;