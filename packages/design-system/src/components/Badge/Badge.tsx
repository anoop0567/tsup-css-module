import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import styles from "./Badge.module.css";

const badgeVariants = cva(styles.badge, {
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

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  const badgeClass = badgeVariants({
    variant: props.variant,
  });

  return <span className={badgeClass}>{children}</span>;
};
