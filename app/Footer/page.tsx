import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLocationDot} from 'react-icons/fa6';
import {  CgMail } from 'react-icons/cg';
import { AiFillApple } from 'react-icons/ai';

 const Footer=()=>{
    return (
        <>
           
<div className="">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3 text-purple-600 font-semibold">ahead </h3>
           
            <div className="flex justify-center my-8">
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <p><FaLocationDot className="text-black" 
                         /></p> <div className="text-left ml-3  ">
                       
                        <p className='text-xs text-black'> AuguststraBe 26, 10117 Berlin</p>
                        
                    </div>
                </div>
                <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <CgMail  className="text-black"  /> 
                   <div className="text-left ml-3">
                        <p className='text-xs text-black'>hi@ahead-app.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center  bg-black items-center mx-auto rounded-lg px-4 py-2 w-44 ">
           <AiFillApple className="text-4xl" />
            <div className="text-left ml-3 flex flex-col items-center ">
                <p className='text-xs text-gray-200'>Download on the</p>
                <p className="text-sm md:text-base"> Apple Store </p>
            </div>
        </div>
       
    </div>
</div>
        </>
    )
}
export default Footer;