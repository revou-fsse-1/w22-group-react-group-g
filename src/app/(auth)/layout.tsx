export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#19222E]">
      <div className="w-full flex flex-col">{children}</div>
    </div>
  );
}
