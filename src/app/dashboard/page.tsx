"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardQuickActions from "@/components/dashboard/DashboardQuickActions";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardInventoryTable from "@/components/dashboard/DashboardInventoryTable";
import DashboardTransactionTable from "@/components/dashboard/DashboardTransactionTable";

export default function Dashboard() {
  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Dashboard" />
      <DashboardQuickActions />
      <DashboardOverview />

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Recent Inventories</h2>
        <DashboardInventoryTable />
      </section>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <DashboardTransactionTable />
      </section>
    </main>
  );
}
