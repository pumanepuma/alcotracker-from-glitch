import TrackerStore from "../store/TrackerStore";
import { observer } from "mobx-react-lite";
import cn from "classnames";
import { useTheme } from "../hooks/useTheme";

const Day = observer(({ day }) => {
  const { isPink } = useTheme();

  var dayClass = "day";
  if (isPink) dayClass += " pink";
  if(TrackerStore.checked.includes(day)) dayClass += ' checked'

  return (
    <div className={dayClass}
      onClick={()=>TrackerStore.checkDay(day)}>
      {day}
    </div>
  );
});

export default Day;
