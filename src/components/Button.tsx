import clsx from "clsx";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  height: "default" | "small";
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  variant,
  height,
  label,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "text-center rounded-lg w-full text-primary px-2",
        variant === "primary" && !disabled ? "bg-yellow text-dark-light" : "",
        variant === "primary" && disabled
          ? "bg-yellow-dimmed text-dark-light"
          : "",
        height === "default" ? "py-[16px]" : "pt-[12px] pb-[11px]",
        variant === "secondary" ? "bg-dark-light text-white" : ""
      )}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
