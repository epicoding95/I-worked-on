import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { firestore } from "firebase";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal/Modal";
import { withRouter } from "react-router-dom";
const localizer = momentLocalizer(moment);
/* eslint-disable */
class MyCalendar extends Component {
  state = {
    events: [],
    showModal: false,
    currentEvent: null
  };
  handleSelectedEvent = event => {
    this.setState({
      showModal: true,
      currentEvent: event
    });
  };

  componentDidUpdate(prevProps) {
    const { fireStoreData } = this.props;
    const loggedInUser = this.props.location.state;
    const filteredData = [];
    if (prevProps.fireStoreData.length !== fireStoreData.length) {
      const filtered = fireStoreData.forEach(data => {
        if (data.userName === loggedInUser) {
          const newData = {
            ...data,
            id: uuidv4(),
            start: new Date(data.start?.seconds * 1000),
            end: new Date(data.end?.seconds * 1000)
          };
          filteredData.push(newData);
        }
      });
      this.setState({ events: filteredData });
    }
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="MyCalendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "70vh", width: "70vw", margin: "0 auto" }}
          onSelectEvent={this.handleSelectedEvent}
        />
        {this.state.showModal && (
          <Modal
            currentEvent={this.state.currentEvent}
            closeModal={() => this.setState({ showModal: false })}
          />
        )}
      </div>
    );
  }
}

export default withRouter(MyCalendar);
