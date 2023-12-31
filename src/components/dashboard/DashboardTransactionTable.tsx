import { DashboardContext } from "@/app/dashboard/layout";
import { API_TRANSACTION } from "@/utils/ApiLinks";
import axios from "axios";
import Image from "next/image";
import { useContext } from "react";
import useSWR from "swr";

type TransactionType = {
  orderId: string;
  orderDate: string;
  orderUsername: string;
  orderStatus: string;
  inventoryName: string;
  amount: number;
  createdAt: string;
  updatedAt: string;
};

export default function DashboardTransactionTable() {
  const { userInventory }: any = useContext(DashboardContext);

  const indonesianCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

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
  const { data, isLoading } = useSWR(API_TRANSACTION, fetcher);

  // Format date
  const displayFormattedDate = (dateTime: string) => {
    const formatDate = new Date(dateTime);

    return `${formatDate.toLocaleDateString()}`;
  };

  // Calculate total price
  const calculateTotalPrice = (inventoryName: string, amount: number) => {
    const currentInventory = userInventory.find(
      (inventory: any) => inventory.inventoryName == inventoryName
    );

    return indonesianCurrency.format(currentInventory.price * amount);
  };

  // Adjust styling based on order status
  const displayOrderStatus = (status: string) => {
    let backgroundColor = "";

    switch (status) {
      case "Awaiting Payment":
        backgroundColor = "bg-red-500";
        break;
      case "In Process":
        backgroundColor = "bg-amber-500";
        break;
      case "Shipping":
        backgroundColor = "bg-cyan-500";
        break;
      case "Delivered":
        backgroundColor = "bg-lime-400";
        break;
      default:
        backgroundColor = "";
    }

    return (
      <td className="px-3 py-2 text-center">
        <div className={`flex items-center justify-center p-3 rounded-2xl bg- ${backgroundColor} bg-opacity-20`}>{status}</div>
      </td>
    );
  };

  return (
    <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
            <tr>
              <th className="min-w-[15rem] px-3 py-2 rounded-tl-md border-r border-r-[#0E141A]">
                Order Id
              </th>
              <th className="min-w-[9rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Ordered By
              </th>
              <th className="min-w-[15rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Product Name
              </th>
              <th className="min-w-[7rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Amount
              </th>
              <th className="min-w-[8rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Total Cost
              </th>
              <th className="min-w-[8rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Status
              </th>
              <th className="min-w-[10rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Transaction Date
              </th>
              <th className="min-w-[10rem] px-3 py-2 text-center border-r border-r-[#0E141A]">
                Updated At
              </th>
              <th className="min-w-[10rem] px-3 py-2 rounded-tr-md text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((transaction: TransactionType) => (
              <tr
                key={transaction.orderId}
                className="text-sm text-gray-100 border-b border-b-[#222E3F] bg-[#222E3F] bg-opacity-0 sm:text-base hover:bg-opacity-40 transition-all"
              >
                <td className="px-3 py-2">
                  <span className="line-clamp-2">{transaction.orderId}</span>
                </td>
                <td className="px-3 py-2">
                  <span className="line-clamp-2">
                    {transaction.orderUsername}
                  </span>
                </td>
                <td className="px-3 pt-2">
                  <span className="line-clamp-2">
                    {transaction.inventoryName}
                  </span>
                </td>
                <td className="px-3 py-2 text-center">{transaction.amount}</td>
                <td className="px-3 py-2 text-center">
                  {userInventory !== undefined
                    ? calculateTotalPrice(
                        transaction.inventoryName,
                        transaction.amount
                      )
                    : "..."}
                </td>
                {displayOrderStatus(transaction.orderStatus)}

                <td className="px-3 py-2 text-center">
                  {displayFormattedDate(transaction.orderDate)}
                </td>
                <td className="px-3 py-2 text-center">
                  {displayFormattedDate(transaction.updatedAt)}
                </td>
                <td className="px-3 py-2 text-xl text-center">
                  <div className="min-w-max flex justify-center gap-3">
                    <a
                      href={`/dashboard/transaction/edit/${transaction.orderId}`}
                    >
                      <button className="min-w-fit h-fit p-2 rounded-md bg-orange-500 bg-opacity-40 hover:bg-opacity-80 transition-all">
                        <Image
                          src="/assets/icons/edit.png"
                          alt="edit"
                          width={30}
                          height={30}
                        />
                      </button>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
