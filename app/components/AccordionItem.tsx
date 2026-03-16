"use client";
import { useState } from "react";

export default function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-800 hover:bg-green-50 transition-colors"
      >
        <span>{q}</span>
        <span
          className="text-2xl transition-transform duration-300 text-green-700 flex-shrink-0 ml-4"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px" }}
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
