import React, { Component } from 'react';
// import MainPage from './components/mainPage';
import './styles/css/style.min.css'
import RouteComponent from './routes';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicantId: ''
    }
  }

  setApplicantId = (applicantId) => {
    this.setState({
      applicantId
    })
  }

  render() {
    return (
      <RouteComponent
        applicantId={this.state.applicantId}
        setApplicantId={this.setApplicantId}
      />
    );
  }
}

export default App;
