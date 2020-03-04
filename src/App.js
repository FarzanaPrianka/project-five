import React, { Component } from 'react';
import * as firebase from 'firebase';
import Header from './components/Header';
import BirthdayLogsForm from './components/BirthdayLogsForm';
import BirthdayLogs from './components/BirthdayLogs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      birthdayLogs: []
    }
  }
  componentDidMount() {
    this.db = firebase.database();
    this.listenForChange();
  }
  listenForChange = () => {
    this.db.ref('birthdayLogs').on('child_added', snapshot => {
      let birthdayLog = {
        id: snapshot.key,
        person: snapshot.val().person,
        day: snapshot.val().day
      }
      let birthdayLogs = this.state.birthdayLogs;
      birthdayLogs.push(birthdayLog);

      this.setState({
        birthdayLogs: birthdayLogs

      });
    });

    this.db.ref('birthdayLogs').on('child_removed', snapshot => {

      let birthdayLogs = this.state.birthdayLogs;
      birthdayLogs = birthdayLogs.filter(birthdayLog => birthdayLog.id !== snapshot.key);

      this.setState({
        birthdayLogs: birthdayLogs
      });

    });
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <BirthdayLogsForm />
          <BirthdayLogs birthdayLogs={this.state.birthdayLogs} />
        </main>
      </div>
    );
  }

}

export default App;
