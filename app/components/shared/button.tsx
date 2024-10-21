import React from "react";
import { cn } from "~/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, children, ...props }, ref) => {
		return (
			<button
				type="button"
				className={cn(
					"rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		);
	},
);

export { Button };
