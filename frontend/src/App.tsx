import { FlightList } from "./components/FlightList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Space Flight Booking</h1>
      </header>
      <main>
        <FlightList />
      </main>
    </div>
  );
}

export default App;
