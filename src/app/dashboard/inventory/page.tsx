"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardInventoryTable from "@/components/dashboard/DashboardInventoryTable";
import Link from "next/link";
import Image from "next/image";

export default function Inventory() {
  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Inventory" />

      <div className="w-full flex flex-col px-4 py-3 gap-4 rounded-md bg-[#0E141A] sm:flex-row sm:items-center">
        <Link href={"/dashboard/inventory/add"}>
          <button className="flex items-center text-left gap-3 p-3 rounded-lg opacity-60 bg-[#0051CC] bg-opacity-30 hover:opacity-100 hover:bg-opacity-70 active:bg-opacity-100 transition-all">
            <Image
              src="/assets/icons/inventory.png"
              alt="add new inventory"
              width={28}
              height={28}
            />
            New Inventory
          </button>
        </Link>
      </div>
      
      <DashboardInventoryTable />
    </main>
  );
}
