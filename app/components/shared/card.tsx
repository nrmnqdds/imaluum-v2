import React from "react";
import { cn } from "~/utils/cn";

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl border border-border bg-background p-4",
        className
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	);
});

export default Card;
