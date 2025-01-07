import React , {useState} from "react";
import MealCards from "./MealCards";

const MainPage = () => {
    const [data,setData] = useState([]);
    const [input,setInput] = useState("");
    const [msg,setMsg] = useState("");

    const handleClick = async () => {
        if(input == ""){
            setMsg("Please Enter Something To Search");
        }else{
            const response = await fetch(`${import.meta.env.VITE_API_URL}?s=${input}`);
            const jsonData = await response.json();
            setData(jsonData.meals);
            setMsg("");
        }
        
    };
    const handleInput = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <div className="bg-sky-100 min-h-screen min-w-full m-0 p-0 "> 
                <h1 className="text-center font-bold text-5xl font-serif pt-8">Food Recipe Finder</h1>
                <div className="flex justify-center gap-5">
                    <input type="text" placeholder="Enter Dish Name" className="border border-black p-2 text-md bg-slate-100 rounded-md mt-10" 
                    onChange={handleInput}/>
                    <button className="bg-blue-400 text-white w-20 rounded-md cursor-pointer mt-10" onClick={handleClick}>Search</button>
                </div>
                <div className="text-center mt-3">{msg}</div>
                <div>
                    {data ? <MealCards detail={data} /> : <div className="text-center mt-3">Data not found !!</div>}
                </div>
            </div>
        </>
    );
};

export default MainPage;