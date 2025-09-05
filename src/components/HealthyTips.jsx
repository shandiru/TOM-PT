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
        bg: "bg-green-400 text-green-800",
    },
    {
        id: "macros",
        title: "Macros & Flexible Dieting",
        subtitle: "Precision Nutrition Without Restriction",
        description:
            "Macronutrients = Protein, Carbs, Fat → foundation of nutrition",
        icon: FaChartBar,
        bg: "bg-blue-400 text-blue-800",
    },
    {
        id: "hiit",
        title: "HIIT Training",
        subtitle: "High-Intensity Interval Training",
        description: "Short bursts of intense effort followed by recovery periods",
        icon: FaBolt,
        bg: "bg-orange-400 text-orange-800",
    },
];

export default function FitnessGuide() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
            {/* Header */}
            <div className="text-center max-w-2xl mb-10">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-15">
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
                                className={`flex items-start gap-4 p-8 rounded-xl border-2 border-gray-200 shadow-lg cursor-pointer transition 
                ${selected?.id === opt.id ? "border-blue-500 bg-blue-50" : "bg-white hover:shadow-md"}`}
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

                {/* Right: Details */}
                <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl bg-white shadow-lg text-center h-80 p-6">
                    {selected ? (
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">
                                {selected.title}
                            </h3>
                            <p className="text-sm text-blue-500 mt-1">{selected.subtitle}</p>
                            <p className="text-gray-600 mt-3">{selected.description}</p>
                        </div>
                    ) : (
                        <div className="text-gray-500">
                            <FaBullseye className="text-6xl text-red-500 mx-auto mb-3" />
                            <h3 className="font-semibold text-xl">Select an Option</h3>
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
