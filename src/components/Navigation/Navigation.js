import { Component } from 'react';

const NavButton = ({ modifier, ClickAction }) => {
  return (
    <button
      className={
        'calendar-bar__control-button calendar-bar__control-button--' + modifier
      }
      onClick={ClickAction}
    ></button>
  );
};

export default class Navigation extends Component {
  constructor({ date }) {
    super();

    this.state = {
      currentDate: date,
    };
  }

  prevMonth = () => {
    this.setState({
      currentDate: new Date(
        this.state.currentDate.getFullYear(),
        this.state.currentDate.getMonth() - 1
      ),
    });
  };

  nextMonth = () => {
    this.setState({
      currentDate: new Date(
        this.state.currentDate.getFullYear(),
        this.state.currentDate.getMonth() + 1
      ),
    });
  };

  render() {
    return (
      <div className="calendar-bar">
        <NavButton modifier="prev" ClickAction={this.prevMonth} />
        <h2 className="calendar-bar__header">
          {this.state.currentDate.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <NavButton modifier="next" ClickAction={this.nextMonth} />
      </div>
    );
  }
}
