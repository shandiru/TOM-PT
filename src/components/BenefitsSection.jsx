import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-black">Why Personal Training Rocks</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Nutrition Strategies</h3>
            <p className="text-gray-600">
              No rabbit food here - learn how to eat in a way that burns fat, builds muscle, and still lets you enjoy pizza night.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Workout Routines</h3>
            <p className="text-gray-600">
              Say goodbye to boring treadmills. Every session is tailored to YOU, so you’ll never wonder “what do I even do at the gym?” again.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Individual Support</h3>
            <p className="text-gray-600">
              Think of me as your fitness sidekick - keeping you motivated, accountable, and celebrating every win (big or small).
            </p>
          </div>
          {/* Benefit 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">First-Hand Advice</h3>
            <p className="text-gray-600">
              Real talk, no fluff. I’ll share the tips, tricks, and shortcuts I’ve learned so you can skip the guesswork and fast-track your results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
