import {BiArchive} from "react-icons/bi";
import Search from './components/Search';

function App() {
    return (
        <div className="App-container">
            <h1 className="app-h1"><BiArchive className="archive--icon"/>Your Appointments</h1>
            <Search/>
        </div>
    );
}

export default App;
