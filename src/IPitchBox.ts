import { PitcherProps } from './components/pitcher'

export interface IPitchBox {
    name: string;
    amount: number;
    message: string;
    pitchers: PitcherProps[];
    category: ExpenseCategory
}

export enum ExpenseCategory {
    Utilities = 0,
    Groceries = 1,
    Other = 2
}