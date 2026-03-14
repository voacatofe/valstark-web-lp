"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: `
    bg-primary text-white 
    hover:bg-primary-dark 
    active:bg-[#b45309]
    shadow-industrial
    hover:shadow-glow-orange
  `,
    secondary: `
    bg-slate-900 text-white
    hover:bg-slate-800
  `,
    outline: `
    bg-transparent border-2 border-primary
    text-primary
    hover:bg-primary hover:text-white
  `,
    ghost: `
    bg-transparent
    text-slate-700
    hover:bg-slate-100
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            children,
            isLoading = false,
            leftIcon,
            rightIcon,
            fullWidth = false,
            className = "",
            disabled,
            type = "button",
            onClick,
        },
        ref
    ) => {
        const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-display font-bold uppercase tracking-wide
      rounded-full
      transition-all duration-200 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `;

        return (
            <motion.button
                ref={ref}
                type={type}
                className={baseStyles}
                disabled={disabled || isLoading}
                onClick={onClick}
                whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
                whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
                transition={{ duration: 0.15 }}
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    leftIcon
                )}
                {children}
                {!isLoading && rightIcon && (
                    <span
                        className={
                            variant === "primary"
                                ? "group-hover:translate-x-1 transition-transform"
                                : ""
                        }
                    >
                        {rightIcon}
                    </span>
                )}
                {!isLoading && !rightIcon && variant === "primary" && (
                    <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform" />
                )}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
