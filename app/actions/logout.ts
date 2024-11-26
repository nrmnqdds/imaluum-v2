import { createServerFn } from "@tanstack/start";
import { deleteCookie } from "vinxi/http";

export const handleLogout = createServerFn({
	method: "POST",
}).handler(async () => {
	deleteCookie("MOD_AUTH_CAS");

	return;
});
