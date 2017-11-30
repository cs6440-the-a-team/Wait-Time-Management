import Promise from "promise-polyfill"
import "babel-polyfill";

if (!window.Promise) {
    window.Promise = Promise;
}

import React from "react"
import ReactDOM from "react-dom"
import moment from "moment"
import Clock from "react-live-clock"

import LoadingIndicator from "./components/loading-indicator"
import Message from "./components/message"

import {minutesSince, formatTime} from "./utils/time-helper"

import config from "../config"

import "whatwg-fetch"

let ENDPOINT = window.location.origin + config.root_path + "/api";

class PublicApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            error: null,
            data: []
        }

        this.pollingInterval = null;
    }

    componentDidMount() {
        this.getPatientDataFromApi();
        this.pollingInterval = setInterval(this.getPatientDataFromApi, 1000 * 60); // Update every 60 seconds
    }

    componentWillUnmount() {
        clearInterval(this.pollingInterval);
    }

    getPatientDataFromApi = () => {
        this.setState({
            loading: true
        });
        fetch(ENDPOINT + "/waitingroom").then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error("Failed to get data. Status: (" + response.status + ") " + response.statusText);
        }).then((data) => {
            this.setState({
                data: data.patients,
                loading: false
            });
        }, (error) => {
            this.setState({
                error: error,
                loading: false
            });
        }).catch((error) => {
            this.setState({
                error: error,
                loading: false
            });
        })
    }

    handleErrorDismiss = () => {
        this.setState({
            error: null
        });
    }

    renderError() {
        if (this.state.error) {
            return (
                <div style={{position: 'absolute', top: 25, right: 25, width: 350}}>
                    <Message id="error-message" onClose={this.handleErrorDismiss} type="error">
                        {this.state.error.toString()}
                    </Message>
                </div>
            )
        }
        return null;
    }

    renderRows() {
        if (this.state.data.length > 0) {
            return this.state.data.map(function(patientData) {
                return (
                    <PatientDataRow key={patientData.patient_id} 
                                    patientId={patientData.patient_id} 
                                    status={patientData.status} 
                                    startTime={patientData.start_time} 
                                    location={patientData.location} />
                )
            });
        }

        return (
            <tr>
                <td colSpan={4}>
                    No data yet...
                </td>
            </tr>
        )
    }

    render() {

        return (
            <div className="app-wrapper">
                <div className="container-fluid">
                    <h3 className="display-4">Patient Statuses</h3>
                </div>
                <hr />
                <LoadingIndicator active={this.state.loading} />
                <div className="container-fluid">
                    <div className="float-right">
                        <p><strong>Current Time: </strong>&nbsp;&nbsp;<Clock format={'h:mm a'} className="float-right" /></p>
                    </div>

                    {this.renderError()}

                    <p>Please contact the front desk if you have any questions.</p>
                    <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Status</th>
                            <th>Time Elapsed</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const PatientDataRow = ({patientId, status, startTime, location}) => {
    return (
        <tr>
            <td>{patientId}</td>
            <td>{status}</td>
            <td>{startTime && formatTime({minutes: minutesSince(startTime)})}</td>
            <td>{location}</td>
        </tr>
    );
}

ReactDOM.render(
    <PublicApp/>,
    document.getElementById('public-app')
);