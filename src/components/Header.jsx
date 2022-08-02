import { observer } from "mobx-react-lite";
import TrackerStore from "../store/TrackerStore";
import { useTheme } from "../hooks/useTheme";
import cn from "classnames";
import {useState} from 'react'

const Header = observer(() => {
  const { isPink } = useTheme();
  
  const [errorMessage, setErrorMessage] = useState('')
  
  const previous = () => {
    let prevMonth = TrackerStore.prevMonth
    TrackerStore.setMonth(prevMonth)
  }
  
  const next = () => {
    let nextMonth = TrackerStore.nextMonth
    TrackerStore.setMonth(nextMonth)
  }
  
  const changeYear = (input) => {
    let year
    try{
      year = parseInt(input)
    }
    catch(error){
      setErrorMessage('incorrect year')
    }
    if(year && year > 1900 && year < 3000){
      TrackerStore.setYear(year)
      setErrorMessage('')
    }
    else{
      setErrorMessage('incorrect year')
    }
  }

  return (
    <div className="header">
      <div className="logo">
        <h1>Alcotracker</h1>
        <img
          src={
            "https://cdn.glitch.global/54cc3066-fbf3-425a-83f5-b518c1557726/alcohol.svg?v=1659086214821"
          }
          alt="app logo"
        />
      </div>
      <span contentEditable={true}
        className={cn('year',{pink: isPink === true})}
        onInput={(e) => changeYear(e.currentTarget.textContent)}>
        {TrackerStore.year}
      </span>
      {errorMessage && <p>Error: {errorMessage}</p>}
      <div className="month-title">
        <button className={cn("btn-theme", { pink: isPink === true })}
          onClick={previous}>
          {"<"}
        </button>
        <h2>{TrackerStore.month}</h2>
        <button className={cn("btn-theme", { pink: isPink === true })}
          onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  );
});

export default Header;
