import React from 'react';
import { BsEmojiAngryFill } from 'react-icons/bs';
export const Cards=({heading, title, titleStyle, headingStyle, containerStyle}:any | React.ReactElement)=>{
    
    return (
        
<div className={`max-w-sm p-6 border border-gray-200 rounded-lg shadow` } style={containerStyle}>
<BsEmojiAngryFill className='text-yellow-500 text-2xl' />
  
        <h5 className="mb-2 text-2xl font-semibold tracking-tight" style={headingStyle}>{heading}</h5>
    <p className="mb-3 font-normal" style={titleStyle}>{title}</p>
</div>

    )
}