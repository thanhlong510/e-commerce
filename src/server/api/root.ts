import { createTRPCRouter } from "~/server/api/trpc";
import { fileRouter } from "./routers/file";
import { productRouter } from "./routers/product";
import { featureProductRouter } from "./routers/featureProduct";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  feature:featureProductRouter,
  file:fileRouter,
  product:productRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
