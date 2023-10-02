import React, { useEffect} from 'react';

function Time() {
  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function updateDateTime() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');

    if (clockElement && dateElement) {
      const currentDate = new Date();
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}`;
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
      const dateString = currentDate.toLocaleDateString(undefined, options);

      clockElement.textContent = timeString;
      dateElement.textContent = dateString;
    }
  }

  return (
    <div className="absolute flex flex-col bottom-7 left-12 cursor-none items-center text-center p-9 box-border">
      <h2 className="font relative flex flex-col text-5xl" id="clock">Time</h2>
      <h3 className="relative flex flex-col text-4xl tracking-wider" id="date">Date</h3>
    </div>
  );
}

export default Time;