/* Product data. Prices, specs and sizing are drafts until supplier specs are final. */
const ART = {
  collar:'<svg viewBox="0 0 200 140" aria-hidden="true"><ellipse cx="100" cy="70" rx="58" ry="40" fill="none" stroke="#16211A" stroke-width="12"/><rect x="88" y="102" width="24" height="18" rx="5" fill="#16211A"/></svg>',
  leash:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M40 110 Q70 30 130 60 T170 30" fill="none" stroke="#16211A" stroke-width="10" stroke-linecap="round"/><circle cx="170" cy="30" r="10" fill="#16211A"/></svg>',
  harness:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M60 40 Q100 20 140 40 L150 90 Q100 115 50 90 Z" fill="none" stroke="#16211A" stroke-width="10" stroke-linejoin="round"/><path d="M75 60 L125 60" stroke="#16211A" stroke-width="8" stroke-linecap="round"/></svg>',
  bandana:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M100 30 L160 90 L40 90 Z" fill="none" stroke="#16211A" stroke-width="10" stroke-linejoin="round"/></svg>',
  line:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M35 100 Q60 30 100 70 T165 45" fill="none" stroke="#16211A" stroke-width="9" stroke-linecap="round" stroke-dasharray="1 18"/><circle cx="35" cy="100" r="9" fill="#16211A"/></svg>',
  bowl:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M50 55 H150 L133 105 H67 Z" fill="none" stroke="#16211A" stroke-width="10" stroke-linejoin="round"/><path d="M42 55 H158" stroke="#16211A" stroke-width="10" stroke-linecap="round"/></svg>',
  pouch:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="58" y="52" width="84" height="62" rx="12" fill="none" stroke="#16211A" stroke-width="10"/><path d="M76 52 V40 a24 24 0 0 1 48 0 v12" fill="none" stroke="#16211A" stroke-width="9"/></svg>',
  bed:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="34" y="58" width="132" height="48" rx="22" fill="none" stroke="#16211A" stroke-width="10"/><path d="M34 86 H166" stroke="#16211A" stroke-width="7" opacity=".55"/></svg>',
  tag:'<svg viewBox="0 0 200 140" aria-hidden="true"><circle cx="100" cy="78" r="34" fill="none" stroke="#16211A" stroke-width="10"/><circle cx="100" cy="34" r="9" fill="none" stroke="#16211A" stroke-width="8"/><path d="M84 74 H116 M88 88 H112" stroke="#16211A" stroke-width="7" stroke-linecap="round"/></svg>',
  balm:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="72" y="48" width="56" height="66" rx="10" fill="none" stroke="#16211A" stroke-width="10"/><path d="M82 48 V36 h36 v12" fill="none" stroke="#16211A" stroke-width="9"/></svg>',
  dummy:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="55" y="45" width="90" height="50" rx="25" fill="none" stroke="#E8E8D8" stroke-width="10"/><path d="M145 70 H172" stroke="#F2601C" stroke-width="8" stroke-linecap="round"/></svg>',
  vest:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M62 38 L100 52 L138 38 L152 104 H48 Z" fill="none" stroke="#F2601C" stroke-width="10" stroke-linejoin="round"/><path d="M100 52 V104" stroke="#E8E8D8" stroke-width="7"/></svg>',
  track:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M32 104 Q70 20 110 78 T170 40" fill="none" stroke="#E8E8D8" stroke-width="9" stroke-linecap="round"/><circle cx="170" cy="40" r="10" fill="#F2601C"/></svg>',
  whistle:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="52" y="56" width="72" height="34" rx="17" fill="none" stroke="#E8E8D8" stroke-width="10"/><path d="M124 73 H164" stroke="#F2601C" stroke-width="9" stroke-linecap="round"/><circle cx="70" cy="73" r="6" fill="#F2601C"/></svg>',
  bringsel:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="80" y="44" width="40" height="60" rx="12" fill="none" stroke="#E8E8D8" stroke-width="10"/><path d="M70 44 H130" stroke="#F2601C" stroke-width="9" stroke-linecap="round"/></svg>',
  bag:'<svg viewBox="0 0 200 140" aria-hidden="true"><path d="M50 60 H150 L140 112 H60 Z" fill="none" stroke="#E8E8D8" stroke-width="10" stroke-linejoin="round"/><path d="M78 60 a22 22 0 0 1 44 0" fill="none" stroke="#F2601C" stroke-width="9"/></svg>',
  aid:'<svg viewBox="0 0 200 140" aria-hidden="true"><rect x="52" y="48" width="96" height="62" rx="12" fill="none" stroke="#E8E8D8" stroke-width="10"/><path d="M100 62 V96 M83 79 H117" stroke="#F2601C" stroke-width="9" stroke-linecap="round"/></svg>'
};

