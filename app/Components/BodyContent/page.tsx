import Image from "next/image"
import mobile_pic from '../../../public/Assets/mobile.png'
export const BodyContent=()=>{
    return (
        <>
          <div className="bg-purple-400 p-3 items-center text-center flex">
                <Image alt="Mobile_pic" className="text-center rounded-xl items-center" style={{ width: '90%' }} src={mobile_pic}></Image>
        </div>
        {/* <div className="flex flex-row justify-between"> 
            <div className="text-black font-xl">
                EQ beats IQ
            </div>
            <div className="text-black">
                People with high emotional intelligance (EQ) live more fulfilledlives. they tend to be happier and healthier relationships.
                </div>
                <div className="text-black">
                People with high emotional intelligance (EQ) live more fulfilledlives. they tend to be happier and healthier relationships.
                </div>
        </div> */}
        <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-6 rounded shadow-lg">
            <div className="md:w-[30%] text-3xl font-bold text-blue-600 mb-4 md:mb-0">
                EQ beats IQ
            </div>
            <div className=" md:w-[35%] text-gray-800 text-lg mb-4 md:mr-4 ">
                People with high emotional intelligence (EQ) live more fulfilled lives. They tend to have happier and healthier relationships.
            </div>
            <div className="md:w-[35%] text-black text-lg md:mr-4">
                People with high emotional intelligence (EQ) live more fulfilled lives. They tend to have happier and healthier relationships.
            </div>
        </div>


        <div className="text-2xl text-black font-bold">
            Does this Sound familiar
        </div>
        
        </>
      
    
    )
}