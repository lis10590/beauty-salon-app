import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { modalActions } from "../store/modal";
import DeleteModal from "./DeleteModal";
import {
  selectAllEvents,
  getAllEvents,
  deleteOneEvent,
  reset,
} from "../store/events";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import AddEvent from "./AddEvent";
import { Button, Buttons } from "react-bulma-companion";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const BigCalendar = () => {
  const dispatch = useDispatch();

  const addModal = useSelector((state) => state.modal.addModalOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModalOpen);
  const events = useSelector(selectAllEvents);
  // const finalEvents = events.map((event) => {
  //   event.start = new Date(event.start);
  //   event.end = new Date(event.end);
  //   event.title = event.title;
  //   event._id = event._id;
  // });

  // console.log(finalEvents);

  useEffect(() => {
    dispatch(getAllEvents());
    // return () => {
    //   dispatch(reset());
    // };
  }, [dispatch]);

  const closeAddModalHandler = () => {
    dispatch(modalActions.addModalClose());
  };

  const openAddModalHandler = () => {
    dispatch(modalActions.addModalOpen());
  };

  const openDeleteModalHandler = () => {
    dispatch(modalActions.deleteModalOpen());
  };

  const closeDeleteModalHandler = () => {
    dispatch(modalActions.deleteModalClose());
  };

  const onDeleteEventHandler = (event) => {
    dispatch(modalActions.deleteModalOpen());
    return event;
    // return (
    //   <DeleteModal
    //     onYesClick={(chosenEvent) => {
    //       dispatch(deleteOneEvent(event._id));
    //       dispatch(modalActions.deleteModalClose());
    //     }}
    //     onNoClick={closeDeleteModalHandler}
    //     isOpen={deleteModal}
    //     onClose={closeDeleteModalHandler}
    //   />
    // );
  };

  // console.log(events);

  return (
    <>
      <Buttons className="is-justify-content-center">
        <Button className="is-danger" onClick={openAddModalHandler}>
          Add Appointment
        </Button>
        <Button className="is-danger">Add New Client</Button>
      </Buttons>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onShowMore={events}
        style={{
          width: 900,
          height: 500,
          marginTop: "50px",
          marginLeft: 250,
        }}
        onSelectSlot={(slotInfo) => {
          console.log(slotInfo);
        }}
        selectable
        onSelectEvent={(event) => {
          console.log(event);
        }}
      />
      <AddEvent isOpen={addModal} onClose={closeAddModalHandler} />
      <DeleteModal
        onYesClick={(event) => {
          console.log(event);
          // dispatch(deleteOneEvent(event._id));
          // dispatch(modalActions.deleteModalClose());
        }}
        onNoClick={closeDeleteModalHandler}
        isOpen={deleteModal}
        onClose={closeDeleteModalHandler}
      />
    </>
  );
};
export default BigCalendar;

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { useState, useRef } from "react";
// import { Button } from "react-bulma-companion";
// import AddEvent from "./AddEvent";

// const Calendar = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const calendarRef = useRef();

//   const closeModalHandler = () => {
//     setModalOpen(false);
//   };

//   const openModalHandler = () => {
//     setModalOpen(true);
//   };

//   const onEventAddedHandler = (event) => {
//     let calendarApi = calendarRef.current.getApi();
//     console.log(event);
//     calendarApi.addEvent(event);
//   };

//   return (
//     <div>
//       <div>
//         <Button className="button is-primary mb-5" onClick={openModalHandler}>
//           Add Appointment
//         </Button>
//       </div>
//       <div>
//         <Button className="button is-primary">Add New Client</Button>
//       </div>
//       <div
//         style={
//           {
//             // position: "relative",
//             // zIndex: 0,
//             // height: "500px",
//             // width: "500px",
//             // left: "450px",
//             // display: "flex",
//           }
//         }
//       >
//         <FullCalendar
//           plugins={[dayGridPlugin, interactionPlugin]}
//           initialView="timeGridMonth"
//           ref={calendarRef}
//           // height="100%"
//           // windowResize="true"
//         />
//       </div>
//       <AddEvent
//         isOpen={modalOpen}
//         onClose={closeModalHandler}
//         onEventAdded={(event) => onEventAddedHandler(event)}
//       />
//     </div>
//   );
// };

// export default Calendar;
