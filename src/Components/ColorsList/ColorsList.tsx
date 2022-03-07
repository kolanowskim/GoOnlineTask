import { useEffect, useState } from 'react';
import ColorElement from '../ColorElement/ColorElement'
import './ColorsList.scss'

type ElementProps = {
    list: [{
        color: string;
        added: boolean;
    }],
    conditions: string;
}

const ColorsList: React.FC<ElementProps> = ({list, conditions}) => {

    const [filteredColors, setFilteredColors] = useState([{color: "", added: false}])


    const hexToRGB = (color: string) => {
        let r = "", g = "", b = "";

            // 3 digits
            if (color.length === 4) {
                r = "0x" + color[1] + color[1];
                g = "0x" + color[2] + color[2];
                b = "0x" + color[3] + color[3];

            // 6 digits
            } else if (color.length === 7) {
                r = "0x" + color[1] + color[2];
                g = "0x" + color[3] + color[4];
                b = "0x" + color[5] + color[6];
            }
    
           return "rgb("+ +r + "," + +g + "," + +b + ")";
    }

    const filterColors = () => {
        
         const filtered = list.filter(color => {

            const rgbColor = hexToRGB(color.color)
            let rgbSplited = [];
            
            rgbSplited = rgbColor.split(",");

            if(conditions === "red"){
                const red = parseFloat(rgbSplited[0].slice(4, 7));
                if(red > 127){
                    return color
                }          
            }
            else if(conditions === "green"){
                const green = parseFloat(rgbSplited[1].slice(0, 3));
                if(green > 127){
                    return color
                }          
            }
            else if(conditions === "blue"){
                const blue = parseFloat(rgbSplited[2].slice(0, 3));
                if(blue > 127){
                    return color
                }          
            }
            else 
            return color
        })
        setFilteredColors(filtered)
    }

    useEffect(()=> {
        filterColors()
    }, [conditions])

    return(
        <div className='colorsList-wrapper'>
             {filteredColors.map((color, index) => {
                    return <ColorElement key={index} removable={color.added} styles={{backgroundColor: color.color}}>{color.color}</ColorElement>
            })}
        </div>
    )
}

export default ColorsList;