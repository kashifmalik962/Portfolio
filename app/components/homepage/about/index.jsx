// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import profileImg from "./profile.jpg"


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {/* {personalData.description} */}
            Skilled Python Developer | Expertise in Scalable Backend Systems & AI-Driven Applications. Innovative Python developer with hands-on experience in building efficient backend systems and user-friendly interfaces. Proficient in Flask, Django, FastAPI, and MongoDB. Developed impactful projects like employee monitoring software and an astrologer chatbot. Proven ability to optimize APIs for 30% faster responses, enhance database performance by 25%, and deliver projects on time with precision.
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            // src={personalData.profile}
            src={profileImg}
            width={280}
            height={280}
            alt="Abu Said"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;