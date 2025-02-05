import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-fit px-28">
      <div className="flex flex-col">
        <h2 className="text-lg font-medium">Settings</h2>
        <aside className="w-64 px-6 mt-4">
          <nav className="space-y-3">
            <Link
              href="/dashboard/settings/account"
              className="block text-gray-700 hover:text-black"
            >
              Account
            </Link>
            {/* <Link
              href="/dashboard/settings/profile"
              className="block text-gray-700 hover:text-black"
            >
              Profile
            </Link> */}
            <Link
              href="/dashboard/settings/change-password"
              className="block text-gray-700 hover:text-black"
            >
              Change Password
            </Link>
          </nav>
        </aside>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
