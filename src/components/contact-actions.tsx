import { ArrowUpRight, Phone } from "lucide-react";
import { business } from "@/lib/business";

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="whatsapp-icon"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.57-.011-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.99c-.003 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.692 1.448h.005c6.559 0 11.894-5.335 11.897-11.893a11.821 11.821 0 0 0-3.482-8.413Z" />
    </svg>
  );
}

export function ContactActions({ callLabel = "TAKSİ ÇAĞIR", light = false }: { callLabel?: string; light?: boolean }) {
  return <div className={`contact-actions${light ? " actions-light" : ""}`}>
    <a className="button button-primary" href={business.tel}><Phone size={18} aria-hidden="true" />{callLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>
    <a className="button button-secondary whatsapp-action" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Botanik Taksi WhatsApp üzerinden taksi çağır"><WhatsAppIcon size={19} />WHATSAPP&apos;TAN YAZ</a>
  </div>;
}

export function PersistentActions() {
  return <aside aria-label="Sabit iletişim bağlantıları">
    <a className="floating-whatsapp" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Botanik Taksi WhatsApp üzerinden taksi çağır">
      <WhatsAppIcon size={26} />
      <span className="floating-whatsapp-label">WhatsApp&apos;tan Taksi Çağır</span>
    </a>
    <nav className="mobile-actions" aria-label="Hızlı iletişim">
      <a href={business.tel}><Phone size={20} aria-hidden="true" />ARA</a>
      <a className="mobile-whatsapp" href={business.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Botanik Taksi WhatsApp üzerinden taksi çağır"><WhatsAppIcon size={21} />WHATSAPP</a>
    </nav>
  </aside>;
}
