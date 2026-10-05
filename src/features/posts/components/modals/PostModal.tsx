"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useInput } from "@/hooks/useInput";

export default function PostModal({
  open,
  initialValue = "",
  title,
  busy = false,
  onClose,
  onSubmit,
}: {
  open: boolean;
  initialValue?: string;
  title: string;
  busy?: boolean;
  onClose: () => void;
  onSubmit: (description: string) => void;
}) {
  const { value, onChange, setValue } = useInput(initialValue);
  useEffect(() => setValue(initialValue), [initialValue, open, setValue]);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-[#10211f]/45 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <form
        className="w-full max-w-lg rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          if (value.trim()) onSubmit(value.trim());
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[var(--green)]">Ruang berbagi</p><h2 className="mt-1 text-xl font-extrabold">{title}</h2></div>
          <button type="button" onClick={onClose} aria-label="Tutup" className="grid size-10 place-items-center rounded-full bg-[#f4f6f3] text-xl"><FiX /></button>
        </div>
        <label htmlFor="post-description" className="mb-2 block text-sm font-bold">Apa yang ingin kamu ceritakan?</label>
        <textarea id="post-description" required rows={6} maxLength={2000} placeholder="Mulai ceritamu di sini…" value={value} onChange={onChange} className="w-full resize-none rounded-2xl border border-[var(--line)] bg-[#fbfcfa] p-4 text-sm leading-6 outline-none transition focus:border-[var(--green)] focus:ring-4 focus:ring-[#146a5614]" />
        <div className="mt-2 text-right text-xs text-[var(--muted)]">{value.length}/2000</div>
        <div className="mt-6 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--muted)] hover:bg-[#f4f6f3]">Batal</button>
          <button disabled={busy || !value.trim()} className="rounded-xl bg-[var(--green)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0f5948] disabled:opacity-50">{busy ? "Menyimpan…" : "Publikasikan"}</button>
        </div>
      </form>
    </div>
  );
}
