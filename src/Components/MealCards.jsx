import React from 'react';
import { NavLink } from 'react-router-dom';

const MealCards = (props) => {
    return(
        <div className='flex flex-wrap justify-center gap-5 mt-10 p-5'>
        {!props.detail ? "" : props.detail.map((item) => {
            return(
                <div className='w-72 h-auto rounded-xl p-4 text-center bg-white shadow-lg border border-gray-200'>
                    <img src={item.strMealThumb} className='w-full h-64 rounded-tr-xl rounded-tl-xl mb-4'/>
                    <p className='text-xl font-semibold mb-2'>{item.strMeal}</p>
                    <NavLink to = {`/${item.idMeal}`}>
                    <button className='w-28 bg-blue-400 text-white text-lg p-1 cursor-pointer rounded-xl'>Recipe</button>
                    </NavLink>
                </div>
            ); 
        })}
        </div>
    );
    
}

export default MealCards;