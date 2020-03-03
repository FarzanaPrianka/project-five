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

    }


    render() {
        return (
            <section className="birthdayLogForm">
                <h3>
                    Create New Log
                </h3>
                <div className="form-group">
                    <label htmlFor="birthdayLogForm-person">Name</label>
                    <input
                        type="text"
                        id="birthdayLogForm-person"
                        name="birthdayLogForm-person"
                        value={this.state.person}
                        onChange={(evt) => this.onChangeHandler(evt, 'person')} />

                </div>
                <div className="form-group">

                    <label htmlFor="birthdayLogForm-day">date</label>
                    <input
                        type="text"
                        id="birthdayLogForm-day"
                        name="birthdayLogForm-day"
                        value={this.state.day}
                        onChange={(evt) => this.onChangeHandler(evt, 'day')} />
                </div>
                <button onClick={this.createBirthdayLog}>Enter Birthday</button>
            </section>
        )
    }
}

export default BirthdayLogsForm;