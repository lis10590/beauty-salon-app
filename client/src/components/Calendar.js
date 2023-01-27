import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { modalActions } from "../store/modal";
import DeleteModal from "./DeleteModal";
import { selectAllEvents, getAllEvents, deleteOneEvent } from "../store/events";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import AddEvent from "./Addition Modals/AddEvent";
import { Button, Buttons } from "react-bulma-companion";
import "../styles/mystyles.scss";

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
  const [chosenEvent, setChosenEvent] = useState("");

  const saveChosenEvent = (event) => {
    setChosenEvent(event._id);

    openDeleteModalHandler();
  };

  const addModal = useSelector((state) => state.modal.addModalOpen);
  const deleteModal = useSelector((state) => state.modal.deleteModalOpen);
  const events = useSelector(selectAllEvents);

  useEffect(() => {
    dispatch(getAllEvents());
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

  return (
    <>
      <Buttons className="is-justify-content-center">
        <Button className="is-danger" onClick={openAddModalHandler}>
          Add Appointment
        </Button>
      </Buttons>
      <div className="is-flex is-justify-content-center">
        <Calendar
          className="calendar"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            backgroundColor: "white",
            marginBottom: "2rem",
          }}
          selectable
          onSelectEvent={(event) => {
            saveChosenEvent(event);
          }}
        />
      </div>
      <AddEvent isOpen={addModal} onClose={closeAddModalHandler} />

      <DeleteModal
        onYesClick={() => {
          dispatch(deleteOneEvent(chosenEvent));
          dispatch(modalActions.deleteModalClose());
        }}
        onNoClick={closeDeleteModalHandler}
        isOpen={deleteModal}
        onClose={closeDeleteModalHandler}
      />
    </>
  );
};
export default BigCalendar;
