
import Head from "next/head";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { api } from "~/utils/api";
import DashBoardPage from "./components/DashBoardPage";

export default function Home() {


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4">
      <div className="flex items-center justify-between border-b pb-4 border-solid mb-4">
        <div>
          <div className="text-4xl font-bold text-slate-950">Dashboard</div>
          <div className="text-lg text-slate-600">
            Overview of your stores
          </div>
        </div>
      </div>

      <DashBoardPage />
    </div>
    </>
  );
}


