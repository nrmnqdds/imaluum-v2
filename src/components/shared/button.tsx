import type React from "react";
import { cn } from "~/utils/cn";

export const Button = ({
	className,
	children,
	...props
}: React.ComponentProps<"button">) => {
	return (
		<button
			type="button"
			className={cn(
				"rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:bg-primary/90",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};
