"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardInventoryTable from "@/components/dashboard/DashboardInventoryTable";

export default function Inventory() {
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

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Inventory" />
      <DashboardInventoryTable inventoryList={tempInventoryData} />
    </main>
  )
}
