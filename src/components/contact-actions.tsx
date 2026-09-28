import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function ContactActions({ callLabel = "TAKSİ ÇAĞIR", light = false }: { callLabel?: string; light?: boolean }) {
  return <div className={`contact-actions${light ? " actions-light" : ""}`}>
    <a className="button button-primary" href={business.tel}><Phone size={18} aria-hidden="true" />{callLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
    <a className="button button-secondary" href={business.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={19} />WHATSAPP&apos;TAN YAZ</a>
  </div>;
}

export function PersistentActions() {
  return <aside aria-label="Sabit iletişim bağlantıları">
    <a className="floating-whatsapp" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Botanik Taksi WhatsApp üzerinden taksi çağır" title="WhatsApp'tan Taksi Çağır">
      <span className="whatsapp-orb"><WhatsAppIcon size={29} /></span>
    </a>
    <nav className="mobile-actions" aria-label="Hızlı iletişim">
      <a href={business.tel}><Phone size={20} aria-hidden="true" />ARA</a>
      <a href={business.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={21} />WHATSAPP</a>
    </nav>
  </aside>;
}
