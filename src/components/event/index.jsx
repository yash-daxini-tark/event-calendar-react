import { useState } from 'react';
import style from './style.module.css'

const EventOp = ({ eventDate }) => {

    const [inputValue, setInputValue] = useState();

    let addEvent = () => {
        let eventsForGiveDate = JSON.parse(localStorage.getItem(new Date(eventDate).toDateString()));

        if (eventsForGiveDate === null)
            eventsForGiveDate = [inputValue];
        else
            eventsForGiveDate.push(inputValue);

        localStorage.setItem(new Date(eventDate).toDateString(), JSON.stringify(eventsForGiveDate));

        setInputValue("");
    }

    return (
        <div className={`${style.eventDiv} mt-5`}>
            <div className="mb-3">
                <h5>Schedule Date : {eventDate}</h5>
                <label className="form-label">Enter event title</label>
                <div className="input-group">
                    <input type="text" value={inputValue} className="form-control" id="eventTitle" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <button className='btn btn-outline-success mt-3' onClick={() => {
                    addEvent();
                }}>Add Event</button>
            </div>
        </div>
    )
}

export default EventOp;