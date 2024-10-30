import React from "react";
import { cn } from "~/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <input
        placeholder={placeholder}
        className={cn(
          "block w-full rounded-md border-0 py-1.5 text-background shadow-sm ring-1 ring-inset ring-ring placeholder:text-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Input };
