import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Post from './component/post'



class App extends Component {
  render() {
		return (  
    <Switch>
          <Route exact path="/" component={Post}/>
        </Switch>
  );
}
}


export default App;
