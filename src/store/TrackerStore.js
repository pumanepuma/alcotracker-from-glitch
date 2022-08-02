import { makeAutoObservable } from "mobx";
import { months } from "../constants/months";
import { monthsNames } from '../constants/months'
import {isLeap} from '../controllers/IsLeap'

const initialMonth = localStorage.getItem("month") || "august";
let savedChecked = localStorage.getItem(initialMonth)
let initialChecked = JSON.parse(savedChecked)
console.log(initialChecked)

class TrackerStore {
  constructor() {
    this.month = initialMonth;
    this.checked =  initialChecked || []
    this.year = new Date().getFullYear()
    makeAutoObservable(this);
  }
  
  setYear(year){
    this.year = year
  }

  setMonth(month) {
    this.month = month;
    localStorage.setItem("month", this.month);
    this.checked = JSON.parse(localStorage.getItem(this.month)) || [];
  }

  checkDay(day) {
    if (this.checked.includes(day)) {
      this.checked = this.checked.filter((el) => el != day);
    } else this.checked.push(day);
    localStorage.setItem(this.month, JSON.stringify(this.checked));
  }

  get daysCount() {
    if(this.month === 'february' && isLeap(this.year)){
      return months['leap']
    }
    return months[this.month];
  }
  
  get statistics(){
    let res = this.checked.length/months[this.month] * 100
    return res.toFixed(0)
  }
  
  get nextMonth(){
    let index = monthsNames.indexOf(this.month)
    index = (index + 1) % 12
    return monthsNames[index]
  }
  
  get prevMonth(){
    let index = monthsNames.indexOf(this.month)
    index  = index - 1 < 0 ? 11 : index - 1
    return monthsNames[index]
  }
}

export default new TrackerStore();
