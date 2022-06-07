import {React, useState} from "react";
const Container = (props) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div className="outline-border">
            {props.array}
            <div className='btns' onMouseOver={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
            {props.containerList}
                {isShown && (
                <div className='buttons'>
                    <button className='btn' onClick={props.createBox}>Box</button>
                    <button className='btn' onClick={props.createContainer}>Container</button>
                    </div>
        )}
        <div className='add-button'>Add</div>
        </div>
        </div>
     );
}
 
export default Container;
