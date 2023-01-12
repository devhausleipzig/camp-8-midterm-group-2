import clsx from "clsx";
import React from "react";


interface ButtonProps {

  type: "primary" | "secondary";
  height: "default" | "small"
  label: string;
  onClick: (event: React.FormEvent<any>) => void;
  disabled: boolean; //state
}

function Button({
  type, height, label, disabled
}:
ButtonProps){
  const button = (
    <button
      type="button"
      className=


      {clsx(
        'text-center rounded-lg w-full text-primary',
        (type === "primary" && disabled === false)? 'bg-yellow text-dark-light' : '',
        (type ==="primary" && disabled === true)? 'bg-yellow-dimmed text-dark-light' : '',
        (height === "default")? 'py-[16px]':'pt-[12px] pb-[11px]',
        (type === "secondary")? 'bg-dark-light text-white':'')}
    >
      {label}
    </button>
  );
  return button;
};

export default Button;


////EXAMPLE HOW TO USE CLSX
{/* <button className={clsx(classNameOne, { [classNameTwo]: number > 5 })}>
A sample button
//LINK my props to css Classes -> we will use it in Button.stories.tsx
// style={{}} */}