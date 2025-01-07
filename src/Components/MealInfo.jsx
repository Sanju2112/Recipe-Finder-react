import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
    const {mealid} = useParams();
    const [info,setInfo] = useState({});

    const getInfo = async() => {
        const data = await fetch(`${import.meta.env.VITE_MEALINFO_URL}?i=${mealid}`);
        const jsonData = await data.json();
        setInfo(jsonData.meals[0]);
    };

    if(info != ""){
        getInfo();
    }

    return(
    <div>
        {!info ? (
            "Data not found"
        ) : (
            <div className="flex flex-col md:flex-row items-center gap-6 h-screen bg-pink-200 p-5 md:p-8 overflow-y-auto">
                <img src={info.strMealThumb}
                className="w-full md:w-1/2 max-h-80 md:max-h-[50vh] rounded-xl object-cover"
                alt="Meal Thumbnail"/>
                <div className="flex flex-col items-center md:items-start text-center md:text-left -mt-12 md:-mt-24 overflow-y-auto">
                    <h1 className="font-bold text-2xl md:text-3xl mb-3 mt-8">Recipe Details</h1>
                    <button className="bg-sky-200 p-2 md:p-3 text-lg md:text-xl rounded-xl font-semibold shadow-md mb-3 font-serif text-blue-600">
                    {info.strMeal}
                    </button>
                    <h3 className="text-lg md:text-xl font-semibold underline mb-2">Instructions:</h3>
                    <p className="text-sm md:text-lg max-h-60 md:max-h-[40vh] overflow-y-auto">
                    {info.strInstructions}
                    </p>
                </div>
            </div>
        )}
    </div>
    );
};
export default MealInfo