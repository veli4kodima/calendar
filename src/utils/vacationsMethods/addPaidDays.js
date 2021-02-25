export default function addPaidDays(cellNumber, paidDays, currentMonth) {
  let element = '';

  // console.log(cellNumber, paidDays, currentMonth);

  paidDays.forEach((day) => {
    if (day.month === currentMonth) {
      if (cellNumber === day.startDay) {
        const vacation = day.endDay + 1 - day.startDay;
        console.log(day);
        element = (
          <div
            className={day.type === 'Paid' ? 'paid-day' : 'unpaid-day'}
            style={{
              width: `${vacation * 33 - 3}px`,
            }}
          >
            {day.type === 'Paid' ? 'Pd' : 'UnPd'}
          </div>
        );
      }
    }
  });

  return element;
}
