
import './App.css';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

function App() {

  const  handleDateClick = (arg) => { 
    console.log(arg)
  }
  return (
    <div className="App">
  
  <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        dateClick={handleDateClick}
      />
    
    </div>
  );
}

export default App;
