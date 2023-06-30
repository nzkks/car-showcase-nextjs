'use client';

import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({
  disabled,
  btnType,
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
