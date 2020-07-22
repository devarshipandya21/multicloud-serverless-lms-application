import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NavigationBar from "./components/NavigationBar";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentDashboard";
import CourseStartPage from "./components/CourseStartPage";
import SetProfilePage from "./components/SetProfilePage"

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/student-dashboard" component={StudentDashboard} />
          <Route path="/course-page" component={CourseStartPage} />
          <Route path="/set-profile" component={SetProfilePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
