export const business = {
  name: "Botanik Taksi",
  url: "https://www.botaniktaksi.com",
  phone: "0538 323 30 75",
  telephone: "+905383233075",
  tel: "tel:+905383233075",
  whatsapp: "https://wa.me/905383233075?text=Merhaba%20Botanik%20Taksi%2C%20Amasya%20Merkez%27de%20taksi%20%C3%A7a%C4%9F%C4%B1rmak%20istiyorum",
  street: "Kemalettin Güzeloğlu Sk. No:9/A",
  neighborhood: "55 Evler Mah.",
  locality: "Amasya Merkez",
  region: "Amasya",
  postalCode: "05100",
  // Amasya Valiliği / Discover Amasya business record, accessed 2026-09-28.
  // https://www.discoveramasya.com/icerik/190 -> Yol Tarifi Al
  latitude: 40.66585603003323,
  longitude: 35.84299323096467,
  directions: "https://www.google.com/maps/dir/?api=1&destination=40.66585603003323%2C35.84299323096467",
  mapEmbed: "https://www.google.com/maps?q=40.66585603003323%2C35.84299323096467&z=16&output=embed",
} as const;

export const faqs = [
  { question: "Botanik Taksi nerede?", answer: "Botanik Taksi, 55 Evler Mahallesi, Kemalettin Güzeloğlu Sokak No:9/A, 05100 Amasya Merkez / Amasya adresindedir." },
  { question: "Botanik Taksi'nin telefon numarası nedir?", answer: "Botanik Taksi'nin telefon numarası 0538 323 30 75'tir. Bu numaradan arayabilir veya WhatsApp üzerinden ulaşabilirsiniz." },
  { question: "Botanik Taksi 7/24 açık mı?", answer: "Evet. Botanik Taksi'ye haftanın 7 günü, günün 24 saati telefon veya WhatsApp üzerinden ulaşabilirsiniz." },
  { question: "Amasya Merkez'de Botanik Taksi nasıl çağrılır?", answer: "0538 323 30 75'i arayarak veya WhatsApp'tan konumunuzu paylaşarak taksi talebinizi iletebilirsiniz." },
  { question: "Botanik Taksi'ye WhatsApp üzerinden ulaşabilir miyim?", answer: "Evet. Sayfadaki WhatsApp butonlarına dokunarak Botanik Taksi'ye mesaj gönderebilirsiniz." },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TaxiService", "LocalBusiness"],
      "@id": `${business.url}/#business`,
      name: business.name,
      url: `${business.url}/`,
      description: "Amasya Merkez 55 Evler'de 7/24 hizmet veren yerel taksi durağı. Telefon ve WhatsApp ile iletişim.",
      telephone: business.telephone,
      logo: `${business.url}/images/logo.png`,
      image: `${business.url}/images/logo.png`,
      address: { "@type": "PostalAddress", streetAddress: business.street, addressLocality: business.locality, addressRegion: business.region, postalCode: business.postalCode, addressCountry: "TR" },
      areaServed: { "@type": "Place", name: "Amasya Merkez" },
      geo: { "@type": "GeoCoordinates", latitude: business.latitude, longitude: business.longitude },
      hasMap: business.directions,
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" }],
      contactPoint: { "@type": "ContactPoint", telephone: business.telephone, contactType: "Taksi çağırma", availableLanguage: "Turkish", areaServed: "Amasya Merkez" },
    },
    { "@type": "WebSite", "@id": `${business.url}/#website`, url: `${business.url}/`, name: business.name, inLanguage: "tr-TR", publisher: { "@id": `${business.url}/#business` } },
    { "@type": "FAQPage", "@id": `${business.url}/#sikca-sorulan-sorular`, mainEntity: faqs.map(({question, answer}) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};
