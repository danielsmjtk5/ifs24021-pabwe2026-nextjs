import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      {/* Memenuhi standar Accessibility: Level-one heading */}
      <h1 className="sr-only">Platform Komunitas Berbagi Baik</h1>

      <div className="mx-auto max-w-md">
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          Gabung dengan komunitas yang senang berbagi hal baik.
        </p>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          Sudah punya akun?{' '}
          <Link className="font-extrabold text-[var(--green)] hover:underline" href="/auth/login">
            Masuk
          </Link>
        </p>

        {/* Perbaikan: Ganti #a2aca6 ke #52605d untuk rasio kontras yang aman (5.1:1) */}
        <p className="mt-10 text-center text-xs text-[#52605d]">
          Berbagi dengan baik, tumbuh bersama.
        </p>
      </div>
    </main>
  );
}