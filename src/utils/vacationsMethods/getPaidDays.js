export default function getPaidDays(vacations) {
  const paidDays = [];
  vacations.forEach((vacation) => {
    paidDays.push({
      startDay: Number.parseInt(vacation.startDate.split('.')[0], 10),
      startMonth: Number.parseInt(vacation.startDate.split('.')[1], 10),
      endDay: Number.parseInt(vacation.endDate.split('.')[0], 10),
      endMonth: Number.parseInt(vacation.endDate.split('.')[1], 10),

      type: vacation.type,
    });
  });

  return paidDays;
}
