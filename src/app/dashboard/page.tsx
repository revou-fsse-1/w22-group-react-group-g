"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardQuickActions from "@/components/dashboard/DashboardQuickActions";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardInventoryTable from "@/components/dashboard/DashboardInventoryTable";
import DashboardTransactionTable from "@/components/dashboard/DashboardTransactionTable";

export default function Dashboard() {
  const tempInventoryData = [
    {
      inventoryId: 1,
      inventoryName: "My Great Book",
      inventoryDesc:
        "One of the most popular books sold with breaking record...",
      category: "Novel",
      price: 152000,
      stockAmount: 132,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
    {
      inventoryId: 2,
      inventoryName: "My Great Book",
      inventoryDesc:
        "One of the most popular books sold with breaking record...",
      category: "Novel",
      price: 152000,
      stockAmount: 132,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
  ];

  const tempTransactionData = [
    {
      orderId: "si245ndfi214",
      orderDate: new Date().toLocaleDateString(),
      orderUsername: "Budi",
      orderStatus: "Awaiting Payment",
      inventoryName: "My Great Book",
      amount: 3,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
    {
      orderId: "k1ms98gj40jds89",
      orderDate: new Date().toLocaleDateString(),
      orderUsername: "Cindy",
      orderStatus: "In Transit",
      inventoryName: "My Great Book",
      amount: 1,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: new Date().toLocaleDateString(),
    },
  ];

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Dashboard" />
      <DashboardQuickActions />
      <DashboardOverview />
      <DashboardInventoryTable inventoryList={tempInventoryData} />
      <DashboardTransactionTable transactionList={tempTransactionData} />
    </main>
  );
}
