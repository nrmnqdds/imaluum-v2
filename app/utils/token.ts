import { getHeaders } from "vinxi/http";

export const GetToken = (): string | null => {
	const headers = getHeaders();

	if (!headers.cookie) {
		return null;
	}

	const cookies = headers.cookie.split("; ");

	if (cookies.length === 0) {
		return null;
	}

	const token = cookies.find((cookie) => cookie.startsWith("MOD_AUTH_CAS="));

	if (!token) {
		return null;
	}

	return token;
};
