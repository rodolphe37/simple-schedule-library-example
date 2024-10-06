import { useState } from "react";
import ScheduleCalendar from "./examples/calendar_type/ScheduleCalendar";
import ScheduleEvent from "./examples/event_type/ScheduleEvent";
import ScheduleTemp from "./examples/temperature_type/ScheduleTemp";
import { useLocation } from "react-router-dom";

function App() {
  const [clickedType, setClickedType] = useState("event");
  const location = useLocation();

  return (
    <div className="App">
      <div className="schedule-content">
        {clickedType === "event" ? (
          <ScheduleEvent />
        ) : clickedType === "calendar" ? (
          <ScheduleCalendar />
        ) : (
          <ScheduleTemp />
        )}
      </div>
      <div className="buttons-content" style={{display: location.pathname.includes("/schedule/") ? "none" : "inherit"}}>
        <button style={clickedType === "event" ? {background:"#b4b4b4e3"} : {  background: "#fbfbfbe3"}} onClick={() => setClickedType("event")}>Event type</button>
        <button style={clickedType === "calendar" ? {background:"#b4b4b4e3"} : {  background: "#fbfbfbe3"}} onClick={() => setClickedType("calendar")}>
          Calendar type
        </button>
        <button style={clickedType === "temp" ? {background:"#b4b4b4e3"} : {  background: "#fbfbfbe3"}} onClick={() => setClickedType("temp")}>Temperature type</button>
      </div>
    </div>
  );
}

export default App;
