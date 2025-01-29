import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./Button.module.css";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = ({
  variant,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    console.log(buttonVariants()),
    (
      <button
        className={buttonVariants({ variant, className })}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  );
};
