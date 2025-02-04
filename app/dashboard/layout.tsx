import SideBar from "@/components/sections/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full">
        <SideBar />
      </div>

      <div className="px-10 py-6">
        {children}
      </div>
    </div>
  );
}
