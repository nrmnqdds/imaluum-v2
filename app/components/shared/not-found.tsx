import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { handleLogout } from "~/actions/logout";
import { Button } from "~/components/shared/button";

export function NotFound() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return (
    <div className="space-y-2 p-2">
      <p>The page you are looking for does not exist.</p>
      <p className="flex flex-wrap items-center gap-2">
        <Button type="button" onClick={() => window.history.back()}>
          Go back
        </Button>
        <Button
          onClick={async () => {
            await handleLogout();
            queryClient.clear();
            router.navigate({
              to: "/",
            });
          }}
        >
          <span>Go to home</span>
        </Button>
      </p>
    </div>
  );
}
