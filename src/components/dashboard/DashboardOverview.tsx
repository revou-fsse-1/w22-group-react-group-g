"use client";

import { DashboardContext } from "@/app/dashboard/layout";
import { API_INVENTORY, API_TRANSACTION } from "@/utils/ApiLinks";
import axios from "axios";
import { useContext } from "react";
import useSWR from "swr";

export default function DashboardOverview() {
  const indonesianCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  // const { userInventory, userTransaction } = useContext<any>(DashboardContext);

  // Fetch handler
  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        return data.data;
      });
  const inventory = useSWR(API_INVENTORY, fetcher);
  const transaction = useSWR(API_TRANSACTION, fetcher);

  const calculateTotalItemsSold = (transactionData: any) => {
    const totalItems = transactionData.reduce(
      (acc: any, currentVal: any) => acc + currentVal.amount,
      0
    );

    return totalItems;
  };

  const calculateTotalEarnings = (transactionData: any) => {
    const totalEarnings = transactionData.reduce(
      (acc: any, currentVal: any) => {
        const currentInventory = inventory.data.find(
          (inventory: any) =>
            inventory.inventoryName == currentVal.inventoryName
        );

        if (currentVal.orderStatus !== "Awaiting Payment") {
          const totalTransactionCost =
            currentInventory.price * currentVal.amount;

          return acc + totalTransactionCost;
        }

        return acc;
      },
      0
    );

    return totalEarnings;
  };

  return (
    <section className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="w-full grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1">
        <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
          <h3 className="line-clamp-2">Total Inventory</h3>
          <p className="text-3xl line-clamp-1 sm:text-4xl">
            {inventory.isLoading ? "..." : inventory.data.length}
          </p>
        </div>
        <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
          <h3 className="line-clamp-2">Total Transaction</h3>
          <p className="text-3xl line-clamp-1 sm:text-4xl">
            {transaction.isLoading ? "..." : transaction.data.length}
          </p>
        </div>
        <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
          <h3 className="line-clamp-2">Total Items Sold</h3>
          <p className="text-3xl line-clamp-1 sm:text-4xl">
            {transaction.isLoading
              ? "..."
              : calculateTotalItemsSold(transaction.data)}
          </p>
        </div>
        <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A] xl:col-span-2">
          <h3 className="line-clamp-2">Total Earnings</h3>
          <p className="text-3xl line-clamp-1 sm:text-4xl">
            {transaction.isLoading || inventory.isLoading
              ? "..."
              : indonesianCurrency.format(
                  calculateTotalEarnings(transaction.data)
                )}
          </p>
        </div>
      </div>
    </section>
  );
}
