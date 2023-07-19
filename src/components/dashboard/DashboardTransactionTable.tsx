import { API_TRANSACTION } from "@/utils/ApiLinks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
  // Fetch handler
  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        console.log(data.data);
        return data.data;
      });
  const { data, isLoading, error } = useSWR(API_TRANSACTION, fetcher);

  return (
    <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
            <tr>
              <th className="min-w-[10rem] px-3 py-2 rounded-tl-md">Order Id</th>
              <th className="min-w-[7rem] px-3 py-2 text-center">Ordered By</th>
              <th className="min-w-[15rem] px-3 py-2 text-center">Product Name</th>
              <th className="min-w-[7rem] px-3 py-2 text-center">Amount</th>
              <th className="min-w-[8rem] px-3 py-2 text-center">Total Cost</th>
              <th className="min-w-[8rem] px-3 py-2 text-center">Status</th>
              <th className="min-w-[10rem] px-3 py-2 text-center">
                Transaction Date
              </th>
              <th className="min-w-[10rem] px-3 py-2 text-center">Updated At</th>
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
                <td className="px-3 py-2 text-center">452.000</td>
                <td className="px-3 py-2 text-center">
                  {transaction.orderStatus}
                </td>
                <td className="px-3 py-2 text-center">
                  {transaction.orderDate}
                </td>
                <td className="px-3 py-2 text-center">
                  {transaction.updatedAt}
                </td>
                <td className="px-3 py-2 text-xl text-center">
                  <div className="min-w-max flex justify-center gap-3">
                    <Link
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
                    </Link>

                    <button className="min-w-fit h-fit p-2 rounded-md bg-rose-600 bg-opacity-40 hover:bg-opacity-80 transition-all">
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
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
