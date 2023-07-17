import Image from "next/image";
import { useContext } from "react";
import { DashboardContext } from "@/app/dashboard/layout";

type DashboardContextType = {
  displayPanel: boolean;
  setDisplayPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

type DashboardHeaderProps = {
  headerTitle: string;
}

export default function DashboardHeader({ headerTitle }: DashboardHeaderProps) {
  const { displayPanel, setDisplayPanel } = useContext<any | DashboardContextType>(DashboardContext);
  const currentDate = new Date();

  return (
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
        <h1 className="text-xl md:text-3xl">{headerTitle}</h1>
      </div>

      <div className="hidden p-2 opacity-50 text-xs md:p-3 sm:block md:text-base hover:opacity-100 transition-all">
        <time dateTime={currentDate.toISOString()}>
          {currentDate.toLocaleDateString()}
        </time>
      </div>
    </header>
  );
}
