import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      <nav className="w-1/6 min-w-fit max-w-sm flex flex-col items-center justify-between px-6 py-6 text-lg text-gray-100 bg-[#0E141A]">
        <div className="min-w-fit w-full max-w-[15rem] h-full flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-5">
              <Logo width="63" height="57" />
              <h2 className="text-2xl font-bold text-[#1371FF]">Minicrate</h2>
            </div>

            <Link href={"/dashboard"}>
              <div className="flex items-center gap-4 px-3 py-3 rounded-md hover:bg-[#222E3F] hover:bg-opacity-40 active:bg-opacity-80 transition-all duration-200">
                <Image
                  src="/assets/icons/dashboard.png"
                  alt="dashboard"
                  width={37}
                  height={37}
                />
                <h2>Dashboard</h2>
              </div>
            </Link>

            <Link href={"/inventory"}>
              <div className="flex items-center gap-4 px-3 py-3 rounded-md hover:bg-[#222E3F] hover:bg-opacity-40 active:bg-opacity-80 transition-all duration-200">
                <Image
                  src="/assets/icons/inventory.png"
                  alt="inventory"
                  width={37}
                  height={37}
                />
                <h2>Inventory</h2>
              </div>
            </Link>

            <Link href={"/transaction"}>
              <div className="flex items-center gap-4 px-3 py-3 rounded-md hover:bg-[#222E3F] hover:bg-opacity-40 active:bg-opacity-80 transition-all duration-200">
                <Image
                  src="/assets/icons/transaction.png"
                  alt="transaction"
                  width={37}
                  height={37}
                />
                <h2>Transaction</h2>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <hr className="h-1 my-1 border-0 bg-[#222E3F]" />

            <div className="flex items-center gap-4 px-3 py-3 rounded-md bg-black bg-opacity-40 hover:bg-opacity-90 transition-all">
              <Image
                src="/assets/icons/avatar.png"
                alt="avatar"
                width={37}
                height={37}
              />
              <h2 className="line-clamp-2">John Doe</h2>
            </div>

            <Link href={"/"}>
              <div className="flex items-center gap-4 px-3 py-3 rounded-md bg-red-600 bg-opacity-20 hover:bg-opacity-60 transition-all">
                <Image
                  src="/assets/icons/logout.png"
                  alt="logout"
                  width={37}
                  height={37}
                />
                <h2>Logout</h2>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}