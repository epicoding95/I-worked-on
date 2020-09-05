import React from "react";
import MyCalendar from "./Components/Calendar/Calendar";
import "./App.css";
import InputForm from "./Components/InputForm/InputForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CalendarContainer from "./Components/CalendarContainer/CalendarContainer";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/calendar" component={CalendarContainer} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
