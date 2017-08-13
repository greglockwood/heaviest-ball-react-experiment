// @flow

import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
    props: {
        balls: Array<{index: number, heaviest?: boolean}>,
        left: Array<number>,
        right: Array<number>,
        balance: number
    };
    balanceClass() {
        const { balance } = this.props;
        if (balance < 0) return 'tilt-left';
        else if (balance > 0) return 'tilt-right';
        return '';
    }
    render () {
        return (
            <div className={`balance ${this.balanceClass()}`}>
                <div className="basket left-basket">
                    {this.renderBalls('left')}
                </div>
                <div className="basket right-basket">
                    {this.renderBalls('right')}
                </div>
                <div className="beam"></div>
                <div className="fulcrum"></div>
            </div>
        );
    }
    renderBalls(side: string) {
        return this.props[side].map(index => {
            const ball = this.props.balls[index];
            return (
                <div className={`ball ${ball && ball.heaviest ? 'heaviest' : ''}`}>{index}</div>
            );
        });
    }
}

export default Step;
