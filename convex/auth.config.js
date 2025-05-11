import { authConfig } from "convex/server";
import { clerkAuth } from "convex/server/clerk";

export default authConfig({
  providers: [clerkAuth()],
});
