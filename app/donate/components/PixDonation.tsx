"use client";

import { useState } from "react";
import { Copy, Check, QrCode } from "lucide-react";

import { cn } from "@/shared/config";

interface PixDonationProps {
  label: string;
  key: string;
  qrCodePlaceholder: string;
}

export const PixDonation = ({
  label,
  key: pixKey,
  qrCodePlaceholder,
}: PixDonationProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <QrCode className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-zinc-100">{label}</h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-zinc-500 mb-2">
            Chave PIX (copie e cole)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={pixKey}
              readOnly
              className="flex-1 px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300 text-xs sm:text-sm font-mono break-all min-w-0"
            />
            <button
              type="button"
              onClick={handleCopy}
              className={cn(
                "p-2 rounded-lg transition-colors",
                copied
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
              )}
              aria-label={copied ? "Copiado!" : "Copiar chave PIX"}
            >
              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm text-zinc-500 mb-2">QR Code</label>
        <div className="bg-white p-4 rounded-lg inline-block">
          <div className="w-48 h-48 bg-zinc-200 flex items-center justify-center rounded">
            <span className="text-zinc-500 text-xs text-center px-2">
              QR Code placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

