import {BiCalendar} from "react-icons/bi";
import Search from './components/Search';
import AddAppointment from "./components/AddApointment";
import AppointmentInfo from "./components/AppointmentInfo";
import {useState, useCallback, useEffect} from "react";


function App() {
    let [appointmentList, setAppointmentList] = useState([]);
    let [query, setQuery] = useState("");

    let [sortBy, setSortBy] = useState("petName")
    let [orderBy, setOrderBy] = useState("asc")

    //retrieving data from outside of resources

    const filteredAppointments = appointmentList.filter(
        item => {
            return (
                item.petName.toLowerCase().includes(query.toLowerCase()) ||
                item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
                item.appNotes.toLowerCase().includes(query.toLowerCase())
            );
        }
    ).sort((a, b) => {
        let order = (orderBy === 'asc') ? 1 : -1
        return (
            a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
                ? -1 * order : 1 * order
        )
    })

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
            <Search
                query={query}
                onQueryChange={myQuery => setQuery(myQuery)}
                orderBy={orderBy}
                onOrderByChange={mySort => setOrderBy(mySort)}
                sortBy={sortBy}
                onSortByChange={sortBy => setSortBy(sortBy)}
            />

            {/*//everytime you loop through a series of elements, you should use a key*/}
            <ul className="divide-y divide-gray-200">
                {filteredAppointments.map(appointment => (
                    <AppointmentInfo key={appointment.id}
                                     appointment={appointment}
                                     onDeleteAppointment={
                                         appointmentId =>
                                             setAppointmentList(appointmentList.filter(appointment =>
                                                 appointment.id !== appointmentId
                                             ))
                                     }
                    />
                ))}

            </ul>
        </div>
    );
}

export default App;
