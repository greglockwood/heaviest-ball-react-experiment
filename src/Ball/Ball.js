// @flow

import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
    props:{index: number, heaviest?: boolean, onClick?: (index: number) => void};
    onClick = () => {
        if (!this.props.onClick) return;
        this.props.onClick(this.props.index);
    };
    render() {
        return (
            <div className={`Ball ${this.props.heaviest ? 'heaviest' : ''}`} onClick={this.onClick}>
                {this.props.index}
            </div>
        );
    }
}

export default Ball;
