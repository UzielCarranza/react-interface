import {BiCalendar} from "react-icons/bi";
import Search from './components/Search';
import AddAppointment from "./components/AddApointment";
import AppointmentInfo from "./components/AppointmentInfo";
import {useState, useCallback, useEffect} from "react";


function App() {
    let [appointmentList, setAppointmentList] = useState([]);

    //retrieving data from outside of resources

    const FetchData = useCallback(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                    setAppointmentList(data)
                }
            );
    }, []);


    // any changes that are done use effect will take care of it automatically
    useEffect(() => {
        FetchData();
    }, [FetchData])

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
                                     onDeleteAppointment={appointmentId => {
                                         setAppointmentList(appointmentList.filter(
                                             appointment => appointment.id === appointmentId
                                         ))
                                     }}
                    />
                ))}

            </ul>
        </div>
    );
}

export default App;
