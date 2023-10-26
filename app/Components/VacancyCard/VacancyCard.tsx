'use client'
import { VACANCIES_DATA } from '@/utils/constant';
// import { VACANCIES_DATA } from '@/utils/constant';
import {useState} from 'react'

export const VacancyCard=()=>{
    const [visibleButtonId, setVisibleButtonId] = useState(null);
    const handleMouseEnter = (id:any) => {
        setVisibleButtonId(id);
    }

    const handleMouseLeave = () => {
        setVisibleButtonId(null);
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return(
        <>
         <div className={`w-full rounded-lg flex justify-around flex-row gap-4 ` } >
            {
                VACANCIES_DATA.map((data,index)=>{
                    console.log(index, '16')
                    return (
                        <>
                          <div className='p-6 bg-yellow-100' key={data.id}   onMouseEnter={() => handleMouseEnter(data.id)}
                    onMouseLeave={handleMouseLeave}>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight">{data.heading}</h5>
        <ol className="">
            <li className="mb-3 text-sm " >
                    {data.titleOne}
            </li>
            <li className="mb-3 text-sm" >
           {data.titleTwo} </li>
            <li className="mb-3 text-sm" >
           {data.titleThree}</li>
        </ol>
        {
            visibleButtonId === data.id &&  <button className="bg-black rounded-full text-white py-2 px-4" onClick={scrollToTop}>Start a test</button>
        
        }
   </div>
  
                        </>
                    )
                })
            }
      
</div>
        </>
    )
}