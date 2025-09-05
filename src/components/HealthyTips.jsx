// FitnessGuide.jsx
import React, { useState } from "react";
import { FaBullseye, FaChartBar, FaBolt } from "react-icons/fa";
import { GiAvocado } from "react-icons/gi";

const options = [
  {
    id: "keto",
    title: "Keto Diet",
    subtitle: "Fat Loss, Mind, and Adherence",
    description:
      "High-fat, low-carb eating strategy designed to shift the body into ketosis",
    icon: GiAvocado,
    bg: "bg-green-500 text-black",
    benefits: [
      "Ketosis = using fat (ketones) as the primary energy source instead of glucose",
      "Stabilizes blood sugar levels → fewer energy crashes throughout the day",
      "Suppresses appetite naturally, making adherence easier for many people",
      "Helps reduce sugar cravings and emotional eating",
      "Can enhance mental clarity and focus due to steady ketone fuel for the brain",
      "Promotes efficient fat oxidation, especially for stubborn fat loss",
      "May improve insulin sensitivity and metabolic flexibility",
      "Reduces inflammation markers in some individuals",
      "Often leads to rapid initial water-weight loss → motivates clients early",
      "Adherence factor: simplified food choices, less calorie counting for some",
      "Satiety from higher fat intake → makes sticking to diet easier",
      `Psychological benefit: clear "yes/no" food rules`,
      "Studies show low-carb diets can outperform low-fat diets in the short term for fat loss",
      "Mind-body connection: clients report sharper focus, better mood stability",
      "Can be paired with intermittent fasting for accelerated results"
    ],
  },
  {
    id: "macros",
    title: "Macros & Flexible Dieting",
    subtitle: "Precision Nutrition Without Restriction",
    description:
      "Macronutrients = Protein, Carbs, Fat → foundation of nutrition",
    icon: FaChartBar,
    bg: "bg-blue-900 text-black",
    benefits: [
      "Protein = muscle repair & satiety; Carbs = fuel; Fat = hormones & brain health",
      `Counting macros = precision nutrition without obsessing over "clean" foods`,
      `Flexible dieting = "If It Fits Your Macros" (IIFYM) → balance, sustainability`,
      "Helps avoid extreme restriction → less binge/rebound risk",
      "Teaches clients portion awareness and food education",
      "Empowers people to eat foods they enjoy while hitting goals",
      "Great for long-term adherence → fits social life, holidays, lifestyle",
      "Focuses on nutrient quality and quantity → balance between health and enjoyment",
      `Helps track calorie intake more accurately than "clean eating" alone`,
      "Allows freedom → no food is off-limits, just budgeted in",
      "Builds consistency without boredom → higher diet sustainability",
      "Customizable: athletes, fat loss, muscle gain, maintenance",
      "Encourages mindfulness in food choices → awareness of hidden calories",
      "Teaches problem-solving: swapping carbs for fat, adjusting for activity levels",
      "Clients feel in control, not restricted → psychological win",
      "Makes progress measurable and trackable",
      "Data-driven → clear adjustments when plateaus occur"
    ],
  },
  {
    id: "hiit",
    title: "HIIT Training",
    subtitle: "High-Intensity Interval Training",
    description:
      "Short bursts of intense effort followed by recovery periods",
    icon: FaBolt,
    bg: "bg-orange-400 text-orange-800",
    benefits: [
      "Time-efficient: can burn more calories in 20 minutes than steady cardio",
      "Boosts EPOC (Excess Post-exercise Oxygen Consumption) → 'afterburn' effect",
      "Builds cardiovascular endurance + muscular endurance together",
      "Improves VO2 max and overall conditioning",
      "Highly adaptable → can be done with bodyweight, weights, or machines",
      "Ideal for clients with busy schedules → quick sessions, big results",
      "Proven fat loss accelerator while preserving lean muscle",
      "Increases metabolic rate for hours after the workout",
      "Versatile: can be scaled for beginners to advanced athletes",
      "Helps break plateaus in fat loss programs",
      "Improves insulin sensitivity → better nutrient partitioning",
      "Engages fast-twitch muscle fibers → athletic performance boost",
      "Keeps training fun and dynamic → higher adherence vs boring cardio",
      "Mental toughness builder → clients feel accomplished after sessions",
      "Can be tailored to individual goals (fat loss, performance, endurance)",
      "Supports heart health and blood pressure regulation",
      "Works well alongside strength training for balanced programs",
      'Clients report higher satisfaction → "I feel like I worked hard in less time"',
    ],

  },
];

export default function FitnessGuide() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-10">
      {/* Header */}
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Fitness & Nutrition Guide
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-lg">
          Discover proven strategies for fat loss, nutrition, and training.
          Click on any option below to explore detailed insights and benefits.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-8">
        {/* Left: Options */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-gray-800">
            Choose Your Focus
          </h2>
          <div className="space-y-4">
            {options.map((opt) => (
              <div
                key={opt.id}
                onClick={() => setSelected(opt)}
                className={`flex items-start gap-4 p-12 rounded-xl border-2 border-gray-200 shadow-lg cursor-pointer transition 
                  ${selected?.id === opt.id
                    ? "border-blue-500 bg-white"
                    : "bg-[#67c2d5] hover:shadow-md"
                  }`}
              >
                {/* Icon wrapper with custom bg */}
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${opt.bg}`}
                >
                  <opt.icon className="text-2xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    {opt.title}
                  </h3>
                  <p className="text-gray-500">{opt.subtitle}</p>
                  <p className="text-sm text-black mt-1">{opt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details Panel */}
        <div
          className={`flex items-center justify-center border-2 border-gray-300 rounded-xl bg-[#67c2d5] shadow-lg text-left transition-all duration-500 ease-in-out overflow-hidden
          ${selected ? "p-6 min-h-[35rem]" : "h-60"} w-180`}
        >
          {selected ? (
            <div className="w-full">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${selected.bg}`}
                >
                  <selected.icon className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selected.title}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {selected.subtitle}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <h4 className="font-semibold text-lg text-gray-800 mb-3">
                Key Benefits & Insights
              </h4>
              <ul className="list-disc list-inside space-y-4 ml-5 max-h-80 overflow-y-auto pr-2">
                {selected.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="leading-relaxed"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Close button */}
              {/* Close button */}
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => setSelected(null)}
                  className="mt-5 bg-gray-100 text-gray-800 py-2 px-7 rounded-md font-medium hover:bg-black hover:text-white transition"
                >
                  Close Details
                </button>
              </div>

            </div>
          ) : (
            <div className="text-gray-500 text-center transition-opacity duration-500">
              <FaBullseye className="text-5xl text-red-500 mx-auto mb-2" />
              <h3 className="font-semibold text-xl text-black">Select an Option</h3>
              <p className="text-lg max-w-lg mx-auto mt-1">
                Click on any of the fitness strategies on the left to explore
                detailed benefits and insights.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
