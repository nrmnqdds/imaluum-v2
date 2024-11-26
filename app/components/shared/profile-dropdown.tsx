import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import useProfile from "~/hooks/use-profile";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { Image } from "@unpic/react";
import { handleLogout } from "~/actions/logout";

export default function ProfileDropdown() {
	const { profile } = useProfile();

	const queryClient = useQueryClient();

	const router = useRouter();

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<MenuButton className="flex items-center justify-center flex-row-reverse gap-2">
					<Image
						alt="profile pic"
						// src={`data:image/jpeg;base64,${btoa(profile.image_url)}`}
						src={profile.image_url}
						width={40}
						height={40}
						className="inline-block rounded-full"
					/>
					<span className="hidden md:flex lg:items-center">
						<span
							className="text-sm font-semibold leading-6 text-foreground"
							aria-hidden="true"
						>
							{profile?.name}
						</span>
					</span>
				</MenuButton>
			</div>

			<MenuItems
				transition
				className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="py-1">
					<MenuItem>
						<button
							type="submit"
							className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
							onClick={async () => {
								await handleLogout();
								queryClient.clear();
								toast.success("Logged out successfully");
								router.navigate({
									to: "/",
								});
							}}
						>
							Sign out
						</button>
					</MenuItem>
				</div>
			</MenuItems>
		</Menu>
	);
}
