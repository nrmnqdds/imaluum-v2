import { useQueries } from "@tanstack/react-query";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { fetch } from "undici";
import LoadingScreen from "~/components//shared/loading-screen";
import { NotFound } from "~/components/shared/not-found";
import useProfile from "~/hooks/use-profile";
import useResult from "~/hooks/use-result";
import useSchedule from "~/hooks/use-schedule";
import type { Sessions } from "~/types/schedule";
import type { StudentInfo } from "~/types/student";
import { GetResult } from "~/utils/scraper/result";
import { GetToken } from "~/utils/token";

type TProfileResponse = {
  status: number;
  message: string;
  data: {
    image_url: string;
    name: string;
    matric_no: string;
  };
};

type TScheduleResponse = {
  status: number;
  message: string;
  data: Sessions[];
};

const ImaluumProvider = ({ children }: { children: React.ReactNode }) => {
  const { setProfile } = useProfile();
  const { setResult } = useResult();
  const { setSchedule } = useSchedule();

  const fetchProfile = createServerFn("GET", async (): Promise<StudentInfo> => {
    const token = GetToken();

    if (!token) {
      throw redirect({
        to: "/",
      });
    }

    const res = await fetch("https://api.nrmnqdds.com/api/profile", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: token,
      },
    });

    if (!res.ok) {
      console.log("profile error: ", res);
      throw new Error("Failed to fetch data");
    }

    const json = (await res.json()) as unknown as TProfileResponse;
    console.log("profile: ", json);

    return json.data;
  });

  const fetchResult = createServerFn("GET", async () => {
    const token = GetToken();

    if (!token) {
      throw redirect({
        to: "/",
      });
    }
    const res = await GetResult(token);

    if (res.error || !res.data) {
      console.log("result error: ", res);
      throw new Error("Failed to fetch data");
    }

    const json = res.data;
    console.log("result: ", json);

    return json;
  });

  const fetchSchedule = createServerFn("GET", async () => {
    const token = GetToken();

    if (!token) {
      throw redirect({
        to: "/",
      });
    }

    const res = await fetch("https://api.nrmnqdds.com/api/schedule", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: token,
      },
    });

    if (!res.ok) {
      console.log("schedule error: ", res);
      throw new Error("Failed to fetch data");
    }

    const json = (await res.json()) as unknown as TScheduleResponse;
    console.log("schedule: ", json);

    return json.data;
  });

  const fetchImaluum = useQueries({
    queries: [
      {
        queryKey: ["profile"],
        queryFn: async () => {
          const res = await fetchProfile();
          setProfile(res);
        },
        retry: 3,
      },
      {
        queryKey: ["result"],
        queryFn: async () => {
          const res = await fetchResult();
          setResult(res);
        },
        retry: 3,
      },
      {
        queryKey: ["schedule"],
        queryFn: async () => {
          const res = await fetchSchedule();
          setSchedule(res);
        },
        retry: 3,
      },
    ],
  });

  return fetchImaluum.some((query) => query.isLoading) ? (
    <LoadingScreen />
  ) : fetchImaluum.every((query) => query.isFetched && query.isSuccess) ? (
    children
  ) : (
    <NotFound />
  );
};

export default ImaluumProvider;
