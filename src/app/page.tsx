import { ArrowDown, ArrowRight, ArrowUpRight, CarFront, Check, Clock3, MapPin, MessageCircle, Navigation, Phone, Plus } from "lucide-react";
import { Brand } from "@/components/brand";
import { ContactActions, PersistentActions } from "@/components/contact-actions";
import { MobileMenu } from "@/components/mobile-menu";
import { business, faqs, structuredData } from "@/lib/business";

const navigation = [["Ana Sayfa", "ana-sayfa"], ["Hakkımızda", "hakkimizda"], ["Hizmet", "hizmet"], ["Konum", "konum"], ["İletişim", "iletisim"]];
const services = [
  { icon: Clock3, title: "7/24 Taksi", text: "Amasya Merkez'de günün her saatinde Botanik Taksi'ye ulaşabilirsiniz.", label: "GÜNÜN HER SAATİNDE" },
  { icon: MapPin, title: "Amasya Merkez", text: "55 Evler ve Amasya Merkez çevresinde taksi ihtiyacınız için iletişime geçebilirsiniz.", label: "ŞEHRİNİZDE, YAKININIZDA" },
  { icon: MessageCircle, title: "Kolay İletişim", text: "Tek dokunuşla telefonla arayın veya WhatsApp üzerinden ulaşın.", label: "BİR TELEFON KADAR YAKIN" },
];

function Address() { return <address>{business.neighborhood}<br />{business.street}<br />{business.postalCode} {business.locality} / {business.region}</address>; }
function Answer({ text }: { text: string }) {
  return text.split(business.phone).map((part, index) => <span key={index}>{index > 0 && <a href={business.tel}>{business.phone}</a>}{part}</span>);
}

