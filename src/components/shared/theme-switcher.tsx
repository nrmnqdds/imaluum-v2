import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import type React from "react";
import { useTheme } from "~/components/providers/theme-provider";
import { cn } from "~/utils/cn";

export const ThemeSwitcher = ({
	className,
	...props
}: React.ComponentProps<"button">) => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			name="theme-switcher"
			type="button"
			className={cn(
				"size-8 hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200",
				className,
			)}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			{...props}
		>
			{theme === "light" ? <MoonIcon /> : <SunIcon />}
		</button>
	);
};
