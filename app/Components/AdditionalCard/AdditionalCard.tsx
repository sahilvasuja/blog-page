import React from 'react';

export const AdditionalCard = () => {
    const title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, assumenda quis esse soluta hic sed cum quibusdam architecto, placeat est atque aut? Unde, tempore ut fuga nihil beatae voluptate.'
  return (
    <div className="flex w-full justify-around border rounded-2xl pt-8 mt-6 bg-purple-100 p-4">
      {/* Left Side */}

      <div className=" p-4 rounded-2xl ">
      <h2 className="text-4xl text-left font-bold mb-4">Work with us</h2>
      <div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow` } >
        <div className='p-6'>

        
    <svg className="w-7 h-7 text-gray-500  mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
        
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">About</h5>
    <p className="mb-3 font-normal" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, assumenda quis esse soluta hic sed cum quibusdam architecto, placeat est atque aut? Unde, tempore ut fuga nihil beatae voluptate.</p>
    </div>
   <div className='bg-orange-100 py-4 rounded-lg w-full '>
    <div className='px-6 '>
    <h5 className="mb-2 text-2xl font-semibold tracking-tight">Product</h5>
    <p className="pb-3 font-normal" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus unde, assumenda quis esse soluta hic sed cum quibusdam architecto, placeat est atque aut? Unde, tempore ut fuga nihil beatae voluptate.</p>
   
    </div>
   
   </div>
   
</div>
    
      </div>

     
     
      <div className="w-1/4  p-4 overflow-auto h-[520px]">
      <h2 className="text-4xl text-purple-900 text-right font-bold mb-4">ahead</h2>
     

     
        <div className='flex flex-col gap-4'>

      
        <div className={`max-w-sm bg-white p-6 border border-gray-200 rounded-lg shadow` } >
    
  
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{'heading'}</h5>
    <p className="mb-3 font-normal" >{title}</p>
</div>
<div className={`max-w-sm p-6 border bg-white border-gray-200 rounded-lg shadow` } >
   
  
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{'heading'}</h5>
    <p className="mb-3 font-normal" >{title}</p>
</div>
<div className={`max-w-sm p-6 border bg-white border-gray-200 rounded-lg shadow` } >
    
  
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{'heading'}</h5>
    <p className="mb-3 font-normal" >{title}</p>
</div>
<div className={`max-w-sm p-6 border bg-white border-gray-200 rounded-lg shadow` } >
   
  
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{'heading'}</h5>
    <p className="mb-3 font-normal" >{title}</p>
</div>
<div className={`max-w-sm p-6 border bg-white border-gray-200 rounded-lg shadow` } >
    
  
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{'heading'}</h5>
    <p className="mb-3 font-normal" >{title}</p>
</div>
</div>
      </div>
    </div>
  );
};

 
