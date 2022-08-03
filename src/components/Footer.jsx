import { useTheme } from "../hooks/useTheme"
import cn from 'classnames'
import { useEffect } from "react"
import {observer} from 'mobx-react-lite'
import TrackerStore from '../store/TrackerStore'

const Footer = observer(() => {
    const {setIsPink,isPink} = useTheme()
    const changeTheme = () => {
        setIsPink(prev => !prev)
    }

    useEffect(() => {
        localStorage.setItem('isPink',isPink)
    },[isPink])
  
    const clear = () => {
      TrackerStore.clearStatistics()
      window.location.reload()
    }

    return (
        <div className='footer'>
            <button
            className={cn('btn-theme',{pink:isPink === true})} onClick={changeTheme}>
                Change to {isPink ? 'light' : 'pink'} theme
            </button>
          <h2>Statistics: drunk {TrackerStore.statistics}% days in this month</h2>
        <button className={cn('btn-theme',{pink:isPink === true})} onClick={clear}>
          clear statistics
        </button>
        </div>
    )
})

export default Footer