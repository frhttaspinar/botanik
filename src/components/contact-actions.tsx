import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/business";

export function ContactActions({ callLabel = "TAKSİ ÇAĞIR", light = false }: { callLabel?: string; light?: boolean }) {
  return <div className={`contact-actions${light ? " actions-light" : ""}`}>
    <a className="button button-primary" href={business.tel}><Phone size={18} aria-hidden="true" />{callLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
    <a className="button button-secondary" href={business.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} aria-hidden="true" />WHATSAPP&apos;TAN YAZ</a>
  </div>;
}

export function PersistentActions() {
  return <aside aria-label="Sabit iletişim bağlantıları">
    <a className="floating-whatsapp" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Botanik Taksi'ye WhatsApp üzerinden yazın"><MessageCircle size={25} aria-hidden="true" /><span>WhatsApp</span></a>
    <nav className="mobile-actions" aria-label="Hızlı iletişim">
      <a href={business.tel}><Phone size={20} aria-hidden="true" />ARA</a>
      <a href={business.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} aria-hidden="true" />WHATSAPP</a>
    </nav>
  </aside>;
}
