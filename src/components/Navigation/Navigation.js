import { Component } from 'react';

const NavButton = ({ modifier, ClickAction }) => {
  return (
    <button
      className={
        'calendar-bar__control-button calendar-bar__control-button--' + modifier
      }
      onClick={() => {
        ClickAction();
      }}
    ></button>
  );
};

export default class Navigation extends Component {
  render() {
    return (
      <div className="calendar-bar">
        <NavButton modifier="prev" ClickAction={this.props.prevMonth} />
        <h2 className="calendar-bar__header">
          {this.props.date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <NavButton modifier="next" ClickAction={this.props.nextMonth} />
      </div>
    );
  }
}
