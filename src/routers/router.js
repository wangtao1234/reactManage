import React,{Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

class CRouter extends Component{
  render(){
    return(
      <Switch>
        <Route exact path="/app/dashborad/index" component={Dashboard}></Route>
        <Route exact path="/app/form/baseForm" component={BasicForm}></Route>
        <Route exact path="/app/dashborad/basicTable" component={BasicTable}></Route>
        <Route exact path="/app/dashborad/advancedTable" component={AdvancedTable}></Route>
        <Route exact path="/app/dashborad/asynchronousTable" component={AsynchronousTable}></Route>
      </Switch>
    )
  }
}
