import "./App.css";
import { Routes, Route } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Login from "./components/Login";
import Register from "./components/Register";
import "bulma/css/bulma.min.css";
import NavbarComp from "./components/NavbarComp";
import Welcome from "./components/pages/Welcome";

function App() {
  // // const calendarRef = useRef();

  // const handleDateClick = (event) => {
  //   const title = prompt("Enter an event title");

  //   let calendarApi = event.view.calendar;

  //   calendarApi.addEvent({
  //     title,
  //     start: event.startStr,
  //     end: event.endStr,
  //   });
  // };
  return (
    <div className="App">
      {/* <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        // ref={calendarRef}
      /> */}
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
