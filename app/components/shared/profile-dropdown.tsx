import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import useProfile from "~/hooks/use-profile";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { deleteCookie } from "vinxi/http";
import toast from "react-hot-toast";
import { Image } from "@unpic/react";
import { createServerFn } from "@tanstack/start";

export default function ProfileDropdown() {
  const { profile } = useProfile();

  const queryClient = useQueryClient();

  const router = useRouter();

  const handleLogout = createServerFn("POST", async () => {
    deleteCookie("MOD_AUTH_CAS");

    return;
  });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="">
          {profile?.image_url ? (
            <Image
              alt="profile pic"
              src={profile.image_url}
              width={40}
              height={40}
              className="inline-block rounded-full"
            />
          ) : (
            <span className="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-full w-full text-gray-300"
              >
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          )}
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
