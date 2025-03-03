import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import moment from "moment";
import type { Schedule } from "~/types/schedule";

export default function TimetableModal({
	openModal,
	setOpenModal,
	currentSubject,
}: {
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
	currentSubject?: Schedule;
}) {
	return (
		<Dialog
			as="div"
			className="relative z-10"
			open={openModal}
			onClose={setOpenModal}
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
					<DialogPanel className="relative transform overflow-hidden rounded-lg bg-background border-border border-2 border-solid px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
						{/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div> */}
						<div className="mt-3 text-center sm:mt-5">
							<DialogTitle
								as="h3"
								className="text-base font-semibold leading-6 text-secondary-foreground"
							>
								{currentSubject?.course_code || "No course code"}
							</DialogTitle>
							<div className="mt-0">
								<p className="text-sm text-foreground">
									{currentSubject?.course_name || "No course name"}
								</p>
							</div>
							<div className="flex flex-col gap-1 items-start mt-5">
								{/* <p className="text-sm text-foreground"> */}
								{/* 	<span className="text-sm text-secondary-foreground font-bold"> */}
								{/* 		Time:{" "} */}
								{/* 	</span> */}
								{/* 	{moment(currentSubject?.timestamps.start, "HH:mm:ss").format( */}
								{/* 		"h:mma", */}
								{/* 	)}{" "} */}
								{/* 	-{" "} */}
								{/* 	{moment(currentSubject?.timestamps.end, "HH:mm:ss").format( */}
								{/* 		"h:mma", */}
								{/* 	)} */}
								{/* </p> */}
								<p className="text-sm text-foreground">
									<span className="text-sm text-secondary-foreground font-bold">
										Lecturer:{" "}
									</span>
									{currentSubject?.lecturer}
								</p>
								<p className="text-sm text-foreground">
									<span className="text-sm text-secondary-foreground font-bold">
										Section:{" "}
									</span>
									{currentSubject?.section}
								</p>
								<p className="text-sm text-foreground">
									<span className="text-sm text-secondary-foreground font-bold">
										Credit Hour:{" "}
									</span>
									{currentSubject?.chr}
								</p>
								<p className="text-sm text-foreground">
									<span className="text-sm text-secondary-foreground font-bold">
										Location:{" "}
									</span>
									{currentSubject?.venue}
								</p>
							</div>
						</div>
						<div className="mt-5 sm:mt-6">
							<button
								type="button"
								className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								onClick={() => setOpenModal(false)}
							>
								Exit
							</button>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
