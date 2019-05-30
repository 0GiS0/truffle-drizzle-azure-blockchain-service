import React from 'react';
import './App.css';

import Register from "./Register";
import Registries from "./Registries";


class App extends React.Component {

  state = { loading: true, drizzleState: null };


  componentDidMount() {
    const { drizzle } = this.props;

    this.unsubscribe = drizzle.store.subscribe(() => {

      //every time the store updates, save the state from drizzle
      const drizzleState = drizzle.store.getState();

      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <div className="App">

        <Registries
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <Register
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );

  }
}

export default App;
