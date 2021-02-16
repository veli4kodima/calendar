import './index.scss';
import Navigation from './components/Navigation/Navigation';
import { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }
  render() {
    return <Navigation date={this.state.currentDate} />;
  }
}

export default App;
