# Botanik Taksi

Amasya Merkez / 55 Evler için tek sayfalık, mobil öncelikli taksi tanıtım ve iletişim sitesi.

## Proje kimliği

- Repository: `https://github.com/frhttaspinar/botanik.git`
- Branch: `main`
- Planlanan production adresi: `https://www.botaniktaksi.com`
- Bu çalışma kapsamında deploy veya DNS değişikliği yapılmaz.

## Geliştirme

Node.js 22 veya üzeri ve npm gerekir. Doğrulanan geliştirme ortamı Node.js 24'tür.

```sh
npm install
npm run dev
```

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Next.js App Router, TypeScript ve Tailwind CSS kullanılır. Ana sayfa, robots.txt, sitemap.xml ve manifest build sırasında statik olarak oluşturulur. `next/image` optimize edilmiş görselleri sunar. İkonlar Lucide React'ten gelir. Veritabanı, API anahtarı veya ortam değişkeni gerekmez.

## İçerik ve iletişim

İşletme bilgileri, telefon, WhatsApp hazır mesajı, FAQ ve JSON-LD `src/lib/business.ts` dosyasında tutulur. Telefon yalnızca `0538 323 30 75`, arama URI'si `tel:+905383233075` olarak kullanılmalıdır. Eski dizin kayıtlarından telefon veya ek hizmet aktarılmamalıdır.

Adres: 55 Evler Mah., Kemalettin Güzeloğlu Sk. No:9/A, 05100 Amasya Merkez / Amasya. Çalışma: 7 gün 24 saat.

## Konum kaynağı

Adres ve harita koordinatlarının kaynağı, Amasya Valiliği tarafından yönetilen [Discover Amasya işletme kaydı](https://www.discoveramasya.com/icerik/190) ve buradaki “Yol Tarifi Al” bağlantısıdır. Erişim tarihi: 28 Eylül 2026.

Kaynağın harita bağlantısı: `https://www.google.com/maps?q=40.66585603003323%2C35.84299323096467`. Bu kayıttaki eski telefon ve ilave hizmetler kullanılmamıştır. Google Maps iframe'i lazy-load edilir; konumun metin adresi ve doğrudan yol tarifi bağlantısı iframe yüklenmese de erişilebilirdir.

## SEO ve erişilebilirlik

- Türkçe belge dili, tek H1, semantik bölümler ve görünür FAQ.
- Canonical, Open Graph, Twitter kartı, sitemap ve robots.
- TaxiService / LocalBusiness, WebSite ve FAQPage JSON-LD.
- Telefon ve WhatsApp için tutarlı NAP verisi ve URL-encoded hazır mesaj.
- Klavye odağı, içeriğe atlama, native FAQ ve mobil menü, reduced-motion desteği.
- Safe-area destekli mobil arama çubuğu ve WhatsApp bağlantısı.
- Sistem fontları; harita dışında üçüncü taraf betik, analiz veya reklam entegrasyonu yok.

Arama motoru indekslenmesi veya AI arama sonuçlarında görünürlük garanti edilmez. Yayın sonrası Search Console ve Bing Webmaster Tools doğrulaması ayrı aşamadır.

## Onaylı logo ve ikonlar

Orijinal `image/logo.JPG` dosyası değiştirilmeden korunur ve `public` altında sunulmaz. Kullanıcı onayıyla yalnızca sol üstteki marka alanı ayrılmıştır. Çıktı `public/images/logo.png` (867 × 496) dosyasıdır; header, hero, footer ve JSON-LD bu kaynağı kullanır. Şeffaf sınır dışındaki afiş pikselleri tamamen temizlenmiştir. Korunan 222.750 logo pikselinin RGB değerleri kaynakla aynıdır; yeniden çizim veya renk değişimi yapılmamıştır.

- Kaynak alan: x=69, y=21; 867 × 496 piksel, marka konturu dışı şeffaf.
- Orijinal SHA-256: `60def03910819d04313bf4a4758913a3547ab32540a40ef0b94e8d8ab2638627`
- Favicon: `src/app/favicon.ico`; aynı logonun palmiye tacından kırpım.
- Uygulama / Apple ikonları: `src/app/icon.png`, `src/app/apple-icon.png`.
- Sosyal paylaşım görseli: `public/images/og.png` (1200 × 630).

OG görseli yalnızca onaylı logo, işletme adı, Amasya Merkez, 7/24, güncel telefon ve production domainini içerir. Afişin diğer yazıları ve iletişim bilgileri aktarılmamıştır.

Yerel doğrulama sonuçları [QA.md](QA.md) dosyasındadır.

## Yayına hazırlık

1. Doğru repository ve branch'i tekrar doğrulayın.
2. `npm ci`, lint, typecheck ve production build çalıştırın.
3. Ayrı deploy onayı sonrasında doğru hosting projesini oluşturun veya bağlayın.
4. Domain ve HTTPS hazır olunca production adresinde metadata, robots, sitemap, görsel yolları ve yönlendirmeleri kontrol edin.
5. HTTP / apex domain için tek adımda `https://www.botaniktaksi.com` yönlendirmesi yapılandırın.
6. Gerçek domain üzerinde Lighthouse, mobil cihaz, arama ve WhatsApp uygulama geçişlerini tekrar kontrol edin.

Yerel Lighthouse ölçümleri gerçek kullanıcı Core Web Vitals verisi değildir. Çalışan bir yayın bulunmadan production doğrulaması yapılamaz.
