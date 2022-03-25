// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import React, { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import DateTime from "react-datetime";

// import DatePicker from "react-datepicker";

// const locales = {
//   "en-US": require("date-fns/locale/en-US"),
// };
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const events = [
//   {
//     title: "Big Meeting",
//     allDay: true,
//     start: new Date(2021, 6, 0),
//     end: new Date(2021, 6, 0),
//   },
//   {
//     title: "Vacation",
//     start: new Date(2021, 6, 7),
//     end: new Date(2021, 6, 10),
//   },
//   {
//     title: "Conference",
//     start: new Date(2021, 6, 20),
//     end: new Date(2021, 6, 23),
//   },
// ];

// const BigCalendar = () => {
//   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//   const [allEvents, setAllEvents] = useState(events);

//   function handleAddEvent() {
//     setAllEvents([...allEvents, newEvent]);
//   }

//   return (
//     <div className="App">
//       <h1>Calendar</h1>
//       <h2>Add New Event</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Add Title"
//           style={{ width: "20%", marginRight: "10px" }}
//           value={newEvent.title}
//           onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//         />
//         <DateTime
//           placeholderText="Start Date"
//           style={{ marginRight: "10px" }}
//           selected={newEvent.start}
//           onChange={(start) => setNewEvent({ ...newEvent, start })}
//         />
//         <DateTime
//           placeholderText="End Date"
//           selected={newEvent.end}
//           onChange={(end) => setNewEvent({ ...newEvent, end })}
//         />
//         <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
//           Add Event
//         </button>
//       </div>
//       <Calendar
//         localizer={localizer}
//         events={allEvents}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500, margin: "50px" }}
//       />
//     </div>
//   );
// };
// export default BigCalendar;

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useRef } from "react";
import { Button } from "react-bulma-companion";
import AddEvent from "./AddEvent";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const calendarRef = useRef();

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const onEventAddedHandler = (event) => {
    let calendarApi = calendarRef.current.getApi();
    console.log(event);
    calendarApi.addEvent(event);
  };

  return (
    <div>
      <div>
        <Button className="button is-primary mb-5" onClick={openModalHandler}>
          Add Appointment
        </Button>
      </div>
      <div>
        <Button className="button is-primary">Add New Client</Button>
      </div>
      <div
        style={
          {
            // position: "relative",
            // zIndex: 0,
            // height: "500px",
            // width: "500px",
            // left: "450px",
            // display: "flex",
          }
        }
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="timeGridMonth"
          ref={calendarRef}
          // height="100%"
          // windowResize="true"
        />
      </div>
      <AddEvent
        isOpen={modalOpen}
        onClose={closeModalHandler}
        onEventAdded={(event) => onEventAddedHandler(event)}
      />
    </div>
  );
};

export default Calendar;
