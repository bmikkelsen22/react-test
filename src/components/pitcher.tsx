import * as React from 'react';

export interface PitcherProps {
    name: string;
    amount: number;
}

export class Pitcher extends React.Component<PitcherProps, undefined> {
    render() {
        return (
            <span className="pitch-box-pitcher">
                <span className="pitcher-amount">
                    ${this.props.amount.toFixed(2)}
                </span>
                <span className="pitcher-name">
                    {this.props.name}
                </span>
            </span>
        );
    }
}