const SUPPLY = [
  {id:'p1',img:'https://images.unsplash.com/photo-1600352712371-15fd49ca42b5?auto=format&fit=crop&w=800&q=70',name:'Sunset Collar',price:34,cat:'collar',art:'collar',bg:'linear-gradient(150deg,#f3c766,#e9a11b)',
   desc:'Biothane, waterproof, wipes clean after every trail. Brass roller buckle.',spec:'Biothane 19 mm · 4 widths · brass',opts:['XS','S','M','L'],flag:'Bestseller',perso:1},
  {id:'p2',img:'https://images.unsplash.com/photo-1708062270783-0e9fa7f4c1c1?auto=format&fit=crop&w=800&q=70',name:'Trail Leash 6 ft',price:42,cat:'leash',art:'leash',bg:'linear-gradient(150deg,#8fae7a,#5f8253)',
   desc:'Soft-grip rope leash with brass hardware. Built for daily miles.',spec:'Rope 10 mm · 6 ft · brass snap',opts:['Pine','Sand','Clay'],perso:1},
  {id:'p3',img:'https://images.unsplash.com/photo-1581597359121-0f69057e2fb1?auto=format&fit=crop&w=800&q=70',name:'Canyon Harness',price:58,cat:'collar',art:'harness',bg:'linear-gradient(150deg,#7fb4ce,#5a92ad)',
   desc:'Y-front fit, free shoulder movement, no pressure into the chest.',spec:'Padded nylon · 2 attachment points',opts:['S','M','L','XL'],perso:1},
  {id:'p11',img:'https://images.unsplash.com/photo-1682969651476-6fb48aba8b03?auto=format&fit=crop&w=800&q=70',name:'Brass Name Tag',price:19,cat:'collar',art:'tag',bg:'linear-gradient(150deg,#f3c766,#c77f0a)',
   desc:'Engraved in house. Name on the front, your number on the back, silent against the collar.',spec:'Brass · 1.2 in · engraving included',opts:['Round','Bone','Shield'],flag:'Engraved'},
  {id:'p5',img:'https://images.unsplash.com/photo-1579112902044-211d42c6a4bb?auto=format&fit=crop&w=800&q=70',name:'Hills Bandana',price:18,cat:'apparel',art:'bandana',bg:'linear-gradient(150deg,#c9d6ae,#a3b985)',
   desc:'Soft cotton, prints taken from the foothills behind the house.',spec:'Cotton · machine washable',opts:['S','M','L']},
  {id:'p6',img:'https://images.unsplash.com/photo-1555265626-8ed04bde01a1?auto=format&fit=crop&w=800&q=70',name:'Long Line',price:36,cat:'leash',art:'line',bg:'linear-gradient(150deg,#f0e6c8,#dcc98f)',
   desc:'Biothane recall line for open ground. Does not soak, does not tangle.',spec:'Biothane 13 mm · brass snap',opts:['16 ft','33 ft','49 ft']},
  {id:'p7',img:'https://images.unsplash.com/photo-1741942732547-45a0d0c2b99a?auto=format&fit=crop&w=800&q=70',name:'Trailhead Treat Pouch',price:29,cat:'leash',art:'pouch',bg:'linear-gradient(150deg,#e5ecdb,#b9c9a4)',
   desc:'Magnetic mouth, opens one-handed while the other hand holds the leash.',spec:'Waxed canvas · belt clip',flag:'New'},
  {id:'p8',img:'https://images.unsplash.com/photo-1695023267262-7f4ab64152b2?auto=format&fit=crop&w=800&q=70',name:'Trail Travel Bowl',price:16,cat:'home',art:'bowl',bg:'linear-gradient(150deg,#b6d5e4,#7fb4ce)',
   desc:'Collapses flat into a jacket pocket. Holds 34 oz without tipping.',spec:'Silicone · 34 oz · dishwasher safe'},
  {id:'p9',img:'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=800&q=70',name:'Ridge Kennel Mat',price:89,cat:'home',art:'bed',bg:'linear-gradient(150deg,#d9d2bd,#b5aa8c)',
   desc:'Firm foam core with a washable canvas shell. Fits most crates and car boots.',spec:'Foam · 3 sizes · removable cover',opts:['M','L','XL']},
  {id:'p10',img:'https://images.unsplash.com/photo-1524587804055-d5ea4392da62?auto=format&fit=crop&w=800&q=70',name:'Paw & Nose Balm',price:14,cat:'home',art:'balm',bg:'linear-gradient(150deg,#f3c766,#dcc98f)',
   desc:'For hot asphalt in summer and cracked pads after a cold season.',spec:'Beeswax · shea · 2 oz tin'}
];

