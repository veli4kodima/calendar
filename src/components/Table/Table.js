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

const CalendarBody = (props) => {
  const monthDays = [];
  const daysInMonth = new Date(
    props.currentDate.getFullYear(),
    props.currentDate.getMonth() + 1,
    0
  ).getDate();
  const departmentTeams = props.departmentTeams;

  console.log(monthDays);
  console.log(daysInMonth);
  console.log(departmentTeams);

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
      <tbody className="calendar-table__body">
        {
          departmentTeams.teams.map((item, index) => (
            <>
              <tr className={`calendar-table__body-row teamColor${index + 1} team-first-row`}>
                <td className="calendar-table__body-first-column first-column">
                  <div className="team-info-cell">
                    <span className="team-info-cell__team-name">{`${departmentTeams.teams[index].name}`}</span>
                    <div className="team-info-cell__wrapper">
                      <div className="team-info-cell__number-people">
                        {`${departmentTeams.teams[index].members.length}`}
                      </div>
                      <div className="team-info-cell__percent">2%</div>
                      <div className="team-info-cell__collapse"></div>
                    </div>
                  </div>
                </td>
                {
                  monthDays.map((item, index) => (
                    <td className={`${
                      item === 'Sun' || item === 'Sat'
                        ? 'calendar-table__body-column weekend'
                        : 'calendar-table__body-column'
                    }`}
                    key={'day' + (index + 1)}></td>
                  ))
                }
                <td className="calendar-table__body-column sum-cell"></td>
              </tr>
              {
                item.members.map((element, count) => (
                  <tr className={` ${(count === (departmentTeams.teams[index].members.length - 1)) ? `calendar-table__body-row teamColor${index + 1} team${index + 1} team-last-row` : `calendar-table__body-row teamColor${index + 1} team${index + 1}`} `}>
                    <td className={`calendar-table__body-first-column first-column`}>
                      {`${element.name}`}
                    </td>
                    {
                      monthDays.map((item, index) => (
                        <td className={`${
                          item === 'Sun' || item === 'Sat'
                            ? 'calendar-table__body-column weekend'
                            : 'calendar-table__body-column'
                        }`}
                        key={'day' + (index + 1)}></td>
                      ))
                    }
                    <td className="calendar-table__body-column sum-cell"></td>
                  </tr>
                ))
              }
            </>
          ))

        }
      </tbody>
    );
};

export default class Table extends Component {
  render() {
    return (
      <table className="calendar-table">
        <CalendarHead currentDate={this.props.currentDate} />
        <CalendarBody currentDate={this.props.currentDate} departmentTeams={this.props.departmentTeams} />
      </table>
    );
  }
}
