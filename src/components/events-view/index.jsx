import { useDebugValue, useEffect, useState } from "react"
import style from './style.module.css';
let EventsView = () => {

    let [date, setDate] = useState(new Date());
    let [events, setEvents] = useState([]);

    let [allEventsView, setAllEventsView] = useState([]);


    let prepareList = () => {
        const newEventsView = events.map((event) => <div className={`${style.eventInfoDiv}`}>{event}</div>);
        setAllEventsView(newEventsView);
    }

    useEffect(() => {
        prepareList()
    }, [events]);

    return (
        <>
            <button className="btn btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                See Events
            </button>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">See Events</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <label className="form-label">Enter date</label>
                    <div className="input-group">
                        <input type="date" className={`${style.dateInput}`} id="eventTitle" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => {
                            setDate(e.target.value)
                        }}
                        />
                    </div>
                    <button className='btn btn-outline-success mt-3' onClick={async () => {
                        setAllEventsView([]);
                        let eventsOfGivenDate = JSON.parse(localStorage.getItem(new Date(date).toDateString()));
                        if (eventsOfGivenDate === null)
                            eventsOfGivenDate = []
                        setEvents(eventsOfGivenDate);
                    }}>Show Events</button>
                    <div className="mt-4">{allEventsView.length === 0 ? "No Events available" : allEventsView}</div>
                </div>
            </div>
        </>
    )
}

export default EventsView;