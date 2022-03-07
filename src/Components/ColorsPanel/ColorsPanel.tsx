import { colors } from "./colors"
import './ColorsPanel.scss';
import ColorsList from "../ColorsList/ColorsList";
import AddColorForm from "../AddColorForm/AddColorForm";
import { useState } from "react";

const ColorsPanel = () =>{
    const [input, setInput] = useState('');

    const mergeColors = () => {
        const colorsFromStorage = JSON.parse(localStorage.getItem('colors') || '[]');
        if(colorsFromStorage !== []){
            const finished = colorsFromStorage.concat(colors)
            return finished;
        }
    }

    return (
        <div className="colorsPanel-wrapper">
            <div className="colorsPanel-inputs">
            <AddColorForm/>
            <input value={input} onChange={(e) => setInput(e.target.value.toLowerCase())} placeholder="Search colors e.g. Red"></input>

            </div>
           <ColorsList list={mergeColors()} conditions={input}/>
        </div>
    )
}

export default ColorsPanel;