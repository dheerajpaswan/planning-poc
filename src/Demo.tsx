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
  DragAndDrop,
  Resize,
  DragEventArgs,
  ResizeEventArgs,
  scroll,
  ScrollOptions,
} from "@syncfusion/ej2-react-schedule";
// import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
class Demo extends Component {
  private localData: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        EndTime: new Date(2022, 1, 11, 6, 30),
        StartTime: new Date(2022, 1, 11, 4, 0),
        Subject: "Game time",
        Staus: "Completed",
        Priority: "High",
      },
      {
        Id: 2,
        EndTime: new Date(2022, 1, 13, 6, 30),
        StartTime: new Date(2022, 1, 13, 4, 0),
        Subject: "Game time",
        Staus: "Completed",
        Priority: "High",
      },
    ],
  };
  // private remoteData = new DataManager({
  //   url: "https://js.syncfustion.com/demos/ejservices/api/Schedule/LoadData",
  //   adaptor: new WebApiAdaptor(),
  //   crossDomain: true,
  // });
  private onDragStart(args: DragEventArgs): void {
    // (args.scroll as ScrollOptions).enable = false;
    // (args.scroll as ScrollOptions).scrollBy = 500;
    args.interval = 10;
  }
  private onResizeStart(args: ResizeEventArgs): void {
    // (args.scroll as ScrollOptions).enable = false;
    // (args.scroll as ScrollOptions).scrollBy = 500;
  }

  render() {
    return (
      <ScheduleComponent
        currentView="Month"
        selectedDate={new Date(2022, 0, 11)}
        eventSettings={this.localData}
        allowResizing={false}
        dragStart={this.onDragStart.bind(this)}
        resizeStart={this.onResizeStart.bind(this)}
        // {{ dataSource: this.remoteData }}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    );
  }
}

export default Demo;
