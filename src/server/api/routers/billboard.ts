import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const billboardRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ imageUrl: z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.billboard.create({
        data: {
          imageUrl: input.imageUrl,
          label: input.name,
        },
      });
    }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.billboard.findMany();
  }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.billboard.delete({
        where: {
          id: input.id,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({ id: z.string(), imageUrl: z.string(), label: z.string() }),
    )
    .mutation(async ({ ctx, input }) => {
      const a = ctx.db.billboard.update({
        where: {
          id: input.id,
        },
        data: {
          label: input.label,
          imageUrl: input.imageUrl,
        },
      });
      return a;
    }),
  getBillboardbyId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.db.billboard.findFirst({
        where: {
          id: input.id,
        },
      });
    }),
});
