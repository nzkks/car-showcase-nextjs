"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({disabled, btnType, title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <button disabled={disabled} type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton