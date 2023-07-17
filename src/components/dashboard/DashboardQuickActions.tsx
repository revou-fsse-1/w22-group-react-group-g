import Image from "next/image";

export default function DashboardQuickActions() {
  return (
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
  );
}
