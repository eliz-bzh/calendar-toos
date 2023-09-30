import { React } from 'react';

const DateTBody = ({ previousDays, currentDays, nextDays, handleClick }) => {

    return(
        <ol className='days-grid'>
            {previousDays.map((el, index)=>
                <li key={index} className='calendar-day previous-month-day'>{el+1}</li>
            )}
            {currentDays.map((el, index)=>
                <li key={index} className='calendar-day' onClick={(e)=>handleClick(el+1)} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{el+1}</li>
            )}
            {nextDays.map((el, index)=>
                <li key={index} className='calendar-day next-month-day'>{el+1}</li>
            )}
        </ol>
    )
}

export default DateTBody;