const FIELD = [
  {id:'f1',img:'https://images.unsplash.com/photo-1670505343033-ae36ef2854f9?auto=format&fit=crop&w=800&q=70',name:'Field Dummy',price:28,cat:'dummy',art:'dummy',bg:'linear-gradient(150deg,#243a2c,#16241b)',
   desc:'Canvas retrieving dummy, the same ones we throw all season.',spec:'Canvas · 250 / 500 / 1000 g',opts:['250 g','500 g','1000 g'],flag:'Core'},
  {id:'f2',img:'https://images.unsplash.com/photo-1629143392936-86ecc171c0ed?auto=format&fit=crop&w=800&q=70',name:'Water Dummy Orange',price:34,cat:'dummy',art:'dummy',bg:'linear-gradient(150deg,#2b2318,#16241b)',
   desc:'Floats high and stays visible on dark water. Blaze shell, closed cell core.',spec:'PVC shell · 500 g · floats'},
  {id:'f3',img:'https://images.unsplash.com/photo-1514134952839-71312e5b823f?auto=format&fit=crop&w=800&q=70',name:'Tracking Lead',price:64,cat:'track',art:'track',bg:'linear-gradient(150deg,#243a2c,#101a14)',
   desc:'Blood tracking lead for wounded game work. Runs free through brush without soaking.',spec:'Biothane 13 mm · 20 / 30 ft',opts:['20 ft','30 ft']},
  {id:'f4',img:'https://images.unsplash.com/photo-1642017263197-f55a861ab4dd?auto=format&fit=crop&w=800&q=70',name:'Bringsel Retrieve Toggle',price:22,cat:'dummy',art:'bringsel',bg:'linear-gradient(150deg,#2b2318,#16241b)',
   desc:'Leather bringsel for indicating a find. Sized for medium continental breeds.',spec:'Leather · 5.5 in · collar loop',perso:1},
  {id:'f5',img:'https://images.unsplash.com/photo-1765211786465-778a3c73a27d?auto=format&fit=crop&w=800&q=70',name:'Blaze Vest',price:79,cat:'carry',art:'vest',bg:'linear-gradient(150deg,#3a2415,#16241b)',
   desc:'Neoprene vest in blaze orange for upland cover and late-season water. Keeps the dog visible and the chest warm.',spec:'5 mm neoprene · blaze orange',opts:['S','M','L','XL'],flag:'Season',perso:1},
  {id:'f6',img:'https://images.unsplash.com/photo-1670505496137-0cde81df1d6e?auto=format&fit=crop&w=800&q=70',name:'Gundog Whistle',price:26,cat:'track',art:'whistle',bg:'linear-gradient(150deg,#243a2c,#16241b)',
   desc:'High pitch, pealess, for recall and stop. Waxed cotton lanyard included.',spec:'High pitch · pealess · lanyard included'},
  {id:'f7',img:'https://images.unsplash.com/photo-1648364069503-17e9186b2221?auto=format&fit=crop&w=800&q=70',name:'Game Carry Bag',price:118,cat:'carry',art:'bag',bg:'linear-gradient(150deg,#2b2318,#101a14)',
   desc:'Waxed canvas game bag with a rinsable liner and a dummy pocket on the strap.',spec:'Waxed canvas · liner · 22 l',perso:1},
  {id:'f8',img:'https://images.unsplash.com/photo-1767908718960-153394424ef4?auto=format&fit=crop&w=800&q=70',name:'Field First-Aid Pouch',price:54,cat:'carry',art:'aid',bg:'linear-gradient(150deg,#243a2c,#16241b)',
   desc:'Tick tool, vet wrap, saline, tweezers and a paw bandage. Packed for dogs, not humans.',spec:'12 items · belt loop · 0.9 lb'}
];

const CATS = [
  {k:'all',label:'All gear'},{k:'leash',label:'Leashes &amp; lines'},{k:'collar',label:'Collars &amp; harnesses'},
  {k:'apparel',label:'Apparel'},{k:'home',label:'Home &amp; care'}
];
const FCATS = [
  {k:'all',label:'All field gear'},{k:'dummy',label:'Dummies &amp; retrieving'},{k:'track',label:'Tracking'},{k:'carry',label:'Carry &amp; safety'}
];


/* Sizing ranges are a draft. They must match the final supplier spec before launch. */
const FIT = {
  p1:{measure:'neck', how:'Measure around the neck where the collar sits, snug but not tight. Do not add anything, the ranges already leave room for two fingers.', between:'mid',
      sizes:{XS:[9,12],S:[11,15],M:[14,19],L:[18,24]}},
  p3:{measure:'chest', how:'Measure around the widest part of the ribcage, just behind the front legs. This decides the size, neck comes second.', between:'up',
      sizes:{S:[17,22],M:[21,27],L:[26,33],XL:[32,40]}},
  p5:{measure:'neck', how:'Measure around the neck where the bandana will sit.', between:'up',
      sizes:{S:[10,14],M:[13,18],L:[17,24]}},
  f5:{measure:'chest', how:'Measure around the widest part of the ribcage behind the front legs, ideally with the coat wet down or pressed flat.', between:'up',
      sizes:{S:[18,23],M:[22,28],L:[27,33],XL:[32,38]}}
};
const EXTRA = {
  p9:{rows:[['M','fits 30 in crates'],['L','fits 36 in crates'],['XL','fits 42 in crates']]},
  f5:{warn:'This vest keeps a dog visible and warm. It is not a flotation device and does not replace a canine life jacket.'},
  f3:{warn:'Check your state rules before tracking wounded game with a dog. In Colorado, follow current Colorado Parks and Wildlife regulations.'}
};
