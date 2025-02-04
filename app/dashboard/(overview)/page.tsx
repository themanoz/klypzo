// import RevenueChart from "@/app/ui/dashboard/revenue-chart";
// import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { Suspense } from "react";
import Dashboard from "../_components/Dashboard";
// import { RevenueChartSkeleton , LatestInvoicesSkeleton , CardSkeleton } from "@/app/ui/skeletons";
// import CardWrapper from "@/app/ui/dashboard/cards"; 

export default async function Page() {
  return (
    <main>
      <h1>
        Dashboard
      </h1>
      <Dashboard />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        
        {/* <Suspense fallback={<RevenueChartSkeleton />}>
        <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices/>
        </Suspense> */}
      </div>
    </main>
  );
}