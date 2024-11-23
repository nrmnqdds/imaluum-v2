// import ProfileDropdown from "~/components/shared/profile-dropdown";
import { ThemeSwitcher } from "~/components/shared/theme-switcher";
import toast from "react-hot-toast";
import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import {
	Bars3Icon,
	CalendarIcon,
	FlagIcon,
	HomeIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Image } from "@unpic/react";
import { useRouterState, useRouter } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { cn } from "~/utils/cn";
import { Button } from "./button";
import { handleLogout } from "~/actions/logout";
import { useQueryClient } from "@tanstack/react-query";
// import Clock from "./clock";

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: HomeIcon, disabled: false },
	{
		name: "Class Timetable",
		href: "/schedule",
		icon: CalendarIcon,
		disabled: false,
	},
	{ name: "Exam Results", href: "/result", icon: FlagIcon, disabled: true },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
	const _router = useRouterState();
	const router = useRouter();
	const queryClient = useQueryClient();

	const pathname = _router.location.pathname;

	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

	return (
		<div>
			<Transition show={sidebarOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50 lg:hidden"
					onClose={setSidebarOpen}
				>
					<TransitionChild
						as={Fragment}
						enter="transition-opacity ease-linear duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity ease-linear duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-900/80" />
					</TransitionChild>

					<div className="fixed inset-0 flex">
						<TransitionChild
							as={Fragment}
							enter="transition ease-in-out duration-300 transform"
							enterFrom="-translate-x-full"
							enterTo="translate-x-0"
							leave="transition ease-in-out duration-300 transform"
							leaveFrom="translate-x-0"
							leaveTo="-translate-x-full"
						>
							<DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
								<TransitionChild
									as={Fragment}
									enter="ease-in-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in-out duration-300"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
										<button
											type="button"
											className="-m-2.5 p-2.5"
											onClick={() => setSidebarOpen(false)}
										>
											<span className="sr-only">Close sidebar</span>
											<XMarkIcon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</button>
									</div>
								</TransitionChild>
								{/* Sidebar component, swap this element with another sidebar if you like */}
								<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4">
									<div className="flex h-32 shrink-0 items-center justify-center">
										<Image
											width={64}
											height={64}
											className="object-contain"
											src="/logo-landing-page.png"
											alt="Your Company"
										/>
									</div>
									<nav className="flex flex-1 flex-col">
										<ul className="flex flex-1 flex-col gap-y-7">
											<li>
												<ul className="-mx-2 space-y-1">
													{navigation.map((item) => (
														<li key={item.name}>
															<a
																href={item.disabled ? "#" : item.href}
																className={cn(
																	pathname === item.href
																		? "bg-gray-50 text-primary"
																		: "text-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-zinc-800",
																	item.disabled &&
																		"opacity-50 cursor-not-allowed",
																	"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
																)}
															>
																<item.icon
																	className={cn(
																		pathname === item.href
																			? "text-primary"
																			: "text-accent group-hover:text-primary",
																		"h-6 w-6 shrink-0",
																	)}
																	aria-hidden="true"
																/>
																{item.name}
															</a>
														</li>
													))}
												</ul>
											</li>
											<li className="mt-auto">
												<div className="flex flex-col w-full items-center justify-center gap-5">
													<ThemeSwitcher />
													<Button
														className="bg-red-400 hover:bg-red-500 border border-red-600 text-foreground w-full"
														onClick={async () => {
															await handleLogout();
															queryClient.clear();
															toast.success("Logged out successfully");
															router.navigate({
																to: "/",
															});
														}}
													>
														<span>Logout</span>
													</Button>
												</div>
											</li>
										</ul>
									</nav>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>

			{/* Static sidebar for desktop */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4">
					<div className="flex h-32 shrink-0 items-center justify-center">
						<Image
							width={64}
							height={64}
							className="object-contain"
							src="/logo-landing-page.png"
							alt="Your Company"
						/>
					</div>
					<nav className="flex flex-1 flex-col">
						<ul className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<li key={item.name}>
											<button
												type="button"
												onClick={() =>
													router.navigate({
														to: item.href,
													})
												}
												disabled={item.disabled}
												className={cn(
													pathname === item.href
														? "bg-secondary text-primary"
														: "text-foreground hover:text-primary hover:bg-accent",
													item.disabled &&
														"opacity-50 cursor-not-allowed hover:bg-transparent hover:text-foreground",
													"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full",
												)}
											>
												<item.icon
													className={cn(
														pathname === item.href
															? "text-primary"
															: "text-accent group-hover:text-primary",
														item.disabled && "group-hover:text-accent",
														"h-6 w-6 shrink-0",
													)}
													aria-hidden="true"
												/>
												{item.name}
												{item.name === "Class Timetable" && (
													<span className="ml-auto animate-pulse rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-red-200">
														HOT
													</span>
												)}
											</button>
										</li>
									))}
								</ul>
							</li>
							<li className="mt-auto">
								<div className="flex flex-col w-full items-center justify-center gap-5">
									<ThemeSwitcher />
									<Button
										className="bg-red-400 hover:bg-red-500 border border-red-600 text-foreground w-full"
										onClick={async () => {
											await handleLogout();
											queryClient.clear();
											toast.success("Logged out successfully");
											router.navigate({
												to: "/",
											});
										}}
									>
										<span>Logout</span>
									</Button>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="fixed top-10 right-10 z-40 lg:hidden">
				<button
					type="button"
					onClick={() => setSidebarOpen(true)}
					className="-m-2.5 p-2.5 text-indigo-200 lg:hidden"
				>
					<span className="sr-only">Open sidebar</span>
					<Bars3Icon aria-hidden="true" className="size-10" />
				</button>
			</div>
			<main className="bg-card scrollbar-hide lg:overflow-x-hidden lg:pl-72 overscroll-y-none">
				{children}
			</main>
		</div>
	);
}
