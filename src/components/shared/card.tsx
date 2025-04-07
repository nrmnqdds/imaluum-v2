import type React from "react";
import { cn } from "~/utils/cn";

export const Card = ({
	children,
	className,
	...props
}: React.ComponentProps<"div">) => {
	return (
		<div
			className={cn(
				"row-span-1 rounded-xl border border-border bg-background p-4",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};
