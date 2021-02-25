import { Component } from 'react';
import changeModalVis from '../../utils/changeModalVis/changeModalVis';

export default class AddVacationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: null,
      selectedUser: null,
    };
  }

  handleTeamChange = (e) => {
    this.setState({
      selectedTeam: e.target.value,
      selectedUser: null,
    });
    document.querySelector('.modal__dropdown--user').value = 'User Name';
  };

  handleUserChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="modal__overlay"></div>
        <div className="modal">
          <div className="modal__header">
            <div className="modal__name">Vacation Request</div>
            <div className="modal__days">8 Days</div>
          </div>
          <div className="modal__body">
            <div className="modal__title">Dates</div>
            <div className="modal_dates_inner">
              <div className="modal__column">
                <div className="modal__subtitle">From</div>
                <input
                  type="date"
                  className="modal__date modal__date-start"
                  placeholder="15.06.2020"
                ></input>
              </div>
              <div className="modal__column">
                <div className="modal__subtitle">To</div>

                <input
                  type="date"
                  className="modal__date modal__date-end"
                  placeholder="18.06.2020"
                ></input>
              </div>
            </div>

            <div className="modal__title modal__title--team">Team</div>
            <select
              className="modal__dropdown modal__dropdown--team"
              onChange={this.handleTeamChange}
              defaultValue="Team Name"
            >
              <option disabled>Team Name</option>
              {this.props.departmentTeams.teams.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>

            <div className="modal__title modal__title--user">User</div>
            <select
              className="modal__dropdown modal__dropdown--user"
              defaultValue="User Name"
              onChange={this.handleUserChange}
            >
              <option disabled>User Name</option>
              {this.props.departmentTeams.teams.map(
                (item) =>
                  this.state.selectedTeam !== null &&
                  item.name === this.state.selectedTeam &&
                  item.members.map((member) => (
                    <option key={member.name}>{member.name}</option>
                  ))
              )}
            </select>

            <div className="modal__title modal__title--vac-type">Vac Type</div>
            <select className="modal__dropdown modal__dropdown--vac-type">
              <option>Paid</option>
              <option>UnPaid</option>
            </select>

            <div className="modal__footer">
              <div
                className="modal__btn modal__btn-cancel"
                onClick={changeModalVis}
              >
                Cancel
              </div>
              <div
                className="modal__btn modal__btn-send modal__btn-green"
                onClick={changeModalVis}
              >
                Send
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
