import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  credentials: {
    client_email: "cloudstorage@sortable-ai.iam.gserviceaccount.com",
    private_key: process.env.SECRET_FOR_LONG,
  },
  projectId: "sortable-ai",
});

const getFile = async (a: string) => {
  const file = storage.bucket("medium-blog-project").file(`${a}`);
  const [signedUrl] = await file.getSignedUrl({
    action: "read",
    expires: Date.now() + 300 * 1000,
  });
  const b = await file.exists();
  if (!b[0]) {
    return "undefined";
  } else {
    return [signedUrl];
  }
};
export const productRouter = createTRPCRouter({
  getProductbyId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      const product = ctx.db.product.findFirst({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          price: true,
          description: true,
          attachment: {
            select: {
              file: {
                select: {
                  fileName: true,
                  url: true,
                },
              },
            },
          },
        },
      });
      return product;
    }),
    getProductbyIds: publicProcedure
    .input(z.object({ ids: z.array(z.string()) }))
    .query(({ ctx, input }) => {
      const a = input.ids.map((id)=>{
        // return ctx.db.product.findFirst({
        //   where:{
        //     id:id
        //   },
        //   select: {
        //     id: true,
        //     name: true,
        //     price: true,
        //     description: true,
        //     attachment: {
        //       select: {
        //         file: {
        //           select: {
        //             fileName: true,
        //             url: true,
        //           },
        //         },
        //       },
        //     },
        //   },
        // })
        return id[0]
      })
      return a
    }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.string(),
        description: z.string(),
        fileName: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.$transaction(async (tx) => {
        const product = await tx.product.create({
          data: {
            name: input.name,
            price: input.price,
            description: input.description,
          },
        });
        const file = await tx.file.create({
          data: {
            header: true,
            fileName: input.fileName,
          },
        });
        const attachment = await tx.attachment.create({
          data: {
            fileId: file.id,
            postId: product.id,
          },
        });
      });
      // simulate a slow db call
    }),
  delete:publicProcedure
  .input(
    z.object({
      productId:z.string()
    }),
  )
  .mutation(async ({ ctx, input }) => {
   return ctx.db.product.delete({
    where:{
      id:input.productId
      
    }
   })
    // simulate a slow db call
  }),
  getAllProduct: publicProcedure.query(async ({ ctx, input }) => {
    return ctx.db.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        attachment: {
          select: {
            file: {
              select: {
                fileName: true,
                url: true,
              },
            },
          },
        },
      },
      orderBy: [{ createdAt: "desc" }],
    });
  }),

});
