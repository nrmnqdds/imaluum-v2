import React from "react";
import { cn } from "~/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, placeholder, ...props }, ref) => {
		return (
			<input
				placeholder={placeholder}
				className={cn(
					"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

export { Input };
