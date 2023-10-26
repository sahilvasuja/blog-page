interface EQContent {
    leftTitle: string;
    middleTitle: string;
    rightTitle: string;
  }
  interface BodyContentProps {
    EQ_CONTENT: EQContent[]; 
  }
export const IQCard=({EQ_CONTENT}: BodyContentProps)=>{
    return (
        <div className="flex flex-col md:flex-row justify-between  p-6 rounded ">
        <div className="md:w-1/4 text-3xl  font-bold text-blue-600 mb-4 md:mb-0">
          {EQ_CONTENT[0].leftTitle}
        </div>
        <div className=" md:w-1/4  text-gray-800 text-lg mb-4 md:mr-4 ">
            {EQ_CONTENT[0].middleTitle}
            </div>
        <div className="md:w-1/4 text-black text-lg md:mr-4">
           {EQ_CONTENT[0].rightTitle}
           </div>
    </div>
    )
}