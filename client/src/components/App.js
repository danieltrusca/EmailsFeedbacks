import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

//redux components
import  * as actions from "../actions/index";
import {connect} from "react-redux";

//components
import Header from "./Header";
import Landing from "./Landing";



const Dashboard=()=><h2>Dashboard</h2>
const SurveyNew=()=><h2>SurveyNew</h2>


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <div className="container" >
          <BrowserRouter>
          <div>
              <Header />
              <Route path="/" exact component={Landing} />
              <Route path="/surveys" exact component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
             
          </BrowserRouter>
      </div>
    );
  }
  
}

export default connect(null, actions)(App);