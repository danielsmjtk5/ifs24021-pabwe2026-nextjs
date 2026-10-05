import { Suspense } from "react";
import HomePage from "@/features/posts/pages/HomePage";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-[var(--muted)]">Menyiapkan linimasa…</div>}>
      <HomePage />
    </Suspense>
  );
}
