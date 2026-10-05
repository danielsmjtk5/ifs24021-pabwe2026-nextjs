import Link from 'next/link';

export default function Page() {
  return (
    <section className="min-h-screen p-6" aria-labelledby="dashboard-intro-title">
      <h1 id="dashboard-intro-title" className="sr-only">Platform Komunitas Berbagi Baik</h1>

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

        <p className="mt-10 text-center text-xs text-[#52605d]">
          Berbagi dengan baik, tumbuh bersama.
        </p>
      </div>
    </section>
  );
}