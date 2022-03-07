import './ColorElement.scss';

type ElementProps = {
    styles: React.CSSProperties
    removable: boolean
    children: string
}

const ColorElement: React.FC<ElementProps> = ({children, styles, removable}) => {

    const deleteColor = (color: string) => {
        const items = JSON.parse(localStorage.getItem('colors') || '[]');
        console.log(items.length);
        const removed = items?.filter((item: {color: string}) => 
            item.color !== color
        ) || [];
        localStorage.setItem('colors', JSON.stringify(removed));
        window.location.reload()
    }

    return(
        <div className="colorElement-wrapper">
             {removable && <button className="colorElement-button" onClick={() => deleteColor(children)}>x</button>}
            <div className="colorElement-rectangle" style={styles}></div>
            <p className="colorElement-description">{children}</p>
            
        </div>
    )
}

export default ColorElement