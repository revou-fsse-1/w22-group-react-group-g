"use client";

import Image from "next/image";
import { useContext } from "react";
import { DashboardContext } from "./layout";

type DashboardContextType = {
  displayPanel: boolean;
  setDisplayPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Dashboard() {
  const { displayPanel, setDisplayPanel } = useContext<
    any | DashboardContextType
  >(DashboardContext);

  const currentDate = new Date();
  const indonesianCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <main className="w-full max-h-screen overflow-y-auto flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <header className="w-full flex items-center justify-between p-2 rounded-md bg-[#0E141A] md:p-4">
        <div className="w-fit flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setDisplayPanel((prev: boolean) => !prev)}
            className="min-w-fit p-2 rounded-lg hover:bg-[#222E3F] hover:bg-opacity-40 active:bg-opacity-80 transition-all"
          >
            <Image
              src="/assets/icons/menu.png"
              alt="menu toggle"
              width={35}
              height={35}
            />
          </button>
          <div className="inline-block w-0.5 mr-1 self-stretch bg-[#222E3F]"></div>
          <h1 className="text-xl md:text-3xl">Dashboard</h1>
        </div>

        <div className="p-2 opacity-50 text-xs md:p-3 md:text-base hover:opacity-100 transition-all">
          <time dateTime={currentDate.toISOString()}>
            {currentDate.toLocaleDateString()}
          </time>
        </div>
      </header>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="w-full flex flex-col px-4 py-3 gap-4 rounded-md bg-[#0E141A] sm:flex-row sm:items-center">
          <button className="flex items-center text-left gap-3 p-3 rounded-lg opacity-60 bg-[#0051CC] bg-opacity-30 hover:opacity-100 hover:bg-opacity-70 active:bg-opacity-100 transition-all">
            <Image
              src="/assets/icons/inventory.png"
              alt="add new inventory"
              width={28}
              height={28}
            />
            New Inventory
          </button>

          <button className="flex items-center text-left gap-3 p-3 rounded-lg opacity-60 bg-[#0051CC] bg-opacity-30 hover:opacity-100 hover:bg-opacity-70 active:bg-opacity-100 transition-all">
            <Image
              src="/assets/icons/transaction.png"
              alt="add new transaction"
              width={28}
              height={28}
            />
            New Transaction
          </button>
        </div>
      </section>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Overview</h2>
        <div className="w-full grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Inventory</h3>
            <p className="text-3xl line-clamp-1 sm:text-4xl">0</p>
          </div>
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Transaction</h3>
            <p className="text-3xl line-clamp-1 sm:text-4xl">0</p>
          </div>
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Items Sold</h3>
            <p className="text-3xl line-clamp-1 sm:text-4xl">0</p>
          </div>
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A] lg:col-span-2">
            <h3 className="line-clamp-2">Total Earnings</h3>
            <p className="text-3xl line-clamp-1 sm:text-4xl">
              {indonesianCurrency.format(0)}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Recent Inventories</h2>
        <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
          <table className="w-full table-auto border-collapse">
            <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
              <tr>
                <th className="min-w-fit px-3 py-2 rounded-tl-md">Image</th>
                <th className="min-w-fit px-3 py-2 text-center">
                  Inventory Name
                </th>
                <th className="min-w-fit px-3 py-2 text-center">Description</th>
                <th className="min-w-fit px-3 py-2 text-center">Category</th>
                <th className="min-w-fit px-3 py-2 text-center">
                  Price per Item
                </th>
                <th className="min-w-fit px-3 py-2 text-center">Stock</th>
                <th className="min-w-fit px-3 py-2 text-center">Created At</th>
                <th className="min-w-fit px-3 py-2 text-center">Updated At</th>
                <th className="min-w-fit px-3 py-2 rounded-tr-md text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-sm text-gray-100 border-b border-b-[#222E3F] sm:text-base">
                <td className="text-center">
                  <div className="flex justify-center">
                    <Image
                      src="/assets/icons/inventory.png"
                      alt="image"
                      width={45}
                      height={45}
                    />
                  </div>
                </td>
                <td className="px-3 py-2 text-center">My Great Book</td>
                <td className="px-3 pt-2 text-center line-clamp-2">
                  One of the most popular books sold with breaking record...
                </td>
                <td className="px-3 py-2 text-center">Novel</td>
                <td className="px-3 py-2 text-center">152.000</td>
                <td className="px-3 py-2 text-center">83</td>
                <td className="px-3 py-2 text-center">12/03/2022</td>
                <td className="px-3 py-2 text-center">25/04/2023</td>
                <td className="px-3 py-2 text-xl text-center">
                  <div className="min-w-max flex justify-center gap-3">
                    <button className="min-w-fit h-fit p-2 rounded-md bg-orange-500">
                      <Image
                        src="/assets/icons/edit.png"
                        alt="edit"
                        width={30}
                        height={30}
                      />
                    </button>
                    <button className="min-w-fit h-fit p-2 rounded-md bg-rose-600">
                      <Image
                        src="/assets/icons/delete.png"
                        alt="delete"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
          <table className="w-full table-auto border-collapse">
            <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
              <tr>
                <th className="min-w-fit px-3 py-2 rounded-tl-md">Order Id</th>
                <th className="min-w-fit px-3 py-2 text-center">Ordered By</th>
                <th className="min-w-fit px-3 py-2 text-center">
                  Product Name
                </th>
                <th className="min-w-fit px-3 py-2 text-center">Amount</th>
                <th className="min-w-fit px-3 py-2 text-center">Total Cost</th>
                <th className="min-w-fit px-3 py-2 text-center">Status</th>
                <th className="min-w-fit px-3 py-2 text-center">
                  Transaction Date
                </th>
                <th className="min-w-fit px-3 py-2 text-center">Updated At</th>
                <th className="min-w-fit px-3 py-2 rounded-tr-md text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-sm text-gray-100 border-b border-b-[#222E3F] sm:text-base">
                <td className="px-3 py-2 text-center">ksi2n125u92n59223</td>
                <td className="px-3 py-2 text-center">Budi</td>
                <td className="px-3 pt-2 text-center line-clamp-2">
                  My Great Book
                </td>
                <td className="px-3 py-2 text-center">3</td>
                <td className="px-3 py-2 text-center">456.000</td>
                <td className="px-3 py-2 text-center">In Transit</td>
                <td className="px-3 py-2 text-center">18/01/2023</td>
                <td className="px-3 py-2 text-center">23/04/2023</td>
                <td className="px-3 py-2 text-xl text-center">
                  <div className="min-w-max flex justify-center gap-3">
                    <button className="min-w-fit h-fit p-2 rounded-md bg-orange-500">
                      <Image
                        src="/assets/icons/edit.png"
                        alt="edit"
                        width={30}
                        height={30}
                      />
                    </button>
                    <button className="min-w-fit h-fit p-2 rounded-md bg-rose-600">
                      <Image
                        src="/assets/icons/delete.png"
                        alt="delete"
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
