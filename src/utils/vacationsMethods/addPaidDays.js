function elementCreator(vacationLength, vacationType, labelDirection) {
  return (
    <div
      className={vacationType === 'Paid' ? 'paid-day' : 'unpaid-day'}
      style={{
        width: `${vacationLength * 33 - 3}px`,
        [labelDirection]: '1px',
      }}
    >
      {vacationType === 'Paid' ? 'Pd' : 'UnPd'}
    </div>
  );
}

function vacLengthCalc(calcType, vacationItem, currentDate) {
  let vacationLength = 0;
  switch (calcType) {
    case 'start':
      vacationLength =
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).getDate() +
        1 -
        vacationItem.startDay;
      break;

    case 'end':
      vacationLength = vacationItem.endDay;

      break;

    case 'regular':
      vacationLength = vacationItem.endDay + 1 - vacationItem.startDay;

      break;
    default:
      break;
  }
  return vacationLength;
}

export default function addPaidDays(cellNumber, paidDays, currentDate) {
  let element = '';

  paidDays.forEach((vacationItem) => {
    //* START DAY AND END DAY OF VACATION ARE IN DIFFERENT MONTHS
    if (vacationItem.startMonth !== vacationItem.endMonth) {
      //*CALCULATING FROM START DAY TO LAST MONTH DAY
      if (vacationItem.startMonth === currentDate.getMonth() + 1) {
        if (cellNumber === vacationItem.startDay) {
          element = elementCreator(
            vacLengthCalc('start', vacationItem, currentDate),
            vacationItem.type,
            'left'
          );
        }
      }

      //*CALCULATING FROM FIRST MONTH DAY TO END DAY
      if (vacationItem.endMonth === currentDate.getMonth() + 1) {
        if (cellNumber === vacationItem.endDay) {
          element = elementCreator(
            vacLengthCalc('end', vacationItem, currentDate),
            vacationItem.type,
            'right'
          );
        }
      }
    }
    //* REGULAR VACATION LENGTH CALCULATING
    else if (vacationItem.startMonth === currentDate.getMonth() + 1) {
      if (cellNumber === vacationItem.startDay) {
        element = elementCreator(
          vacLengthCalc('regular', vacationItem, currentDate),
          vacationItem.type,
          'left'
        );
      }
    }
  });

  return element;
}
