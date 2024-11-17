import React from 'react';

const CommandButton = ({ label1, label2, position }) => {
  console.log(position);

  // Determine the alignment for label1 based on position prop
  const label1Alignment = position === 'left' ? 'justify-start' : 'justify-end';

  return (
    <button className="bg-black text-white h-[64px] w-[86px] flex flex-col rounded-md p-2 gap-1">
      {/* Adjust label1's position */}
      <div className={`flex ${label1Alignment} items-center w-full text-sm`}>
        {label1}
      </div>
      {/* Center align label2 */}
      <div className="flex justify-center text-xs">{label2}</div>
    </button>
  );
};

export default CommandButton;