export default function Home() {
  return <>
    <a href="#main" className="skip-link">İçeriğe geç</a>
    <script id="business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-link" href="#ana-sayfa" aria-label="Botanik Taksi ana sayfa"><Brand /></a>
        <nav className="desktop-nav" aria-label="Ana menü">{navigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
        <a className="button header-call" href={business.tel}><Phone size={17} aria-hidden="true" /><span>HEMEN ARA</span></a>
        <MobileMenu links={navigation} />
      </div>
    </header>
    <main id="main">
      <section className="hero container" id="ana-sayfa" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" />AMASYA MERKEZ · 7 GÜN 24 SAAT</div>
          <h1 id="hero-title">Botanik Taksi | Amasya Merkez</h1>
          <p className="hero-headline">Amasya&apos;da<br /><span>Güvenli</span><br />Yolculuk<span className="accent-dot">.</span></p>
          <p className="hero-description">Amasya Merkez&apos;de 7/24 ulaşım için Botanik Taksi bir telefon kadar yakın.</p>
          <ContactActions />
          <div className="hero-signals"><span><Clock3 size={16} aria-hidden="true" />7/24 Hizmet</span><span><MapPin size={16} aria-hidden="true" />Amasya Merkez</span><span><Phone size={16} aria-hidden="true" />Tek Tıkla Ara</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-caption"><span>ŞEHRİNİZİN TAKSİSİ</span><CarFront size={23} aria-hidden="true" /></div>
          <div className="brand-stage"><Brand hero /></div>
          <div className="journey-card">
            <div className="journey-header"><span>HER YOLCULUK BİR MERHABA İLE BAŞLAR.</span><ArrowUpRight size={23} aria-hidden="true" /></div>
            <div className="journey-route"><div className="route-rail" aria-hidden="true"><i /><span /><MapPin size={19} /></div><div><span className="small-label">BULUŞMA NOKTAMIZ</span><strong>55 Evler, Amasya</strong><span className="route-destination">Siz arayın, yola birlikte çıkalım.</span></div></div>
            <div className="journey-bottom"><span><span className="status-dot" />7/24 ulaşabilirsiniz</span><a href={business.tel} aria-label="Botanik Taksi'yi arayın"><Phone size={20} aria-hidden="true" /></a></div>
          </div>
          <div className="visual-footnote"><span>YEREL. SAMİMİ. BİR TELEFON UZAĞINIZDA.</span><span>05 / AMASYA</span></div>
        </div>
      </section>
      <div className="intro-strip container"><p>Günün her saatinde, <strong>aynı tanıdık durak.</strong></p><a href="#hakkimizda">Botanik Taksi&apos;yi tanıyın<ArrowDown size={17} aria-hidden="true" /></a></div>
      <section className="section container about" id="hakkimizda" aria-labelledby="about-title">
        <div><p className="eyebrow">BİZİ TANIYIN</p><h2 id="about-title">Amasya&apos;dan,<br /><span>sizin için.</span></h2></div>
        <div className="about-copy"><p className="lead">Mahallenizden başlayan yolculuklarda,<br className="desktop-break" /> bir telefon kadar yakınınızdayız.</p><p>Botanik Taksi, Amasya Merkez 55 Evler bölgesinde hizmet veren yerel bir taksi durağıdır. Günlük ulaşım ihtiyacınız için günün her saatinde bize telefon veya WhatsApp üzerinden kolayca ulaşabilirsiniz.</p><p>Bulunduğunuz yeri ve gitmek istediğiniz noktayı paylaşmanız yeterli. Amasya Merkez&apos;de taksi ihtiyacınız olduğunda iletişim bilgilerimiz her zaman elinizin altında.</p><a className="text-link" href="#iletisim">İletişim bilgilerimiz<ArrowRight size={18} aria-hidden="true" /></a></div>
      </section>
      <section className="services-section" id="hizmet" aria-labelledby="services-title"><div className="container section">
        <div className="section-heading"><div><p className="eyebrow">BOTANİK TAKSİ İLE</p><h2 id="services-title">Ulaşımınız kolaylaşsın.</h2></div><p>Gündüz ya da gece.<br />Amasya Merkez&apos;de yanınızdayız.</p></div>
        <div className="service-grid">{services.map(({icon: Icon, title, text, label}, index) => <article className="service-card" key={title}><div className="service-top"><span className="icon-box"><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span><span className="card-number">0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><span className="card-label">{label}</span></article>)}</div>
        <div className="why-row"><h3>Neden Botanik Taksi?</h3><ul>{["7/24 iletişim", "Yerel hizmet", "Amasya Merkez", "Telefonla ulaşım", "WhatsApp iletişimi"].map(item => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul></div>
      </div></section>
      <section className="container callout" aria-labelledby="callout-title"><div className="callout-copy"><p className="eyebrow">YOLA ÇIKMAYA HAZIR MISINIZ?</p><h2 id="callout-title">Taksi mi lazım?</h2><p>Botanik Taksi&apos;yi hemen arayın.</p></div><div className="callout-actions"><a className="big-phone" href={business.tel}>{business.phone}<ArrowUpRight size={30} aria-hidden="true" /></a><ContactActions callLabel="HEMEN ARA" light /></div></section>
      <section className="container section location" id="konum" aria-labelledby="location-title"><div className="location-copy"><p className="eyebrow">DURAĞIMIZA BEKLERİZ</p><h2 id="location-title">Botanik Taksi<br />Nerede?</h2><p>55 Evler&apos;de, Amasya&apos;nın içinde.</p><div className="address-block"><MapPin size={23} aria-hidden="true" /><Address /></div><a className="button button-secondary" href={business.directions} target="_blank" rel="noopener noreferrer"><Navigation size={17} aria-hidden="true" />YOL TARİFİ AL<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="map-card"><iframe title="Botanik Taksi, 55 Evler Amasya konumu" src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="map-caption"><span><span className="status-dot" />BOTANİK TAKSİ</span><span>55 Evler · Amasya Merkez</span></div></div></section>
      <section className="faq-section" id="sikca-sorulan-sorular" aria-labelledby="faq-title"><div className="container section faq-layout"><div><p className="eyebrow">AKLINIZDAKİ SORULAR</p><h2 id="faq-title">Yola çıkmadan<br />önce.</h2><p>Botanik Taksi hakkında<br />merak ettikleriniz.</p><a className="text-link" href={business.tel}>Bize ulaşın<ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="faq-list">{faqs.map(({question, answer}, index) => <details key={question}><summary><span className="faq-number">0{index + 1}</span><h3>{question}</h3><Plus size={20} aria-hidden="true" /></summary><p><Answer text={answer} /></p></details>)}</div></div></section>
      <section className="container section contact-section" id="iletisim" aria-labelledby="contact-title"><div><p className="eyebrow">İLETİŞİM</p><h2 id="contact-title">Bir merhaba,<br /><span>bir yolculuk.</span></h2><ContactActions callLabel="HEMEN ARA" /></div><div className="contact-details"><p className="contact-name">BOTANİK TAKSİ</p><a className="contact-phone" href={business.tel}><Phone size={20} aria-hidden="true" />{business.phone}</a><Address /><p className="hours"><Clock3 size={18} aria-hidden="true" />7 gün 24 saat</p><a className="text-link" href={business.directions} target="_blank" rel="noopener noreferrer">YOL TARİFİ AL<ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
    </main>
    <footer className="site-footer"><div className="container footer-main"><a className="footer-brand" href="#ana-sayfa" aria-label="Botanik Taksi ana sayfa"><Brand /></a><div><strong>Botanik Taksi</strong><p>Amasya Merkez Taksi</p></div><a href={business.tel}><Phone size={16} aria-hidden="true" />{business.phone}</a><span>© {new Date().getFullYear()} Botanik Taksi.<br />Tüm hakları saklıdır.</span></div><div className="footer-credit container">Web Tasarım: <a href="https://www.dokuyazilim.com" target="_blank" rel="noopener noreferrer">Doku Yazılım<ArrowUpRight size={13} aria-hidden="true" /></a></div></footer>
    <PersistentActions />
  </>;
}
