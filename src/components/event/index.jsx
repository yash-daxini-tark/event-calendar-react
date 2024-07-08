import style from './style.module.css'

const EventOp = ({ eventDate }) => {
    return (
        <div className={`${style.eventDiv} mt-5`}>
            <div className="mb-3">
                <h5>Schedule Date : {eventDate}</h5>
                <label for="basic-url" className="form-label">Enter event title</label>
                <div className="input-group">
                    <input type="text" className="form-control" id="eventTitle" aria-describedby="basic-addon3 basic-addon4" />
                </div>
                <button className='btn btn-outline-success mt-3'>Add Event</button>
            </div>
        </div>
    )
}

export default EventOp;