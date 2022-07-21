import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from "react-redux";
import {requestRobots, setSearchField} from "../actions";

class App extends Component {

  componentDidMount() {
      debugger;
    this.props.onRequestRobots()
  }

  render() {
    const {searchField, onSearchChange, robots, isPending, error} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

function mapStateToProps(state) {
    console.log(state);
 return {
     searchField: state[0].searchField,
     robots: state[1].robots,
     isPending: state[1].isPending,
     error: state[1].error,
 }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);