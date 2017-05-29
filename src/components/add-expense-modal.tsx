import * as React from 'react';
import { PitchBoxProps } from './pitchbox';
import { IPitchBox, ExpenseCategory } from '../IPitchBox'
import { SegmentButton } from './segment-button';

interface IAddExpenseProps {
    visible: boolean;
    onSubmit(pitchbox: PitchBoxProps): void;
    onCancel(): void;
}

export class AddExpenseModal extends React.Component<IAddExpenseProps, IPitchBox> {
    constructor(props: IAddExpenseProps) {
        super(props);
        this.state = {
            name: "",
            amount: 0,
            message: "",
            pitchers: [],
            category: ExpenseCategory.groceries
        }
    }

    setCategory = (selected: number) => {
        const newState = {
            ...this.state,
            category: selected
        }
        this.setState(newState);
    }

    onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Math.abs(Number(e.currentTarget.value));
        const newState = {
            ...this.state,
            amount: num
        }
        this.setState(newState);
    }

    onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...this.state,
            message: e.currentTarget.value
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className={this.props.visible ? "modal-backdrop" : "hidden"}>
                <div className="modal">
                    <div className="modal-header">
                        Add an expense
                    </div>
                    <div className="modal-main">
                        <div>
                            <SegmentButton onSelect={this.setCategory} segments={['Utilities', 'Groceries', 'Other']}/>
                        </div>
                        <div>
                            Amount: $
                            <input className="input-amount" type="number" onChange={this.onAmountChange} value={this.state.amount}/>
                        </div>
                        <div>
                            <input className="input-message" type="text" onChange={this.onMessageChange} value={this.state.message} placeholder="Message..."/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="button" onClick={this.props.onCancel}>Cancel</button>
                        <button className="button button-highlighted modal-button-add" onClick={() => this.props.onSubmit(this.state)}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}