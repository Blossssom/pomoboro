import { useEffect, useState } from "react";

const Timebox = ({mode}) => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isStart, setIsStart] = useState(false);
    const [focusOption, setFocusOption] = useState('Pomoboro');


   
    useEffect(() => {
        let timeSeconds
        if(isStart) {
            timeSeconds =  setTimeout(() => seconds > 0 
                                            ? setSeconds(seconds - 1) 
                                            : (setSeconds(59), setMinutes(minutes - 1)), 1000);
            if(seconds === 0 && minutes === 0) {
                clearTimeout(timeSeconds);
                setIsStart(!isStart);
            }
        }

        return () => {
            clearTimeout(timeSeconds);
        }
    }, [seconds, minutes, isStart]);


    const handleStartButtonClick = () => {
        setIsStart(!isStart);
    };

    
    
    const handleClickOption = (e) => {
        setFocusOption(e.target.textContent);
        setIsStart(false);
        mode(e.target.textContent);
        if(e.target.textContent === 'Pomoboro') {
            setMinutes(25);
            setSeconds(0);
        }else if(e.target.textContent === 'Short Break') {
            setMinutes(5);
            setSeconds(0);
        }else if(e.target.textContent === 'Long Break') {
            setMinutes(15);
            setSeconds(0);
        }
    };

    return (
        <article className="timebox">
            <div>
                <button onClick={handleClickOption} className={`timebox-option__btn ${focusOption === 'Pomoboro' ? 'focus' : ''}`}>Pomoboro</button>
                <button onClick={handleClickOption} className={`timebox-option__btn ${focusOption === 'Short Break' ? 'focus' : ''}`}>Short Break</button>
                <button onClick={handleClickOption} className={`timebox-option__btn ${focusOption === 'Long Break' ? 'focus' : ''}`}>Long Break</button>
            </div>      

            <span className="timebox-stopwatch">{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>

            <div>
                <button onClick={handleStartButtonClick} className={`timebox-start__btn ${isStart ? 'start' : ''}`}>{isStart ? 'Stop' : 'Start'}</button>
            </div>
        </article>
    );
};

export default Timebox;