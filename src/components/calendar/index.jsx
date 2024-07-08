import { useState, useRef } from 'react';
import style from './style.module.css';
import EventOp from '../event'

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = () => {

    let [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    let [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    let [selectedDay, setSelectedDay] = useState(new Date().getDay());
    let [prevSelectedDay, setPrevSelectedDay] = useState(null);
    let divRefs = useRef([]);

    const handleClick = (index) => {

        divRefs.current.forEach(div => {
            // if (div) {
                div.classList.remove(`${style.click}`);
            // }
        });

        if (divRefs.current[index]) {
            divRefs.current[index].classList.add(`${style.click}`);
        }
    };

    function renderCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<div className={`${style.day} ${style.empty}`} key={`empty-${i}`}></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if (prevSelectedDay === null)
                setPrevSelectedDay()
            days.push(
                <div className={style.day} key={day}
                    ref={e => divRefs.current[day] = e}
                    onClick={(e) => handleClick(day)}>{day}</div>);
        }

        return days;
    }

    function prevMonth() {
        setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
        if (currentMonth < 0) {
            setCurrentYear(prev => prev - 1);
        }
        renderCalendar(currentMonth, currentYear);
    }

    function nextMonth() {
        setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
        if (currentMonth > 11) {
            setCurrentYear(prev => prev + 1);
        }
        renderCalendar(currentMonth, currentYear);
    }

    renderCalendar(currentMonth, currentYear);


    return (
        <>
            <div className={style.Calendar}>
                <div className={style.month}>
                    <div className={style.prev} onClick={() => prevMonth()}>&#10094;</div>
                    <div className={style.month - name} id="month-name">{monthNames[currentMonth]} {currentYear}</div>
                    <div className={style.next} onClick={() => nextMonth()}>&#10095;</div>
                </div>
                <div className={style.weekdays}>
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div className={style.days} id='days'>
                    {renderCalendar()}
                </div>
            </div>
            <EventOp eventDate={`${`${currentYear}-${currentMonth}-${selectedDay}`}`} />
        </>

    )
}

export default Calendar;