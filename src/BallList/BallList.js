// @flow

import React, { Component } from 'react';
import Ball from '../Ball';

class BallList extends Component {
    props:{ balls: Array<{ index: number, heaviest?: boolean}>, onBallClick?: (index: number) => void };

    onBallClick = (index: number) => {
        if (!this.props.onBallClick) return;
        this.props.onBallClick(index);
    };

    render() {
        return (
            <div className='BallList'>
                {this.props.balls.map(({ index, heaviest }) => (
                    <Ball index={index} heaviest={heaviest} key={index}
                          onClick={this.onBallClick}/>
                ))}
            </div>
        );
    }
}

export default BallList;