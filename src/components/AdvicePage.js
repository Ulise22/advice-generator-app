import React from "react";
import  icon  from './images/icon-dice.svg';
import  divider  from './images/pattern-divider-desktop.svg';
import  dividerMobile  from './images/pattern-divider-mobile.svg';
import './AdvicePage.css';

const AdvicePage = ({slip, changeAdvice}) => {

    const handleClick = () => {
        changeAdvice();
    }

    
    return(
        <div>
            <div className="advicePage__container">
                <div className="advicePage">
                    <div className="advicePage__text">
                        <span className="advicePage__count">A d v i c e    #{slip.id} </span>

                        <h4 className="advicePage__advice"> {slip.advice} </h4>

                    </div>
                    <div className="advicePage__divider"></div>
                </div>

                <div onClick={handleClick} className="randomBtn">
                    <img src={icon} alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default AdvicePage;