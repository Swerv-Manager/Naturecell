// Catalogue + campaign for the Black Week mockup. List prices from the NatureCell design system (naturecell.dk).
// Black Week prices are a PROPOSAL (25% on singles, 25% on Sampakker) – to be confirmed by NatureCell before launch.
// Per prisoplysningsbekendtgørelsen § 9 a the "Førpris" shown must be the lowest price in the 30 days before the campaign.
const P = 'products/';
const bw = (price, pct) => Math.round(price * (1 - pct / 100));
const raw = [
  { id: 'skin-oil', name: 'CBD Hudpleje Olie', strength: '1000 mg', size: '30 ml', eyebrow: 'CBD Skin Care', price0: 499, pct: 25, img: P + 'skin-oil.webp', hires: P + 'skin-oil-hires.webp', hero: true, badge: 'badges/vidunder-olien.svg', nickname: 'Vidunder Olien',
    claim: 'Efterlader huden blød, velplejet og smuk – til alle hudtyper.', notes: 'CBD i samspil med MCT-olie. Absorberes hurtigt og fedter ikke.' },
  { id: 'day-cream', name: 'CBD Dagcreme', size: '50 ml', eyebrow: 'CBD Skin Care', price0: 399, pct: 25, img: P + 'day-cream.webp', hires: P + 'day-cream-hires.webp',
    claim: 'Let dagcreme med CBD, aloe vera og sheasmør til en glat og velplejet hud.' },
  { id: 'night-cream', name: 'CBD Natcreme', size: '50 ml', eyebrow: 'CBD Skin Care', price0: 449, pct: 25, img: P + 'night-cream.webp', hires: P + 'night-cream-bottle-hires.webp',
    claim: 'Nærende natcreme med mandelolie og squalane, der understøtter hudens naturlige fugt.' },
  { id: 'serum', name: 'CBD Hyaluronic Serum', size: '30 ml', eyebrow: 'CBD Skin Care', price0: 299, pct: 25, img: P + 'hyaluron-serum.webp', hires: P + 'hyaluron-serum-hires.webp',
    claim: 'Fugtboostende serum med hyaluronsyre og CBD til et udhvilet hududtryk.' },
  { id: 'cleansing-gel', name: 'CBD Rensegel', size: '100 ml', eyebrow: 'CBD Skin Care', price0: 299, pct: 25, img: P + 'cleansing-gel.webp', hires: P + 'cleansing-gel-bottle-hires.webp',
    claim: 'Mild ansigtsrens, der renser og samtidig bevarer hudens fugtbalance.' },
  { id: 'body-lotion', name: 'CBD Bodylotion', size: '200 ml', eyebrow: 'CBD Skin Care', price0: 249, pct: 25, img: P + 'body-lotion.webp',
    claim: 'Trækker hurtigt ind og efterlader kroppen blød. Giver intensiv fugtighed til tør hud.' },
  { id: 'shampoo', name: 'CBD Shampoo', strength: '750 mg', size: '300 ml', eyebrow: 'CBD Hair Care', price0: 199, pct: 25, img: P + 'shampoo.webp',
    claim: 'Mild shampoo uden unødvendige ingredienser – til hele familien.' },
  { id: 'komplet-pakken', name: 'Komplet Pakken', size: 'Rens · Dag · Nat · Olie', eyebrow: 'Sampakke', price0: 1198, valueLoose: 1646, pct: 25, img: P + 'startpakke-plus.webp', bundle: true, badge: 'badges/komplet-pakken.svg',
    contains: ['cleansing-gel', 'day-cream', 'night-cream', 'skin-oil'], claim: 'Hele rutinen, morgen og aften – fire produkter i én pakke.' },
  { id: 'all-day-facial', name: 'All Day Facial', size: 'Rens · Dag · Nat', eyebrow: 'Sampakke', price0: 860, valueLoose: 1147, pct: 25, img: P + 'all-day-facial.webp', bundle: true, badge: 'badges/all-day-facial.svg',
    contains: ['cleansing-gel', 'day-cream', 'night-cream'], claim: 'Den daglige ansigtsrutine samlet – rens, dag og nat.' },
  { id: 'lip-balm', name: 'CBD Lip Balm', size: '', eyebrow: 'Gave', price0: 79, pct: 0, img: null, gift: true, claim: 'Gratis ved køb over 699 kr.' },
];
export const products = raw.map(p => ({ ...p, price: bw(p.price0, p.pct), save: p.price0 - bw(p.price0, p.pct) }));
export const campaign = {
  name: 'Black Week',
  startsAt: '2026-11-23T00:00:00+01:00',
  endsAt: '2026-11-30T23:59:59+01:00',
  headlinePct: 25,                  // "25% på hele hudplejeserien" (proposal)
  giftThreshold: 699, giftId: 'lip-balm', giftValue: 79,
  freeShipping: 399,
  code: null,                       // automatic discount, no code needed
};
