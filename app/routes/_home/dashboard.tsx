import {
  BellIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { createFileRoute } from "@tanstack/react-router";
import { Advertisement } from "~/components/dashboard/advertisement";
import BentoLayout from "~/components/dashboard/bento";
import { Button } from "~/components/shared/button";
import Card from "~/components/shared/card";
import ProgressBar from "~/components/shared/progressbar";
import useProfile from "~/hooks/use-profile";

const DashboardPage = () => {
  const { profile } = useProfile();

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
                <Card>
                  <div className="flex gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <BellIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">Biology Molecular</h3>
                        <span className="text-sm text-green-600">79%</span>
                      </div>
                      <ProgressBar value={79} className="mb-2" />
                      <div className="grid grid-cols-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <BookOpenIcon className="h-4 w-4" />
                          21 lesson
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          50 min
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="h-4 w-4" />
                          312 students
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button>Skip</Button>
                        <Button>Continue</Button>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className="flex gap-4 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <BookOpenIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold">Color Theory</h3>
                        <span className="text-sm text-purple-600">64%</span>
                      </div>
                      <ProgressBar value={64} className="mb-2" />
                      <div className="grid grid-cols-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <BookOpenIcon className="h-4 w-4" />
                          10 lesson
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          45 min
                        </div>
                        <div className="flex items-center gap-1">
                          <UsersIcon className="h-4 w-4" />
                          256 students
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button>Skip</Button>
                        <Button>Continue</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* <div> */}
            {/*   <h2 className="mb-4 text-xl font-semibold">Your class</h2> */}
            {/*   <Tabs defaultValue="all"> */}
            {/*     <TabsList> */}
            {/*       <TabsTrigger value="all">All</TabsTrigger> */}
            {/*       <TabsTrigger value="design">Design</TabsTrigger> */}
            {/*       <TabsTrigger value="science">Science</TabsTrigger> */}
            {/*       <TabsTrigger value="coding">Coding</TabsTrigger> */}
            {/*     </TabsList> */}
            {/*   </Tabs> */}
            {/*   <Card className="mt-4"> */}
            {/*     <CardContent className="flex gap-4 p-4"> */}
            {/*       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100"> */}
            {/*         <Virus className="h-6 w-6 text-green-600" /> */}
            {/*       </div> */}
            {/*       <div className="flex-1"> */}
            {/*         <h3 className="font-semibold">Microbiology Society</h3> */}
            {/*         <div className="grid grid-cols-3 text-sm text-gray-500"> */}
            {/*           <div className="flex items-center gap-1"> */}
            {/*             <Book className="h-4 w-4" /> */}
            {/*             10 lesson */}
            {/*           </div> */}
            {/*           <div className="flex items-center gap-1"> */}
            {/*             <Clock className="h-4 w-4" /> */}
            {/*             45 min */}
            {/*           </div> */}
            {/*           <div className="flex items-center gap-1"> */}
            {/*             <Users className="h-4 w-4" /> */}
            {/*             256 students */}
            {/*           </div> */}
            {/*         </div> */}
            {/*       </div> */}
            {/*     </CardContent> */}
            {/*   </Card> */}
            {/* </div> */}
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
                  <h3 className="text-lg font-semibold">Learning activity</h3>
                  <Button>
                    1 3rd semester
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    Materials
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-pink-500" />
                    Exams
                  </div>
                </div>
                {/* <div className="h-[200px] w-full"> */}
                {/*   <ResponsiveContainer width="100%" height="100%"> */}
                {/*     <LineChart data={activityData}> */}
                {/*       <XAxis */}
                {/*         dataKey="month" */}
                {/*         stroke="#888888" */}
                {/*         fontSize={12} */}
                {/*         tickLine={false} */}
                {/*         axisLine={false} */}
                {/*       /> */}
                {/*       <Line */}
                {/*         type="monotone" */}
                {/*         strokeWidth={2} */}
                {/*         dataKey="materials" */}
                {/*         stroke="#2563eb" */}
                {/*         dot={false} */}
                {/*         style={{ opacity: 0.5 }} */}
                {/*       /> */}
                {/*       <Line */}
                {/*         type="monotone" */}
                {/*         strokeWidth={2} */}
                {/*         dataKey="exams" */}
                {/*         stroke="#ec4899" */}
                {/*         dot={false} */}
                {/*         style={{ opacity: 0.5 }} */}
                {/*       /> */}
                {/*     </LineChart> */}
                {/*   </ResponsiveContainer> */}
                {/* </div> */}
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
