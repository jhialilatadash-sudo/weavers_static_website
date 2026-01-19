"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

/* ======================
   Chart.js Register
====================== */
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

/* ======================
   MAIN COMPONENT
====================== */
export default function SchemesTabs() {
  const [activeTab, setActiveTab] = useState<"latest" | "cluster">("latest");

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-semibold text-blue-900 mb-10">
        Schemes
      </h2>

      {/* FIRST TABLE (WITH TABS) */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* TAB ROW */}
        <div className="grid grid-cols-2">
          <button
            onClick={() => setActiveTab("latest")}
            className={`py-4 font-semibold text-lg ${
              activeTab === "latest"
                ? "bg-[#1C2B78] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            10 Latest Published Schemes
          </button>

          <button
            onClick={() => setActiveTab("cluster")}
            className={`py-4 font-semibold text-lg ${
              activeTab === "cluster"
                ? "bg-[#1C2B78] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            Clusterwise Summary
          </button>
        </div>

        {activeTab === "latest" && <LatestSchemes />}
        {activeTab === "cluster" && <ClusterwiseSummary />}
      </div>

      {/* GAP BETWEEN TWO TABLES */}
      <div className="h-14" />

      {/* SECOND TABLE (CHART TABLE) */}
      <ChartTable />
    </section>
  );
}

/* ======================
   LATEST SCHEMES TABLE
====================== */
function LatestSchemes() {
  const data = [
    { id: 1, goNo: "GO123", date: "2023-06-01", cluster: "Cluster A", subject: "Scheme Description for A" },
    { id: 2, goNo: "GO124", date: "2023-06-05", cluster: "Cluster B", subject: "Scheme Description for B" },
    { id: 3, goNo: "GO125", date: "2023-06-10", cluster: "Cluster C", subject: "Scheme Description for C" },
    { id: 4, goNo: "GO126", date: "2023-06-15", cluster: "Cluster D", subject: "Scheme Description for D" },
    { id: 5, goNo: "GO127", date: "2023-06-20", cluster: "Cluster E", subject: "Scheme Description for E" },
    { id: 6, goNo: "GO128", date: "2023-06-25", cluster: "Cluster F", subject: "Scheme Description for F" },
    { id: 7, goNo: "GO129", date: "2023-06-30", cluster: "Cluster G", subject: "Scheme Description for G" },
    { id: 8, goNo: "GO130", date: "2023-07-05", cluster: "Cluster H", subject: "Scheme Description for H" },
    { id: 9, goNo: "GO131", date: "2023-07-10", cluster: "Cluster I", subject: "Scheme Description for I" },
    { id: 10, goNo: "GO132", date: "2023-07-15", cluster: "Cluster J", subject: "Scheme Description for J" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 text-blue-900">
          <tr>
            <th className="px-4 py-3 text-left">Sl No</th>
            <th className="px-4 py-3 text-left">GO No</th>
            <th className="px-4 py-3 text-left">GO Date</th>
            <th className="px-4 py-3 text-left">Cluster Name</th>
            <th className="px-4 py-3 text-left">Subject</th>
            <th className="px-4 py-3 text-center">Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-3">{item.id}</td>
              <td className="px-4 py-3">{item.goNo}</td>
              <td className="px-4 py-3">{item.date}</td>
              <td className="px-4 py-3">{item.cluster}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3 text-center">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded">
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ======================
   CLUSTERWISE TABLE
====================== */
function ClusterwiseSummary() {
  return (
    <table className="w-full">
      <thead className="bg-gray-50 text-blue-900">
        <tr>
          <th className="px-4 py-3 text-left">Sl No</th>
          <th className="px-4 py-3 text-left">Date</th>
          <th className="px-4 py-3 text-left">Cluster Name</th>
          <th className="px-4 py-3 text-center">Analytics</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-4 py-3">1</td>
          <td className="px-4 py-3">2023-06-01</td>
          <td className="px-4 py-3">Cluster A</td>
          <td className="px-4 py-3 text-center">
            <button className="bg-[#31d2f2] px-3 py-1.5 rounded">
              See Analytics
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/* ======================
   CHART AS SECOND TABLE
====================== */
function ChartTable() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-[#1C2B78] text-white py-4 text-center text-lg">
              Schemes in Last 12 Months
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-6 h-[420px]">
              <SchemesBarChart />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ======================
   BAR CHART
====================== */
function SchemesBarChart() {
  const data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 10, 8, 15, 7, 11, 9],
        backgroundColor: "#5B7CFA",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return <Bar data={data} options={options} />;
}
