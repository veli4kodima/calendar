import { Component } from 'react';

import './index.scss';
import Navigation from './components/Navigation/Navigation';
import Table from './components/Table/Table';
import renderTeams from './utils/renderTeams/renderTeams';
import AddVacationModal from './components/AddVacationModal/AddVacationModal';

const departmentTeams = renderTeams();

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
        <Table
          currentDate={this.state.currentDate}
          departmentTeams={departmentTeams}
        />

        <AddVacationModal departmentTeams={departmentTeams} />
      </div>
    );
  }
}
