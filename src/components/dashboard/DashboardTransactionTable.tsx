import Image from "next/image";

type DashboardTransactionTableProps = {
  transactionList: {
    orderId: string;
    orderDate: string;
    orderUsername: string;
    orderStatus: string;
    inventoryName: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
  }[];
};

export default function DashboardTransactionTable({
  transactionList,
}: DashboardTransactionTableProps) {
  return (
    <section className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      <div className="w-full overflow-x-auto flex items-center p-4 gap-4 rounded-md bg-[#0E141A]">
        <table className="w-full table-auto border-collapse">
          <thead className="text-left text-gray-100 text-sm bg-opacity-40 bg-[#0051CC] sm:text-base">
            <tr>
              <th className="min-w-fit px-3 py-2 rounded-tl-md">Order Id</th>
              <th className="min-w-fit px-3 py-2 text-center">Ordered By</th>
              <th className="min-w-fit px-3 py-2 text-center">Product Name</th>
              <th className="min-w-fit px-3 py-2 text-center">Amount</th>
              <th className="min-w-fit px-3 py-2 text-center">Total Cost</th>
              <th className="min-w-fit px-3 py-2 text-center">Status</th>
              <th className="min-w-fit px-3 py-2 text-center">Transaction Date</th>
              <th className="min-w-fit px-3 py-2 text-center">Updated At</th>
              <th className="min-w-fit px-3 py-2 rounded-tr-md text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactionList.map(transaction => (
              <tr key={transaction.orderId} className="text-sm text-gray-100 border-b border-b-[#222E3F] sm:text-base">
              <td className="px-3 py-2 text-center">{transaction.orderId}</td>
              <td className="px-3 py-2 text-center">{transaction.orderUsername}</td>
              <td className="px-3 pt-2 text-center line-clamp-2">{transaction.inventoryName}</td>
              <td className="px-3 py-2 text-center">{transaction.amount}</td>
              <td className="px-3 py-2 text-center">452.000 {/* should get price from db & calculate price */}</td>
              <td className="px-3 py-2 text-center">{transaction.orderStatus}</td>
              <td className="px-3 py-2 text-center">{transaction.orderDate}</td>
              <td className="px-3 py-2 text-center">{transaction.updatedAt}</td>
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
