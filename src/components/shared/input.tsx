import type React from "react";
import { cn } from "~/utils/cn";

export const Input = ({ className, ...props }: React.ComponentProps<"input">) => {
	return (
		<input
			className={cn(
				"block w-full rounded-md border-0 py-1.5 text-background shadow-sm ring-1 ring-inset ring-ring placeholder:text-muted focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
			)}
			{...props}
		/>
	);
};
