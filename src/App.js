import { BiCalendar} from "react-icons/bi";
import Search from './components/Search';
import AddApointment from "./components/AddApointment";

function App() {
    return (
        <div className="App-container">
            <h1 className="app-h1 mb-3"><BiCalendar className="archive--icon"/>Your Appointments</h1>
            <AddApointment/>
            <Search/>
        </div>
    );
}

export default App;
