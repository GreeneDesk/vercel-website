import theY from "@/assets/logos/the-y.png";
import willoughby from "@/assets/logos/willoughby-leisure.png";
import wodonga from "@/assets/logos/wodonga.png";
import waimakariri from "@/assets/logos/waimakariri.png";
import queenstown from "@/assets/logos/queenstown-lakes.png";
import selwyn from "@/assets/logos/selwyn.png";
import aquazone from "@/assets/logos/aquazone.png";
import kingstonactive from "@/assets/logos/kingstonactive.png";
import kaiapoi from "@/assets/logos/kaiapoi-aquatic.png";
import stawell from "@/assets/logos/stawell.png";
import macquarie from "@/assets/logos/macquarie-uni.png";
import reservoir from "@/assets/logos/reservoir-leisure.png";
import desRenford from "@/assets/logos/des-renford.png";
import eastGippsland from "@/assets/logos/east-gippsland.png";
import aqualink from "@/assets/logos/aqualink.png";
import bellarine from "@/assets/logos/bellarine.png";
import activeMonash from "@/assets/logos/active-monash.png";
import ballarat from "@/assets/logos/ballarat-aquatic.png";
import leisureCity from "@/assets/logos/leisure-city.png";
import joondalup from "@/assets/logos/joondalup.png";
import waves from "@/assets/logos/waves.png";
import aquadome from "@/assets/logos/aquadome.png";
import bassCoast from "@/assets/logos/bass-coast.png";
import leisurelink from "@/assets/logos/leisurelink.png";
import greaterGeelong from "@/assets/logos/greater-geelong.png";
import northcoteDarebin from "@/assets/logos/northcote-darebin.png";

const logos = [
  { src: theY, alt: "The Y (YMCA)" },
  { src: willoughby, alt: "Willoughby Leisure Centre" },
  { src: wodonga, alt: "Wodonga Sports & Leisure Centre" },
  { src: waimakariri, alt: "Waimakariri District Council" },
  { src: queenstown, alt: "Queenstown Lakes District Council" },
  { src: selwyn, alt: "Selwyn District Council" },
  { src: aquazone, alt: "AquaZone Aquatic Leisure Centre" },
  { src: kingstonactive, alt: "KingstonActive" },
  { src: kaiapoi, alt: "Kaiapoi Aquatic Centre" },
  { src: stawell, alt: "Stawell Sports & Aquatic Centre" },
  { src: macquarie, alt: "Macquarie University" },
  { src: reservoir, alt: "Reservoir Leisure Centre" },
  { src: desRenford, alt: "Des Renford Leisure Centre" },
  { src: eastGippsland, alt: "East Gippsland Shire Council" },
  { src: aqualink, alt: "Aqualink" },
  { src: bellarine, alt: "Bellarine Aquatic & Sports Centre" },
  { src: activeMonash, alt: "Active Monash" },
  { src: ballarat, alt: "Ballarat Aquatic & Lifestyle Centre" },
  { src: leisureCity, alt: "Leisure City" },
  { src: joondalup, alt: "City of Joondalup" },
  { src: waves, alt: "Waves Leisure Centre" },
  { src: aquadome, alt: "AquaDome" },
  { src: bassCoast, alt: "Bass Coast Aquatic & Leisure Centre" },
  { src: leisurelink, alt: "Leisurelink Aquatic & Recreation Centre" },
  { src: greaterGeelong, alt: "City of Greater Geelong" },
  { src: northcoteDarebin, alt: "Northcote Aquatic & Recreation Centre (City of Darebin)" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 md:py-16 bg-surface-section">
      <div className="container-wide">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
          Trusted by leisure centres, councils &amp; aquatic facilities
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center h-24 px-4 py-3 rounded-xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="max-h-12 max-w-[140px] w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          A sample of the leisure centres, councils &amp; aquatic facilities we work with across Australia and New Zealand.
        </p>
      </div>
    </section>
  );
}
