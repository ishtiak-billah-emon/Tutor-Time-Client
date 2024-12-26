import React from "react";
import Categories from "../componenets/Categories";
import bannerImg from "../assets/Images/virtual-classroom-new.jpeg";
import bannerImg2 from "../assets/Images/teacher-new.jpeg";
import Stats from "../componenets/Stats";
import WorkingPrinciple from "../componenets/WorkingPrinciple";
import Faq from "../componenets/Faq";

const Home = () => {
  return (
    <div>
      {/* Banner Page */}
      <section className="banner bg-[#fef0ef] py-12 md:py-24 px-4 md:px-0  ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold w-full  mb-3 md:mb-6">
              Connecting Learners with Expert Tutors Worldwide
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#a69cb1] w-full md:w-3/4">
              Find the perfect tutor for any subject or language, and start
              learning today!
            </p>
          </div>
          <div className="flex-1 relative">
            <img
              // className="border-b-[6px] border-l-[6px] border-[#d59051] rounded-t-2xl w-72 md:w-auto "
              className="border-l-[6px] border-b-[6px]  border-[#d59051] rounded-t-2xl w-72 md:w-auto"
              src={bannerImg}
              alt="Banner"
            />
            {/* <img
              className="border-b-[6px] border-l-[6px] border-[#d59051] rounded-t-2xl w-72 md:w-96 absolute top-10 left-10 md:top-[200px] md:left-[200px] z-0 pb-12"
              src={bannerImg2}
              alt="Banner"
            /> */}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        {/* stats */}
        <Stats></Stats>

        {/* language category */}
        <Categories />
        {/* anything relevent */}
        <WorkingPrinciple />
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
