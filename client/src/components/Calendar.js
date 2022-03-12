import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
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
      <Button className="button is-primary" onClick={openModalHandler}>
        Add Event
      </Button>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          ref={calendarRef}
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
