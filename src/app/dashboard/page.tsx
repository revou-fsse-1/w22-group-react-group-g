import Image from "next/image";

export default function Dashboard() {
  const currentDate = new Date();
  const indonesianCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <main className="w-full flex flex-col p-4 gap-4 text-gray-100 bg-[#19222E]">
      <header className="w-full h-20 flex items-center justify-between px-4 py-3 rounded-md bg-[#0E141A]">
        <div className="w-fit flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-[#222E3F] hover:bg-opacity-40 active:bg-opacity-80 transition-all">
            <Image
              src="/assets/icons/menu.png"
              alt="menu toggle"
              width={35}
              height={35}
            />
          </button>
          <div className="inline-block w-0.5 mr-1 self-stretch bg-[#222E3F]"></div>
          <h1 className="text-3xl">Dashboard</h1>
        </div>

        <div className="p-3 opacity-50 hover:opacity-100 transition-all">
          <time dateTime={currentDate.toISOString()}>
            {currentDate.toLocaleDateString()}
          </time>
        </div>
      </header>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="w-full flex items-center px-4 py-3 gap-4 rounded-md bg-[#0E141A]">
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
        <div className="w-full grid grid-cols-5 grid-rows-1 gap-5">
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Inventory</h3>
            <p className="text-4xl line-clamp-1">0</p>
          </div>
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Transaction</h3>
            <p className="text-4xl line-clamp-1">0</p>
          </div>
          <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Items Sold</h3>
            <p className="text-4xl line-clamp-1">0</p>
          </div>
          <div className="col-span-2 flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A]">
            <h3 className="line-clamp-2">Total Earnings</h3>
            <p className="text-4xl line-clamp-1">{indonesianCurrency.format(0)}</p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Recent Inventories</h2>
        <div className="w-full flex items-center px-4 py-3 gap-4 rounded-md bg-[#0E141A]">
          <h3 className="text-4xl text-orange-400">WORK IN PROGRESS</h3>
        </div>
      </section>

      <section className="w-full flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <div className="w-full flex items-center px-4 py-3 gap-4 rounded-md bg-[#0E141A]">
          <h3 className="text-4xl text-orange-400">WORK IN PROGRESS</h3>
        </div>
      </section>
    </main>
  );
}
