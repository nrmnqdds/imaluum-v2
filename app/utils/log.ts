import util from "node:util";

// biome-ignore lint/suspicious/noExplicitAny: <default logger behavior>
export const log = (...args: any[]) => {
	return console.log(
		...args.map((arg) =>
			typeof arg === "string"
				? arg
				: util.inspect(arg, {
						colors: true,
						depth: Number.POSITIVE_INFINITY,
					}),
		),
	);
};
