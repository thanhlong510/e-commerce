import { createTRPCRouter } from "~/server/api/trpc";
import { fileRouter } from "./routers/file";
import { billboardRouter } from "./routers/billboard";
import { productRouter } from "./routers/product";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({

  file:fileRouter,
  billboard: billboardRouter,
  product:productRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
