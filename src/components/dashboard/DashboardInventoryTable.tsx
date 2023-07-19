import { API_INVENTORY } from "@/utils/ApiLinks";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

type InventoryType = {
  inventoryId: number;
  inventoryName: string;
  inventoryDesc: string;
  category: string;
  price: number;
  stockAmount: number;
  createdAt: string;
  updatedAt: string;
};

export default function DashboardInventoryTable() {
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
  const { data, isLoading, error } = useSWR(API_INVENTORY, fetcher);

  return (
    <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
            <tr>
              <th className="min-w-[15rem] px-3 py-2 text-center rounded-tl-md">
                Inventory Name
              </th>
              <th className="min-w-[20rem] px-3 py-2 text-center">Description</th>
              <th className="min-w-[8rem] px-3 py-2 text-center">Category</th>
              <th className="min-w-[12rem] px-3 py-2 text-center">
                Price per Item
              </th>
              <th className="min-w-[7rem] px-3 py-2 text-center">Stock</th>
              <th className="min-w-[10rem] px-3 py-2 text-center">Created At</th>
              <th className="min-w-[10rem] px-3 py-2 text-center">Updated At</th>
              <th className="min-w-[10rem] px-3 py-2 rounded-tr-md text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((inventory: InventoryType) => (
              <tr
                key={inventory.inventoryId}
                className="text-sm text-gray-100 border-b border-b-[#222E3F] bg-[#222E3F] bg-opacity-0 sm:text-base hover:bg-opacity-40 transition-all"
              >
                <td className="px-3 py-2">
                  <span className="line-clamp-3">{inventory.inventoryName}</span>
                </td>
                <td className="px-3 py-2">
                  <span className="line-clamp-3">
                    {inventory.inventoryDesc}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="line-clamp-3">{inventory.category}</span>
                </td>
                <td className="px-3 py-2 text-center">{inventory.price}</td>
                <td className="px-3 py-2 text-center">
                  {inventory.stockAmount}
                </td>
                <td className="px-3 py-2 text-center">{inventory.createdAt}</td>
                <td className="px-3 py-2 text-center">{inventory.updatedAt}</td>
                <td className="px-3 py-2 text-xl text-center">
                  <div className="min-w-max flex justify-center gap-3">
                    <Link
                      href={`/dashboard/inventory/edit/${inventory.inventoryId}`}
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
