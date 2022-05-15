import {BiCalendarPlus} from "react-icons/bi";
import {useState} from "react";


const AddAppointment = ({onSendAppointment, lastId}) => {
    //shows or hides the form
    let [toggleForm, setToggleForm] = useState(false);
    const clearData = {
        ownerName: '',
        petName: '',
        appDate: '',
        appTime: '',
        aptNotes: ''

    }


    let [formData, setFormData] = useState(clearData)


    function formDataPublish(){
        const appointmentInfo = {
            id: lastId + 1,
            ownerName: formData.ownerName,
            petName: formData.petName,
            appDate: formData.appDate + ' ' + formData.appTime,
            aptNotes: formData.aptNotes
        }
        onSendAppointment(appointmentInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    }
    return (
        <div>
            <button onClick={() => {
                setToggleForm(!toggleForm)
            }}
                    className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md rounded-t-md
                    ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
                <div><BiCalendarPlus className="inline-block align-text-top"/> Add Appointment</div>
            </button>
            {/*fragments*/}
            {
                toggleForm &&
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Owner Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="ownerName" id="ownerName"
                                   className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                   value={formData.ownerName}
                                   onChange={(event) => {
                                       setFormData({...formData, ownerName: event.target.value})
                                   }}
                            />

                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="petName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Pet Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="text" name="petName" id="petName"
                                   className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                   value={formData.petName}
                                   onChange={(event) => {
                                       setFormData({...formData, petName: event.target.value})
                                   }}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptDate" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Apt Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="date" name="aptDate" id="aptDate"
                                   className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                   value={formData.appDate}
                                   onChange={(event) => {
                                       setFormData({...formData, appDate: event.target.value})
                                   }}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptTime" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Apt Time
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input type="time" name="aptTime" id="aptTime"
                                   className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                   value={formData.appTime}
                                   onChange={(event) => {
                                       setFormData({...formData, appTime: event.target.value})
                                   }}
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                            Appointment Notes
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea id="aptNotes" name="aptNotes" rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Detailed comments about the condition"
                        value={formData.aptNotes}
                        onChange={(event) => {
                            setFormData({...formData, aptNotes: event.target.value})
                        }}
              />
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button type="submit" onClick={formDataPublish}
                                    className=" text-blue-600 border-blue-700 ml-3 inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddAppointment;