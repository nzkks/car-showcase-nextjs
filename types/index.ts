import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  disabled?: boolean;
  btnType?: 'button' | 'submit' | 'reset';
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
}
