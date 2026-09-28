"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function MobileMenu({ links }: { links: string[][] }) {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => { if (menu.current) menu.current.open = false; };
  return <details ref={menu} className="mobile-menu" onKeyDown={event => {
    if (event.key === "Escape") { close(); menu.current?.querySelector("summary")?.focus(); }
  }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) close(); }}>
    <summary aria-label="Menüyü aç veya kapat"><span className="menu-lines" aria-hidden="true" /><span>Menü</span></summary>
    <nav aria-label="Mobil menü">{links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={close}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}</nav>
  </details>;
}
