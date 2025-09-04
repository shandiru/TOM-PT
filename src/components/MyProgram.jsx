import React from "react";
import {
  FaHeartbeat,
  FaDumbbell,
  FaUserAlt,
  FaRegHandRock,
  FaClock,
} from "react-icons/fa";

const MyProgram = () => {
  return (
    <div className="min-h-screen bg-red-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-black mb-2">
              MY PROGRAM<span className="text-red-500">...</span>
            </h1>
            <p className="max-w-md text-gray-600 mb-4">
             This isn’t your average “do 20 push-ups and call it a day” plan. My program mixes cardio, strength, and core work to keep things challenging, fun, and seriously effective. Here’s the lowdown.
            </p>
            <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600">
              JOIN NOW
            </button>
          </div>

          {/* Left Cards */}
          <Card
            icon={<FaHeartbeat className="h-10 w-10 text-red-500" />}
            title="Cardio"
            desc="No soul-crushing treadmills. We’ll use smart, high-energy moves to torch calories and boost endurance without the boredom."
          />
          <Card
            icon={<FaDumbbell className="h-10 w-10 text-red-500" />}
            title="Abdominal abs"
            desc="Say goodbye to crunches-only. We’ll sculpt a strong, functional core that looks good and actually works in real life."
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img src="/center.png" alt="Fitness" className="lg:mt-60 md:-ml-36" />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <Card
            icon={<FaUserAlt className="h-10 w-10 text-red-500" />}
            title="Shoulders"
            desc="Because boulder shoulders don’t build themselves. Expect presses, lifts, and movements that shape and strengthen your upper body."
          />
          <Card
            icon={<FaRegHandRock className="h-10 w-10 text-red-500" />}
            title="Hands"
            desc="Grip strength matters more than you think — we’ll train your arms and hands so you’re not just strong, but unshakable."
          />
          <Card
            icon={<FaClock className="h-10 w-10 text-red-500" />}
            title="Time"
            desc="No endless hours in the gym. Efficient, focused workouts designed to get max results in minimal time."
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-center">
    <div className="flex justify-center mb-2">{icon}</div>
    <h4 className="font-semibold text-lg mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default MyProgram;
