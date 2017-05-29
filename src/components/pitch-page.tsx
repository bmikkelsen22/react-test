import * as React from 'react';
import { PitchBoxProps, PitchBox } from './pitchbox';
import { AddExpenseModal } from './add-expense-modal';
interface IPitchPageState {
    addModalVisible: boolean;
}

export class PitchPage extends React.Component<undefined, IPitchPageState> {
    constructor() {
        super()
        this.state = {
            addModalVisible: false
        }
    }

    toggleAddModalVisible = () => {
        const newState = {
            ...this.state,
            addModalVisible: !this.state.addModalVisible
        }
        this.setState(newState);
    }

    addPitch = (pitchBox: PitchBoxProps) => {
        //TODO: post back to API, update state
        this.toggleAddModalVisible();
    }

    //test data: 
    pitchers = [ {
            name: "Daniel Grocki",
            amount: 4.20
        }, {
            name: "Zoe Stein-Hansen",
            amount: 3.30
        }
    ];

    render() {
        return(
            <div> 
                <AddExpenseModal onCancel={this.toggleAddModalVisible} onSubmit={this.addPitch} visible={this.state.addModalVisible} />
                <PitchBox amount={23.34} message="Give me money!" name="Brooks" pitchers={this.pitchers}/>
                
                <button onClick={this.toggleAddModalVisible} className="button button-highlighted">Add an expense...</button>
            </div>
        );
    }
}