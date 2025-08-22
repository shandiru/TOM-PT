import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-4xl font-bold mb-8 text-black">BENEFITS OF PERSONAL TRAINING</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Nutrition Strategies</h3>
            <p className="text-gray-600">
              Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Workout Routines</h3>
            <p className="text-gray-600">
              Auctor neque vitae tempus quam. At urna condimentum mattis pellentesque id.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">Individual Support</h3>
            <p className="text-gray-600">
              Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.
            </p>
          </div>
          {/* Benefit 4 */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4">First-Hand Advice</h3>
            <p className="text-gray-600">
              Sem viverra aliquet eget sit amet. Adipiscing elit duis tristique sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
