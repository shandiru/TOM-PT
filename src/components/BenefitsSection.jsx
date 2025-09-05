import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Nutrition Strategies",
      description:
        "No rabbit food here - learn how to eat in a way that burns fat, builds muscle, and still lets you enjoy pizza night.",
    },
    {
      title: "Workout Routines",
      description:
        "Say goodbye to boring treadmills. Every session is tailored to YOU, so you’ll never wonder “what do I even do at the gym?” again.",
    },
    {
      title: "Individual Support",
      description:
        "Think of me as your fitness sidekick - keeping you motivated, accountable, and celebrating every win (big or small).",
    },
    {
      title: "First-Hand Advice",
      description:
        "Real talk, no fluff. I’ll share the tips, tricks, and shortcuts I’ve learned so you can skip the guesswork and fast-track your results.",
    },
  ];

  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-black">Why Personal Training Rocks</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#67c2d5] p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-black mb-4">{benefit.title}</h3>
              <p className="text-gray-800">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
