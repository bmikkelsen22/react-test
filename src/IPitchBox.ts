import { PitcherProps } from './components/pitcher'

export interface IPitchBox {
    name: string;
    amount: number;
    message: string;
    pitchers: PitcherProps[];
    category: ExpenseCategory
}

export enum ExpenseCategory {
    utilities = 1,
    groceries = 2,
    other = 3
}