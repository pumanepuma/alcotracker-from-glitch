import TrackerStore from "../store/TrackerStore"
import Controls from "./Controls"
import Day from "./Day"
import { observer } from "mobx-react-lite"
import { nanoid } from "nanoid"

const Main = observer(() => {
    return (
        <div className="main">
            <div className='days-container'>
                {[...Array(TrackerStore.daysCount)].map((el,i) => <Day day={i + 1} key={i}/>)}
            </div>
            <Controls />
        </div>
    )
})

export default Main