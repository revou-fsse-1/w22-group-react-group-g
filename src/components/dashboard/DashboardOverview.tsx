export default function DashboardOverview() {
  const indonesianCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <section className="w-full flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Overview</h2>
      <div className="w-full grid grid-cols-1 grid-rows-4 gap-5 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1">
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
        <div className="flex flex-col gap-5 px-4 py-3 rounded-md bg-[#0E141A] xl:col-span-2">
          <h3 className="line-clamp-2">Total Earnings</h3>
          <p className="text-3xl line-clamp-1 sm:text-4xl">
            {indonesianCurrency.format(0)}
          </p>
        </div>
      </div>
    </section>
  );
}
