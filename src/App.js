// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import BallList from './BallList';
import Step from './Step';
import range from './lib/range';
import findHeaviest from './lib/find-heaviest';
import './App.css';

function makeBalls(count: number, heaviest: number) {
    return range(count).map(index => ({index, heaviest: index === heaviest}));
}

function run(count: number, heaviest: number) {
    const balls = makeBalls(count, heaviest);
    const weights = balls.map(({ heaviest }) => heaviest ? 11 : 10);
    return { balls, steps: findHeaviest(weights).steps };
}

class App extends Component {
  state = {
    ballCount: 8,
    heaviest: 0,
    ...run(8, 0)
  };
  changeCount = (event: SyntheticInputEvent & { target: RangeInput }) => {
    const ballCount = parseInt(event.target.value, 10);
    this.setState(state => {
      return {
        ...state,
        ballCount,
        ...run(ballCount, state.heaviest)
      }
    });
  };
    setHeaviest = (index: number) => {
    this.setState(state => {
        return {
            ...state,
            heaviest: index,
            ...run(state.ballCount, index)
        };
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
            {/* <!-- <img src={logo} className="App-logo" alt="logo" /> --> */}
          <h2>Ball Weighing Problem</h2>
        </div>
        <input type='range' min='1' max='8' onChange={this.changeCount} value={this.state.ballCount} />
        <div className='App-body'>
          <BallList balls={this.state.balls} onBallClick={this.setHeaviest}/>
            <div className='StepList'>
                {this.state.steps.map(step => {
                    return (
                        <Step balls={this.state.balls} left={step.left} right={step.right} balance={step.balance} />
                    );
                })}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
