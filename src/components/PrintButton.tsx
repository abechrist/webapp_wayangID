"use client";

import React from "react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.print();
        }
      }}
      className="px-5 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface text-sm font-semibold flex items-center gap-2 border border-outline-variant/20 transition-colors cursor-pointer"
    >
      <span className="material-symbols-outlined text-lg text-primary">print</span> Cetak Paspor
    </button>
  );
}
