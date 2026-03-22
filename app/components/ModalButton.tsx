"use client";
import { useModal } from "./ModalContext";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/** Drop-in replacement for any href="#kontakt" CTA — opens the global MemorandumModal */
export default function ModalButton({ children, className = "" }: Props) {
  const { openModal } = useModal();
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
