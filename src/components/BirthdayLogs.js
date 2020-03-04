import React, { Component } from 'react';
import * as firebase from 'firebase';

class BirthdayLogs extends Component {
    constructor(props) {
        super(props);
    }

    removeBirthdayLog = (id) => {

        firebase.database().ref('birthdayLogs').child(id).remove();

    }
    render() {
        return (
            <section className="birthdayLogs-wrapper">
                <div className="birthdayLogs">
                    {this.props.birthdayLogs.map(birthdayLog => (
                        <div className="birthdayLog" key={birthdayLog.id}>
                            <div className="birthdayLog-person">
                                <h3>{birthdayLog.person}</h3>
                                <div className="remove" onClick={() => this.removeBirthdayLog(birthdayLog.id)}>X</div>
                            </div>
                            <div className="birthdayLog-content">
                                <p>{birthdayLog.day}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
export default BirthdayLogs;