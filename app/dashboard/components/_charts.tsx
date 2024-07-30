'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  options: options,
  datasets: [
    {
      label: "Paid Invoices",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 50 })),
      borderColor: "rgb(0, 128, 0)",
      backgroundColor: "rgba(0, 128, 0, 0.5)",
    },
    {
      label: "Rejected Invoices",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 50 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const InvoiceStatusLineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Sales</p>
          <p>Total clothes washed</p>
        </div>

        <div>
          <select className="rounded-md text-xs outline-none focus:ring-blue-200">
            <option value="">Current Month</option>
            <option value="">Previous Month</option>
            <option value="">3 Months</option>
            <option value="">6 Months</option>
            <option value="">Current Year</option>
          </select>
        </div>
      </div>

      <Line height={80} datasetIdKey="id" data={data} />
    </div>
  );
};


export const CustomerBreakDownCharts = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
        <div className="border-slate-400 bg-slate-50 rounded-lg p-6">
          <p className="text-lg">Top Coupons</p>
          <p className="text-xs">Last 7 days</p>
        </div>

        <div className="border-slate-400 bg-slate-50 rounded-lg p-6">
          <p className="text-lg">Top Coupons</p>
          <p className="text-xs">Last 7 days</p>
        </div>

        <div className="border-slate-400 bg-slate-50 rounded-lg p-6">
          <p className="text-lg">Top Coupons</p>
          <p className="text-xs">Last 7 days</p>
        </div>

        <div className="border-slate-400 bg-slate-50 rounded-lg p-6">
          <p className="text-lg">Top Coupons</p>
          <p className="text-xs">Last 7 days</p>
        </div>
      </div>
    )
}