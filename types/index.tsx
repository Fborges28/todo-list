export interface IForm {
  city: string;
  age: string;
  name: string;
}

export type ButtonType = "button" | "submit" | "reset" | undefined;

export interface InputProps {
  value?: string;
  name: string;
  id: string;
  placeholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
}

export interface ITodoItem {
  id: number;
  label: string;
  completed: boolean;
}
