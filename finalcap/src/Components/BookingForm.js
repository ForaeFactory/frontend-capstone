import React, { useState } from 'react';
import '../Styles/BookingForm.css';


function BookingForm({ date, times, dispatch, onSubmit }) {

   const formFields = {
      date: '',
      time: '',
      guests: '',
      occasion: ''
   }

   const [fieldData, setFieldData] = useState(formFields);


   const [day, setDay] = useState(date);
   const [newTimes, setNewTimes] = useState(times);
   const [timeSelect, setTimeSelect] = useState('')
   const [guests, setGuests] = useState('');
   const [occasion, setOccasion] = useState('');

   const handleDateChange = (e) => {
      dispatch(e.target.value);
      setDay(e.target.value);
      setNewTimes(times);
   }
   // const handleDateChange = (day) => setTimes(day);
   const handleTimeChange = (time) => setTimeSelect(time);
   const handleGuestChange = (guests) => setGuests(guests);
   const handleOccasionChange = (occ) => setOccasion(occ);

   const handleClick = (e) => {
      console.log('clicked')
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ day, timeSelect, guests, occasion })
      // dispatch({ date })
   }
   // console.log("Day Saved: " + day);
   console.log("Times as well: " + newTimes)
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" value={date} onChange={e => handleDateChange(e)} />
         <label htmlFor="res-time">Choose time</label>
         <select id="res-time" onChange={(e) => handleTimeChange(e.target.value)}>
            {newTimes.map((time) => <option key={time}>{time}</option>)}
         </select>
         <label htmlFor="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => handleGuestChange(e.target.value)} />
         <label htmlFor="occasion">Occasion</label>
         <select id="occasion" onChange={(e) => handleOccasionChange(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input type="submit" value="Make Your reservation" onClick={handleClick} />
      </form>
   )
}

export default BookingForm
