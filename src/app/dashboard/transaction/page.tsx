"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTransactionTable from "@/components/dashboard/DashboardTransactionTable";

export default function Transaction() {
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
      <DashboardHeader headerTitle="Transaction" />
      <DashboardTransactionTable transactionList={tempTransactionData} />
    </main>
  );
}
