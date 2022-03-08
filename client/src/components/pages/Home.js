import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef } from "react";



const Home = () => {

      const calendarRef = useRef();

  const handleDateClick = (event) => {
    const title = prompt("Enter an event title");

    let calendarApi = event.view.calendar;

    calendarApi.addEvent({
      title,
      start: event.startStr,
      end: event.endStr,
    });
  };

  return(
         <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
         ref={calendarRef} />

  )
      
  

};

export default Home;
