import Image from "next/image";
import { IQCard } from "../IQCard/IQCard";
import { Cards } from "../Cards/page";
import { AdditionalCard } from "../AdditionalCard/AdditionalCard";
import { Test } from "../Test/Test";
import { Vacancies } from "../Vacancies/Vacancies";
import { EQ_CONTENT, IQ_CONTENT, cardsData } from "@/utils/constant";

export const BodyContent = () => {
  return (
    <>
      <div className=" w-full  p-3">
        <Image
          src="data:image/jpeg;base64,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"
          alt="Your Image Description"
          width={100}
          style={{ width: "100%" }}
          quality={100}
          height={100}
        />
      </div>
      <IQCard EQ_CONTENT={EQ_CONTENT} />

      <div className="text-4xl w-full text-left text-black m-8 font-bold">
        Does this sound familiar...
      </div>
      <div
        className="flex flex-row my-8 overflow-x-auto  gap-4"
        style={{
          width: "100%",
          scrollbarWidth: "none",
          scrollbarColor: "white",
          msOverflowStyle: "none",
        }}
      >
        {cardsData.map((data, index) => (
          <div className="flex" key={index} style={{ minWidth: "300px" }}>
            <Cards
              heading={data.heading}
              title={data.title}
              headingStyle={{ color: data.headingColor }}
              titleStyle={{ color: data.titleColor }}
              containerStyle={{ backgroundColor: data.backGroundColor }}
            />
          </div>
        ))}
      </div>

      <div className="my-4"></div>
      <IQCard EQ_CONTENT={IQ_CONTENT} />
      <Test />
      <AdditionalCard />
      <Vacancies />
    </>
  );
};
