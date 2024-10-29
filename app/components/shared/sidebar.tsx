import ProfileDropdown from "~/components/shared/profile-dropdown";
import { ThemeSwitcher } from "~/components/shared/theme-switcher";
import LOGO from "~/assets/logo-landing-page.png";
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
import Clock from "./clock";

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: HomeIcon },
	{ name: "Class Timetable", href: "/schedule", icon: CalendarIcon },
	{ name: "Exam Results", href: "/result", icon: FlagIcon },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
	const _router = useRouterState();
	const router = useRouter();

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
											src={LOGO}
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
																href={item.href}
																className={cn(
																	pathname === item.href
																		? "bg-gray-50 text-primary"
																		: "text-gray-700 hover:text-primary hover:bg-gray-50 dark:hover:bg-zinc-800",
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
							src={LOGO}
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
												className={cn(
													pathname === item.href
														? "bg-secondary text-primary"
														: "text-foreground hover:text-primary hover:bg-accent",
													"group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold w-full",
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
												{item.name === "Class Timetable" && (
													<span className="ml-auto text-xs font-semibold bg-red-500 text-red-200 animate-pulse rounded-full px-3 py-1">
														HOT
													</span>
												)}
											</button>
										</li>
									))}
								</ul>
							</li>
							<li className="mt-auto">
								<div className="w-full flex items-center justify-center">
									<ThemeSwitcher />
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			<div className="lg:pl-72">
				<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-card px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
					<button
						type="button"
						className="-m-2.5 p-2.5 text-foreground lg:hidden"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>

					{/* Separator */}
					<div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

					<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
						<Clock />
						<div className="flex items-center gap-x-4 lg:gap-x-6">
							{/* Separator */}
							<div
								className="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-600"
								aria-hidden="true"
							/>

							{/* Profile dropdown */}
							<ProfileDropdown />
						</div>
					</div>
				</div>

				<main className="lg:overflow-x-hidden bg-card scrollbar-hide">
					{children}
				</main>
			</div>
		</div>
	);
}
