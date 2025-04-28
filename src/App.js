import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 9;
  state = {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
          height={4}
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
            {/* <Route path="/business"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="business" /> </Route>
            <Route path="/entertainment"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="entertainment" /> </Route>
            <Route path="/general"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="general" /> </Route>
            <Route path="/health"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="health" /> </Route>
            <Route path="/science"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="science" /> </Route>
            <Route path="/sports"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="sports" /> </Route>
            <Route path="/technology"> <News setProgress={this.setProgress}  pageSize={this.pageSize} country="us" category="technology" /> </Route> */}
          </Routes>
        </Router>
      </div>
    );
  }
}
