import {
	DocumentChartBarIcon,
	DocumentTextIcon,
} from "@heroicons/react/20/solid";
import { useMemo } from "react";
import { Button } from "~/components/shared/button";
import Card from "~/components/shared/card";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";

const ProfileBento = () => {
	const { profile } = useProfile();
	const { result } = useResult();

	const totalCreditHours = useMemo(() => {
		let creditHours = 0.0;

		if (!result || !result.length) {
			return creditHours;
		}

		if (result.length === 0) {
			return creditHours;
		}

		for (const i of result) {
			creditHours += Number.parseFloat(i.credit_hours);
		}

		return creditHours;
	}, [result]);

	return (
		<div>
			<Card className="h-full p-4 border-gray-200 dark:border-zinc-800 bg-zinc-900/50">
				<h2 className="text-xl font-semibold">Personal Profile</h2>
				<div className="h-0.5 w-full bg-gray-200 dark:bg-zinc-800 my-4" />
				<div className="mb-4 flex items-start justify-between">
					<div className="flex gap-4">
						<div className="h-16 w-16">
							<img alt="User avatar" src={profile.image_url} />
						</div>
						<div>
							<h2 className="text-xl font-semibold">{profile.name}</h2>
							<p className="text-sm text-gray-500">{profile.matric_no}</p>
							<div className="mt-4 flex gap-8">
								<div>
									<div className="text-2xl font-bold">
										{profile.level.split(" ")[1]}
									</div>
									<div className="text-sm text-gray-500">Level</div>
								</div>
								<div>
									<div className="text-2xl font-bold">{totalCreditHours}</div>
									<div className="text-sm text-gray-500">Credit Hours</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<a
						href="https://imaluum.iium.edu.my/MyAcademic/confirmation-sem"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Button className="bg-orange-400 border border-orange-600 hover:bg-orange-500 text-foreground w-full flex items-center justify-center">
							<DocumentTextIcon className="h-5 w-5" />
							<p>Confirmation Slip</p>
						</Button>
					</a>
					<a
						href="https://imaluum.iium.edu.my/examslip"
						target="_blank"
						rel="noreferrer noopener"
					>
						<Button className="bg-purple-400 border border-purple-600 hover:bg-purple-500 text-foreground w-full flex items-center justify-center">
							<DocumentChartBarIcon className="h-5 w-5" />
							<p>Exam Slip</p>
						</Button>
					</a>
				</div>
			</Card>
		</div>
	);
};

export default ProfileBento;
