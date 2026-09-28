# Botanik Taksi — Yerel son QA

Tarih: 28 Eylül 2026. Ortam: Node.js 24.13.1, Next.js 16.3.6, yerel production sunucusu (`next start`). Deploy yapılmadı.

## Kimlik

- Local / Git kökü: `/Users/ferhattaspinar/Downloads/botanik`
- Origin: `https://github.com/frhttaspinar/botanik.git`
- Branch: `main`

## Derleme

- `npm install`: başarılı; audit 0 güvenlik açığı.
- `npm run build`: başarılı; ana sayfa ve metadata rotaları statik üretildi.
- `npm run lint`: başarılı, 0 uyarı.
- `npm run typecheck`: başarılı.

## Lighthouse

Yerel production çıktısı, Chrome, standart Lighthouse mobil ve masaüstü profilleri.

| Profil | Performans | Erişilebilirlik | Best Practices | SEO | CLS | LCP |
| --- | --- | --- | --- | --- | --- | --- |
| Mobil | 97 | 100 | 100 | 100 | 0 | 2,3 sn |
| Masaüstü | 100 | 100 | 100 | 100 | 0 | 0,6 sn |

Bunlar yerel laboratuvar ölçümleridir. Production alan adındaki sonuçlar ve gerçek kullanıcı Core Web Vitals verisi yayın sonrası ölçülmelidir.

## Responsive ve etkileşim

375, 390, 430, 768, 1024 ve 1440 piksel genişliklerinde test edildi. Her genişlikte belge genişliği viewport ile aynı; yatay taşma yok. Üç logo yükleniyor ve alt metinleri `Botanik Taksi Amasya`. Header arama bağlantısı erişilebilir. Mobil alt iletişim çubuğu yalnızca telefon genişliklerinde görünüyor.

Mobil menü seçim sonrası kapanıyor. Escape menüyü kapatıp odağı menü düğmesine döndürüyor. FAQ klavyeyle açılıyor. Reduced-motion tercihinde yumuşak kaydırma kapalı. Masaüstü ve mobil axe-core taramasında 0 ihlal. Production konsolunda uygulama hatası yok.

## İçerik ve SEO

- Tek H1 ve doğru sayfa başlığı.
- Canonical: `https://www.botaniktaksi.com/`.
- Robots: index, follow; sitemap production domainini kullanıyor.
- Open Graph, Twitter kartı ve ikon bağlantıları mevcut.
- JSON-LD parse edildi; TaxiService / LocalBusiness, WebSite ve görünür beş soruyla eşleşen FAQPage mevcut.
- JSON-LD logo yolu: `https://www.botaniktaksi.com/images/logo.png`.
- İç anchor bağlantılarında eksik hedef yok.
- Tüm telefon bağlantıları `tel:+905383233075`.
- Tüm WhatsApp bağlantıları aynı numaraya ve onaylı hazır mesaja gidiyor.
- Kaynak metinlerde başka işletme telefonu veya yasaklanan hizmet ifadeleri bulunmadı.
- Korunan orijinal afiş dışında site varlıklarında afişin diğer telefon/metinleri yok; logo ve OG görseli görsel olarak incelendi.
- Logo, OG, favicon, Apple ikonu, app ikonu, manifest, robots ve sitemap HTTP 200 döndürüyor.
- `/image/logo.JPG` HTTP 404: orijinal afiş sitede sunulmuyor.
- Doku Yazılım bağlantısı HTTP 200.

Telefon görüşmesi başlatılmadı ve WhatsApp mesajı gönderilmedi; URI ve hazır mesaj içerikleri doğrulandı. Gerçek cihazdaki uygulama geçişleri yayın sonrası kontrol edilmelidir.

## Orijinal dosya

`image/logo.JPG` korunmuştur. SHA-256 özeti işlem öncesi ve sonrası aynıdır:

`60def03910819d04313bf4a4758913a3547ab32540a40ef0b94e8d8ab2638627`

Temiz PNG'deki 222.750 opak piksel kaynakla karşılaştırıldı: değişen RGB pikseli 0. Logo yeniden üretilmedi, harfleri değiştirilmedi ve oranı korunuyor.

## Yayın sonrası

Deploy, domain bağlantısı ve DNS değişiklikleri ayrı onaylı aşamadır. Yayın sonrası HTTPS, canonical yönlendirmeleri, canlı domain HTTP kontrolleri, Search Console / Bing sitemap gönderimi ve gerçek cihaz testleri tamamlanmalıdır.
