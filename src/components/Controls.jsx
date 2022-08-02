import { useState, useEffect } from "react"
import TrackerStore from "../store/TrackerStore"
import { observer } from "mobx-react-lite"
import {monthsNames} from '../constants/months'
import cn from 'classnames'

const Controls = observer(() => {

    const [month,setMonth] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        TrackerStore.setMonth(month)
    }

    return (
        <div className="controls">
          {
            monthsNames.map(el => <p style={{cursor:'pointer'}}
                                    onClick={() => TrackerStore.setMonth(el)}
                                    className={cn('month-title',{selected:TrackerStore.month === el})}>{el}</p>)
          }
        </div>
    )
})

export default Controls