import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    disabled?: boolean;
    btnType?: "button" | "submit" | "reset";
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}