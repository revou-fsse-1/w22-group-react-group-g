import Image from "next/image";

type DashboardInventoryTableProps = {
  inventoryList: {
    inventoryId: number;
    inventoryName: string;
    inventoryDesc: string;
    category: string;
    price: number;
    stockAmount: number;
    createdAt: string;
    updatedAt: string;
  }[];
};

export default function DashboardInventoryTable({
  inventoryList,
}: DashboardInventoryTableProps) {
  return (
    <section className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Recent Inventories</h2>
      <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
        <table className="w-full table-auto border-collapse">
          <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
            <tr>
              <th className="min-w-fit px-3 py-2 text-center rounded-tl-md">Inventory Name</th>
              <th className="min-w-fit px-3 py-2 text-center">Description</th>
              <th className="min-w-fit px-3 py-2 text-center">Category</th>
              <th className="min-w-fit px-3 py-2 text-center">Price per Item</th>
              <th className="min-w-fit px-3 py-2 text-center">Stock</th>
              <th className="min-w-fit px-3 py-2 text-center">Created At</th>
              <th className="min-w-fit px-3 py-2 text-center">Updated At</th>
              <th className="min-w-fit px-3 py-2 rounded-tr-md text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {inventoryList.map((inventory) => (
              <tr key={inventory.inventoryId} className="text-sm text-gray-100 border-b border-b-[#222E3F] sm:text-base">
                <td className="px-3 py-2 text-center">{inventory.inventoryName}</td>
                <td className="px-3 pt-2 text-center line-clamp-2">{inventory.inventoryDesc}</td>
                <td className="px-3 py-2 text-center">{inventory.category}</td>
                <td className="px-3 py-2 text-center">{inventory.price}</td>
                <td className="px-3 py-2 text-center">{inventory.stockAmount}</td>
                <td className="px-3 py-2 text-center">{inventory.createdAt}</td>
                <td className="px-3 py-2 text-center">{inventory.updatedAt}</td>
                <td className="px-3 py-2 text-xl text-center">
                  <div className="min-w-max flex justify-center gap-3">
                    <button className="min-w-fit h-fit p-2 rounded-md bg-orange-500 bg-opacity-40 hover:bg-opacity-80 transition-all">
                      <Image
                        src="/assets/icons/edit.png"
                        alt="edit"
                        width={30}
                        height={30}
                      />
                    </button>
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
      </div>
    </section>
  );
}
