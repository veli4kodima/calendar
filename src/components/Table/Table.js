import { Component } from 'react';

const CalendarHead = (props) => {
  const monthDays = [];
  const daysInMonth = new Date(
    props.currentDate.getFullYear(),
    props.currentDate.getMonth() + 1,
    0
  ).getDate();

  for (let dayCounter = 0; dayCounter < daysInMonth; dayCounter++) {
    monthDays.push(
      new Date(
        props.currentDate.getFullYear(),
        props.currentDate.getMonth(),
        dayCounter + 1
      ).toLocaleDateString('en-US', {
        weekday: 'short',
      })
    );
  }

  return (
    <thead className="calendar-table__head">
      <tr className="calendar-table__head-row">
        <th className="calendar-table__head-column calendar-table__head-column--btn-cell">
          <button className="calendar-table__add-vacation-button">
            Add Vacation
          </button>
        </th>

        {monthDays.map((item, index) => (
          <th
            className={`${
              item === 'Sun' || item === 'Sat'
                ? 'calendar-table__head-column weekend'
                : 'calendar-table__head-column'
            }`}
            key={'day' + (index + 1)}
          >
            <span className="calendar-table__head-week-day">{item}</span>
            <span className="calendar-table__month-day">{index + 1}</span>
          </th>
        ))}

        <th className="calendar-table__head-column calendar-table__head-column--sum-cell">
          Sum
        </th>
      </tr>
    </thead>
  );
};

export default class Table extends Component {
  render() {
    return (
      <table className="calendar-table">
        <CalendarHead currentDate={this.props.currentDate} />
      </table>
    );
  }
}
