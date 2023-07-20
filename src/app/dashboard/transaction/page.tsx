"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardTransactionTable from "@/components/dashboard/DashboardTransactionTable";
import Link from "next/link";
import Image from "next/image";

export default function Transaction() {
  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <DashboardHeader headerTitle="Transaction" />

      <div className="w-full flex flex-col px-4 py-3 gap-4 rounded-md bg-[#0E141A] sm:flex-row sm:items-center">
        <Link href={"/dashboard/transaction/add"}>
          <button className="flex items-center text-left gap-3 p-3 rounded-lg opacity-60 bg-[#0051CC] bg-opacity-30 hover:opacity-100 hover:bg-opacity-70 active:bg-opacity-100 transition-all">
            <Image
              src="/assets/icons/transaction.png"
              alt="add new transaction"
              width={28}
              height={28}
            />
            New Transaction
          </button>
        </Link>
      </div>

      <DashboardTransactionTable />
    </main>
  );
}
