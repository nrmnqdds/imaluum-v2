import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import React from "react";
import { cn } from "~/utils/cn";

type ThemeSwitcherProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ThemeSwitcher = React.forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
	({ className }, ref) => {
		const { theme, setTheme } = useTheme();

		return (
			<button
				name="theme-switcher"
				type="button"
				className={cn(
					"w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 text-zinc-900 dark:text-slate-200 text-2xl font-bold",
					className,
				)}
				ref={ref}
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				{theme === "light" ? <MoonIcon /> : <SunIcon />}
			</button>
		);
	},
);

export { ThemeSwitcher };
