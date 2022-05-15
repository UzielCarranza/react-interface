import {BiCalendar, BiTrash} from "react-icons/bi";
import Search from './components/Search';
import AddAppointment from "./components/AddApointment";
import AppointmentInfo from "./components/AppointmentInfo";
import appointmentList from "./data.json";
import {FaTrashAlt} from "react-icons/fa";




function App() {
    return (
        <div className="App-container">
            <h1 className="app-h1 mb-3"><BiCalendar className="archive--icon"/>Your Appointments</h1>
            <AddAppointment/>
            <Search/>

            {/*//everytime you loop through a series of elements, you should use a key*/}
            <ul className="divide-y divide-gray-200">
                {appointmentList.map(appointment => (
                    <AppointmentInfo key={appointment.id}
                    appointment={appointment}
                    />
                ))}

            </ul>
        </div>
    );
}

export default App;
