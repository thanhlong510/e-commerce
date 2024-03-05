import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), price: z.string(), description:z.string(), imageName:z.string() }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      const product = ctx.db.product.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
        },
      });
      // const billboard = ctx.db.billboard.update({
      //   where:{
      //     label:input.imageName
      //   }
      // })
      
      return product;
    }),
});
