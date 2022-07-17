import React, { Component } from "react";
import "./App.css";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";

import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
class App extends Component {
  // localData: EventSettingsModel = {
  //   dataSource: [
  //     {
  //       EndTime: new Date(2019, 0, 11, 6, 30),
  //       StartTime: new Date(2019, 0, 11, 4, 0),
  //     },
  //   ],
  // };
  // remoteData = new DataManager({
  //   url: "https://js.syncfustion.com/demos/ejservices/api/Schedule/LoadData",
  //   adaptor: new WebApiAdaptor(),
  //   crossDomain: true,
  // });

  render() {
    return (
      <ScheduleComponent
        currentView="Month"
        selectedDate={new Date(2017, 5, 5)}
        eventSettings={{ dataSource: this.remoteData }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default App;
