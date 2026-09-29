"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { useLocale } from "./locale-provider";

export default function WhatsAppButton() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink(t.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`aurea-whatsapp${visible ? " is-visible" : ""}`}
      aria-label={t.ui.whatsappAria}
    >
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.001 3C9.108 3 3.5 8.607 3.5 15.5c0 2.29.615 4.437 1.688 6.285L3 29l7.4-2.144A12.44 12.44 0 0 0 16 28.5c6.893 0 12.5-5.607 12.5-12.5S22.894 3 16.001 3Z"
          fill="#fff"
        />
        <path
          d="M16.001 3C9.108 3 3.5 8.607 3.5 15.5c0 2.29.615 4.437 1.688 6.285L3 29l7.4-2.144A12.44 12.44 0 0 0 16 28.5c6.893 0 12.5-5.607 12.5-12.5S22.894 3 16.001 3Z"
          stroke="#25d366"
          strokeOpacity="0"
        />
        <path
          d="M22.5 18.3c-.35-.18-2.06-1.02-2.38-1.13-.32-.12-.55-.18-.79.18-.23.35-.9 1.13-1.1 1.36-.2.24-.4.26-.75.09-.35-.18-1.48-.55-2.82-1.75-1.04-.93-1.75-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.42.53-.62.17-.2.23-.35.35-.58.12-.24.06-.44-.03-.62-.09-.18-.79-1.9-1.08-2.6-.28-.68-.57-.59-.79-.6h-.68c-.24 0-.62.09-.94.44-.32.35-1.23 1.2-1.23 2.94 0 1.73 1.26 3.41 1.44 3.65.18.24 2.48 3.79 6.02 5.32.84.36 1.5.58 2.01.74.84.27 1.61.23 2.22.14.68-.1 2.06-.84 2.35-1.66.29-.81.29-1.5.2-1.65-.09-.15-.32-.24-.67-.41Z"
          fill="#25d366"
        />
      </svg>
    </a>
  );
}
