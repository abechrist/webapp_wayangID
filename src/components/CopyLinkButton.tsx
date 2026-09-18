"use client";

import React, { useState } from "react";

interface CopyLinkButtonProps {
  url?: string;
}

export default function CopyLinkButton({ url }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error("Gagal menyalin tautan:", e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
        copied
          ? "bg-tertiary-container/30 text-tertiary border-tertiary/40 shadow-[0_0_14px_rgba(101,242,181,0.2)]"
          : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface border-outline-variant/20"
      }`}
      title="Salin tautan paspor digital"
    >
      <span className={`material-symbols-outlined text-lg ${copied ? "text-tertiary" : "text-primary"}`}>
        {copied ? "check_circle" : "share"}
      </span>
      <span>{copied ? "Tautan Tersalin!" : "Salin Paspor"}</span>
    </button>
  );
}
