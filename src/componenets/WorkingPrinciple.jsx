import Lottie from "lottie-react";
import React from "react";
import tutor from "../assets/Lottie/tutor.json"
import practice from "../assets/Lottie/learning.json";
import learning from "../assets/Lottie/learning2.json";

const WorkingPrinciple = () => {
  return (
    <div className="p-4 md:p-0">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mt-16">How we works:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1 */}
        <div className="border border-black rounded-lg p-6">
          <button className="bg-[#7bead6] w-auto h-auto p-4 rounded-md">
            1
          </button>
          <h2 className="text-xl font-bold my-2">Find your tutor.</h2>
          <p>
            We’ll connect you with a tutor who will motivate, challenge, and
            inspire you.
          </p>
          <div>
            <Lottie animationData={tutor}></Lottie>
          </div>
        </div>

        {/* 2 */}
        <div className="border border-black rounded-lg p-6">
          <button className="bg-[#ffe03d] w-auto h-auto p-4 rounded-md">
            2
          </button>
          <h2 className="text-xl font-bold my-2">Start Learning</h2>
          <p>
            Your mentor will lead you through your first steps and assist you in
            mapping out your learning journey ahead.
          </p>
          <div>
            <Lottie animationData={learning}></Lottie>
          </div>
        </div>

        {/* 3 */}
        <div className="border border-black rounded-lg p-6">
          <button className="bg-[#2885fd] w-auto h-auto p-4 rounded-md">
            3
          </button>
          <h2 className="text-xl font-bold my-2">Practice</h2>
          <p>
            Hone your skills through hands-on practice and build confidence with
            each step.
          </p>
          <div>
            <Lottie animationData={practice}></Lottie>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkingPrinciple;
