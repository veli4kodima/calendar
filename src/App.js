import { Component } from 'react';

import './index.scss';
import Navigation from './components/Navigation/Navigation';
import Table from './components/Table/Table';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
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
      <div className="calendar">
        <Navigation
          date={this.state.currentDate}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
        <Table />
      </div>
    );
  }
}
