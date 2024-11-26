import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { request } from "undici";
import { getCookie, setCookie } from "vinxi/http";
import { BACKEND_URL } from "~/constants";
import { log } from "~/utils/log";

/**
 * getSession is a function that checks if the user has a session
 * and redirects them to the home if they dont. And if they do,
 * it continues with the request.
 */
export const getSession = createServerFn({
	method: "GET",
})
	.validator(
		({
			unauthorizedRoute,
			isRoot,
		}: {
			unauthorizedRoute: string;
			isRoot: boolean;
		}) => {
			return {
				unauthorizedRoute,
				isRoot,
			};
		},
	)
	.handler(async (ctx) => {
		const token = getCookie("MOD_AUTH_CAS");
		log("token exists: ", token);

		if (!token) {
			if (ctx.data.isRoot) {
				return;
			}
			throw redirect({
				to: ctx.data.unauthorizedRoute,
			});
		}

		return;
	});

type Credentials = {
	username: string;
	password: string;
};

type TLoginResponse = {
	status: number;
	message: string;
	data: {
		username: string;
		token: string;
	};
};

export const loginUser = createServerFn({
	method: "POST",
})
	.validator((credentials: Credentials) => credentials)
	.handler(async (ctx) => {
		const res = await request(`${BACKEND_URL}/api/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ctx.data),
		});

		const json = (await res.body.json()) as unknown as TLoginResponse;

		setCookie("MOD_AUTH_CAS", json.data.token, {
			// Expires in 30 minutes
			expires: new Date(Date.now() + 30 * 60 * 1000),
		});

		return json;
	});
