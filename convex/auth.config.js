// export default {
//   providers: [
//     {
//       domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
//       applicationID: "convex",
//     },
//   ],
// };

import { authConfig } from "convex/server";
import { clerkAuth } from "convex/server/clerk";

export default authConfig({
  providers: [clerkAuth()],
});
