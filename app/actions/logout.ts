import { createServerFn } from "@tanstack/start";
import { deleteCookie } from "vinxi/http";

export const handleLogout = createServerFn("POST", async () => {
	deleteCookie("MOD_AUTH_CAS");

	return;
});
