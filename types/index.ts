export type expenseCategories =
  | 'food'
  | 'shopping'
  | 'transport'
  | 'home'
  | 'bills'
  | 'entertainment'
  | 'car'
  | 'healthcare';

export type incomeCategories = 'salary' | 'business' | 'gifts' | 'loan';

export interface ITransaction {
  id: number;
  type: 'income' | 'expenses';
  description?: string;
  amount: number;
  created_at: Date;
  category: string;
}

export interface ISms {
  id: number;
  text: string;
  created_at: Date;
  read?: boolean;
}
