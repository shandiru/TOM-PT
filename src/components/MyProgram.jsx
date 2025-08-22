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
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-black mb-2">
              MY PROGRAM<span className="text-lime-500">...</span>
            </h1>
            <p className="max-w-md text-gray-600 mb-4">
              Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus.
              Auctor neque vitae tempus quam. At urna condimentum mattis pellentesque.
            </p>
            <button className="bg-lime-500 text-white font-semibold px-6 py-2 rounded hover:bg-lime-600">
              JOIN NOW
            </button>
          </div>

          {/* Left Cards */}
          <Card
            icon={<FaHeartbeat className="h-10 w-10 text-lime-500" />}
            title="Cardio"
            desc="Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices."
          />
          <Card
            icon={<FaDumbbell className="h-10 w-10 text-lime-500" />}
            title="Abdominal abs"
            desc="Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices."
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img src="/center.png" alt="Fitness" className="max-h-[600px] w-auto" />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <Card
            icon={<FaUserAlt className="h-10 w-10 text-lime-500" />}
            title="Shoulders"
            desc="Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Condimentum vitae sapien."
          />
          <Card
            icon={<FaRegHandRock className="h-10 w-10 text-lime-500" />}
            title="Hands"
            desc="Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Purus in massa tempor."
          />
          <Card
            icon={<FaClock className="h-10 w-10 text-lime-500" />}
            title="Time"
            desc="Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices."
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
