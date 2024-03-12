import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Jost } from "@next/font/google";
import { CartContextProvider } from "./components/CartContext";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400"],
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <CartContextProvider>
          <main className={jost.className}>
            <Component {...pageProps} />
          </main>
        </CartContextProvider>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
