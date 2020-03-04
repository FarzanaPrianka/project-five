import React, { Component } from 'react';
import * as firebase from 'firebase';

class BirthdayLogsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
            day: ''
        }
    }

    onChangeHandler(evt, key) {
        this.setState({
            [key]: evt.target.value
        })
    }

    createBirthdayLog = () => {
        if (this.state.person !== "" && this.state.day !== "") {
            firebase.database().ref('birthdayLogs').push({
                person: this.state.person,
                day: this.state.day
            })
        }

        else { alert("Plese enter the name and birthday to make the log") }

    }
    render() {
        return (
            <section className="birthdayLogForm">
                <div className="form-group">
                    <label htmlFor="birthdayLogForm-person">Who's Birthday??</label>
                    <input
                        type="text"
                        id="birthdayLogForm-person"
                        name="birthdayLogForm-person"
                        value={this.state.person}
                        placeholder="i.e.Dad"
                        onChange={(evt) => this.onChangeHandler(evt, 'person')} />
                </div>
                <div className="form-group">
                    <label htmlFor="birthdayLogForm-day">When is the Birthday?</label>
                    <input
                        type="text"
                        id="birthdayLogForm-day"
                        name="birthdayLogForm-day"
                        value={this.state.day}
                        placeholder="i.e.January 1st"
                        onChange={(evt) => this.onChangeHandler(evt, 'day')} />
                </div>
                <div className="button-container">
                    <button className="logIt" onClick={this.createBirthdayLog}>Log It!!</button>
                </div>
            </section>
        )
    }
}

export default BirthdayLogsForm;