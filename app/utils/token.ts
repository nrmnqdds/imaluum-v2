import { getCookie } from "vinxi/http";

export const GetToken = (): string | null => {
	const token = getCookie("MOD_AUTH_CAS");

	if (!token) {
		return null;
	}

	return token;
};
