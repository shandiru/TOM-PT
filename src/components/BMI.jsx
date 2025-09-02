import React, { useState } from 'react';

const BMI = () => {
    const [formData, setFormData] = useState({
        gender: 'Female',
        age: '',
        weight: '',
        height: '',
        activity: 'Low',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const calculateBMI = () => {
        const weight = parseFloat(formData.weight);
        const height = parseFloat(formData.height) / 100; // Convert to meters
        const bmi = (weight / (height * height)).toFixed(2);
        alert(`Your BMI is: ${bmi}`);
    };

    return (
        <div className="min-h-screen bg-black text-black flex justify-center items-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row w-full bg-white max-w-5xl p-6 rounded-xl shadow-xl">
                <div className="flex-1 flex items-center justify-center sm:justify-start bg-red-500">
                    <img
                        src="/weight.png" // Add your image path here
                        alt="Person with BMI scale"
                        className="w-100 h-160 z-10 object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1 sm:ml-6">
                    <h2 className="text-3xl font-extrabold text-black text-center sm:text-left mb-4">Calculate Your BMI</h2>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-lg font-medium text-black">Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus et netus et.</label>
                        <div className="flex items-center mt-5">
                            <label className="mr-4">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Male
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-lg font-medium">Age</label>
                        <input
                            type="number"
                            name="age"
                            id="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-600 rounded-md"
                            placeholder="Enter your age"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="weight" className="block text-lg font-medium">Weight (kg)</label>
                        <input
                            type="number"
                            name="weight"
                            id="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-600 rounded-md"
                            placeholder="Enter your weight"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="height" className="block text-lg font-medium">Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            id="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-600 rounded-md"
                            placeholder="Enter your height"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="activity" className="block text-lg font-medium">Level of Activity</label>
                        <select
                            name="activity"
                            value={formData.activity}
                            onChange={handleChange}
                            className="w-full p-2  border border-gray-600 rounded-md"
                        >
                            <option value="Low">Level of Activity</option>
                            <option value="Medium">Sedentary</option>
                            <option value="High">Light Exercise</option>
                            <option value="High">Moderate Exercise</option>
                            <option value="High">Heavy Exercise</option>
                            <option value="High">Athlete</option>
                        </select>
                    </div>
                    <button
                        onClick={calculateBMI}
                        className="w-full p-3 mt-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold"
                    >
                        Calculate BMI
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BMI;
