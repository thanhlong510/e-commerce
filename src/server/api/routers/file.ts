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

export const fileRouter = createTRPCRouter({
  getUrl: publicProcedure
    .input(z.object({ fileName: z.string() }))
    .query(async ({ input }) => {
      const a = await getFile(input.fileName);
      return a;
    }),
});
