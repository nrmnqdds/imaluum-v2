import {
  BellIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Advertisement } from "~/components/dashboard/advertisement";
import CGPAChart from "~/components/dashboard/cgpa-chart";
import { Button } from "~/components/shared/button";
import Card from "~/components/shared/card";
import useProfile from "~/hooks/use-profile";
import useSchedule from "~/hooks/use-schedule";
import type { Schedule, Timestamp } from "~/types/schedule";

const DashboardPage = () => {
  const { profile } = useProfile();
  const { schedule } = useSchedule();

  const todayCourses = useMemo(() => {
    const currentDay = new Date().getDay();

    const latestSession = schedule[0];

    const todaysCourses = latestSession.schedule
      .map((course) => {
        const todayTimestamp = course.timestamps.find(
          (t) => t.day === currentDay,
        );
        return todayTimestamp ? { ...course, timestamp: todayTimestamp } : null;
      })
      .filter(
        (course): course is Schedule & { timestamp: Timestamp } =>
          course !== null,
      )
      .sort((a, b) => a.timestamp.start.localeCompare(b.timestamp.start));

    return todaysCourses;
  }, [schedule]);

  return (
    <section className="flex min-h-screen flex-col px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex min-h-screen w-full flex-col gap-4 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Hello, {profile.name} 👋</h1>
            <p className="text-gray-500">
              Nice to have you back, what an exciting day! Get ready and
              continue your lesson today.
            </p>
          </div>
          <div className="flex items-start justify-end gap-4">
            <Button>
              <BellIcon className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-lg font-semibold">2400 XP</div>
                <div className="text-sm text-gray-500">Point</div>
              </div>
              <div className="flex gap-2">
                <Button>Redeem</Button>
                <Button>Collect Point</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[2fr,3fr]">
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Today&apos;s course
              </h2>
              <div className="space-y-4">
                {todayCourses.map((course) => (
                  <Card key={course.id}>
                    <div className="flex gap-4 p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <BellIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="font-semibold">
                            {course.course_name}
                          </h3>
                        </div>
                        <div className="flex flex-col text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <BookOpenIcon className="h-4 w-4" />
                            {course.chr} credit hours
                          </div>
                          <div className="flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {course.venue}
                          </div>
                          <div className="flex items-center gap-1">
                            <UsersIcon className="h-4 w-4" />
                            {course.lecturer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Card className="p-4">
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
                        <div className="text-2xl font-bold">24</div>
                        <div className="text-sm text-gray-500">Course</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">18</div>
                        <div className="text-sm text-gray-500">
                          Certification
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-orange-100">
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <ChevronDownIcon className="h-5 w-5" />
                      <Button>
                        <ChevronDownIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="text-lg font-semibold">Consultation</h3>
                    <p className="text-sm">
                      Get a mentor to help your learning process
                    </p>
                  </div>
                </Card>
                <Card className="bg-purple-100">
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <ChevronDownIcon className="h-5 w-5" />
                      <Button>
                        <ChevronDownIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="text-lg font-semibold">Set target</h3>
                    <p className="text-sm">
                      Set target, reminders and your study timeline
                    </p>
                  </div>
                </Card>
              </div>
            </Card>
            <Card>
              <div className="p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Result Progress</h3>
                </div>
                <Card className="col-span-2">
                  <CGPAChart />
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Advertisement className="flex h-fit w-full flex-col" />
    </section>
  );
};

export const Route = createFileRoute("/_home/dashboard")({
  component: () => <DashboardPage />,
});
