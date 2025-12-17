import type React from "react";
import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          relative inline-block px-8 py-3 bg-transparent text-white
          transition-all duration-300 hover:text-gray-300 focus:outline-none cursor-pointer
          ${className || ""}`}
        {...props}
      >
        <span className="absolute top-0 left-2 right-2 h-[2px] bg-winered" />
        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-winered" />
        <span className="absolute left-0 top-2 bottom-2 w-[2px] bg-winered" />
        <span className="absolute right-0 top-2 bottom-2 w-[2px] bg-winered" />
        <span className="absolute top-0 left-0 w-2 h-2 bg-transparent border-b-2 border-r-2 border-winered" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-transparent border-b-2 border-l-2 border-winered" />
        <span className="absolute bottom-0 left-0 w-2 h-2 bg-transparent border-t-2 border-r-2 border-winered" />
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-transparent border-t-2 border-l-2 border-winered" />
        <span className="relative text-xl ">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
