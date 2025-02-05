import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit md:px-10 lg:px-28">
      <div className="flex flex-col">
        <h2 className="text-lg font-medium px-4">Settings</h2>
        <aside className="md:w-40 lg:w-64 md:px-2 lg:px-6 mt-4">
          <nav className="space-y-3">
            <Link
              href="/dashboard/settings/account"
              className="block text-gray-700 hover:text-black text-sm"
            >
              Account
            </Link>
            <Link
              href="/dashboard/settings/change-password"
              className="block text-gray-700 hover:text-black text-sm"
            >
              Change Password
            </Link>
          </nav>
        </aside>
      </div>

      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
