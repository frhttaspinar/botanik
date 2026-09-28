import Image from "next/image";

export function Brand({ hero = false }: { hero?: boolean }) {
  return <Image src="/images/logo.png" alt="Botanik Taksi Amasya" width={867} height={496} sizes={hero ? "(max-width: 767px) 85vw, (max-width: 1100px) 40vw, 490px" : "144px"} className={hero ? "brand-image brand-hero" : "brand-image"} preload={hero} />;
}
