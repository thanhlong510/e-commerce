import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const featureProductRouter = createTRPCRouter({
  createFeature: publicProcedure
    .input(
      z.object({
        name: z.string(),
        value: z.string(),
        featureType: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.featureType === "size") {
        return ctx.db.size.create({
          data: {
            name: input.name,
            value: input.value,
          },
        });
      } else if (input.featureType === "color") {
        return ctx.db.color.create({
          data: {
            name: input.name,
            value: input.value,
          },
        });
      }
    }),
});
