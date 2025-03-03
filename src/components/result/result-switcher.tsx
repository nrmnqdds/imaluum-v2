import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import type { Result } from "~/types/result";

const ResultSwitcher = ({
	setEvents,
	courses,
}: {
	setEvents: (events: Result) => void;
	courses: Result[];
}) => {
	const [selected, setSelected] = useState(courses[0]?.session_name);

	const handleChange = (value: string) => {
		setSelected(value);

		const course = courses.find((course) => course.session_name === value);

		if (!course) return;

		console.log(course);

		setEvents(course);
	};

	return (
		<Listbox value={selected} onChange={handleChange}>
			<div className="relative mt-2">
				<ListboxButton className="relative w-full cursor-default rounded-md bg-primary py-1.5 pl-3 pr-10 text-left text-foreground shadow-sm ring-1 ring-inset ring-ring sm:text-sm sm:leading-6">
					<span className="block truncate">{selected}</span>
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							aria-hidden="true"
							className="h-5 w-5 text-foreground"
						/>
					</span>
				</ListboxButton>

				<ListboxOptions
					transition
					className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-background py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
				>
					{courses.map((course) => (
						<ListboxOption
							key={course.id}
							value={course.session_name}
							className="group relative cursor-default select-none py-2 pl-3 pr-9 text-foreground data-[focus]:bg-primary data-[focus]:text-white"
						>
							<span className="block truncate font-normal group-data-[selected]:font-semibold">
								{course.session_name}
							</span>

							<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
								<CheckIcon aria-hidden="true" className="h-5 w-5" />
							</span>
						</ListboxOption>
					))}
				</ListboxOptions>
			</div>
		</Listbox>
	);
};

export default ResultSwitcher;
