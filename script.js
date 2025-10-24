"use strict";

// Seeded PRNG helpers for deterministic generation from an input string
function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}
function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), 1 | t);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function createRandom(seed) {
  if (seed && seed.trim().length > 0) {
    const seedHash = xmur3(seed.trim())();
    return mulberry32(seedHash);
  }
  if (globalThis.crypto && globalThis.crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    globalThis.crypto.getRandomValues(buf);
    return mulberry32(buf[0]);
  }
  return Math.random; // fallback
}

function pickOne(random, items) {
  const index = Math.floor(random() * items.length);
  return items[index];
}

function pickDistinct(random, items, count) {
  const pool = [...items];
  const taken = [];
  const max = Math.min(count, pool.length);
  for (let i = 0; i < max; i++) {
    const idx = Math.floor(random() * pool.length);
    taken.push(pool.splice(idx, 1)[0]);
  }
  return taken;
}

// Core vocab
const LIMINAL_SETTINGS = [
  "empty shopping mall at closing",
  "motel corridor with endless doors",
  "foggy seaside boardwalk (off-season)",
  "coin-op laundromat at 3:07AM",
  "abandoned arcade humming softly",
  "fluorescent office floor after-hours",
  "drive-in theater lot in winter",
  "school hallway during TV sign-off",
  "neon tunnel under the overpass",
  "vacant waterpark under sodium lights",
  "VHS rental store with buzzing CRTs",
  "airport moving walkway with no flights"
];

const NOSTALGIC_OBJECTS = [
  "cassette Walkman",
  "VHS camcorder",
  "boombox with chrome antennas",
  "CRT television on a metal cart",
  "rotary payphone",
  "Polaroid instant camera",
  "lava lamp",
  "pager clipped to a jacket",
  "pinball machine",
  "tape recorder with red LED",
  "roller skates with neon wheels",
  "flip phone with charms"
];

const SCI_FI_ELEMENTS = [
  "chrome android companion",
  "holographic clerk",
  "time-loop elevator",
  "wormhole disguised as a vending machine",
  "signal from an orbiting disco satellite",
  "AI that sings in arpeggios",
  "teleportation glitch",
  "cosmic microwave hum",
  "alien mirrorball",
  "synth-priest in a velvet cape"
];

const ITALO_MOTIFS = [
  "strobe-lit mirrorball",
  "synthetic arpeggios",
  "chrome highlights",
  "neon grid horizon",
  "Testarossa poster glow",
  "roller-disco echo",
  "silver jumpsuits",
  "sequined tracksuits",
  "laser fog",
  "disco drum machines"
];

const KITSCH_CAMP = [
  "plastic flamingos",
  "heart-shaped sunglasses",
  "tiger velvet painting",
  "glitter jelly sandals",
  "tacky fountain cherubs",
  "keytar with stickers",
  "novelty lava mugs",
  "sparkle nail varnish",
  "aqua-blue eyeshadow",
  "glossy faux palm trees"
];

const SURREAL_MOTIFS = [
  "fish swimming in the air",
  "confetti rain indoors",
  "stairs looping back to themselves",
  "gravity reversing for a beat",
  "disco ball becomes a moon",
  "door that opens to the same room",
  "mirrors that lag by two seconds",
  "polaroids that develop your future",
  "tape rewinding your speech",
  "shadows that dance ahead of you"
];

const CHARACTER_SEEDS = [
  "grandmas in sequined tracksuits",
  "chrome-plated android gigolos",
  "sleepwalking night clerk",
  "roller-disco mermaids",
  "bingo hall divas",
  "melancholic pinball wizard",
  "VHS oracle",
  "synth-priestess",
  "lonely payphone spirit",
  "time-tourist in satin"
];

function titleCase(words) {
  return words.replace(/\b(\w)(\w*)/g, (_, a, b) => a.toUpperCase() + b.toLowerCase());
}

function generateTitle(random) {
  const templates = [
    () => `Midnight ${titleCase(pickOne(random, ["Hotline", "Carousel", "Mixtape", "Oracle", "Loop", "Laundromat"]))}`,
    () => `The ${titleCase(pickOne(random, ["Chrome", "Velvet", "Neon", "Analog", "Spectral"]))} ${titleCase(pickOne(random, ["Mermaid", "Android", "Testarossa", "Disco Priest", "Payphone"]))}`,
    () => `${titleCase(pickOne(random, ["Bingo", "Arcade", "Boardwalk", "Corridor", "Tunnel"]))} of ${titleCase(pickOne(random, ["Glitter", "Echoes", "Dreams", "VHS", "Starlight"]))}`,
    () => `${titleCase(pickOne(random, ["VHS", "Polaroid", "Cassette"]))} ${titleCase(pickOne(random, ["Seance", "Moon", "Wormhole", "Confessional"]))}`,
  ];
  return pickOne(random, templates)();
}

function generateLogline(random, setting, obj1, obj2, scifi, surreal, chars) {
  const lengthPhrase = pickOne(random, ["30–60s short", "bite-sized 40s vignette", "quick 45s loop", "compact 35–55s concept"]);
  const pieces = [
    `${titleCase(pickOne(random, ["italo-disco", "sci-fi", "kitsch", "camp"]))} vibes at a ${setting}`,
    `${obj1} + ${obj2}`,
    `${scifi}`,
    `${surreal}`
  ];
  return `${pieces[0]}: ${pickOne(random, [
    `where ${chars} find a beat that bends time`,
    `as memories tune themselves into a mixtape`,
    `until nostalgia glitches into the present`,
    `and the room remembers you back`
  ])}. ${lengthPhrase}.`;
}

function generateBeats(random) {
  const beat1 = pickOne(random, [
    "Cold open: humming lights, synth arpeggio fades in",
    "Title card flickers like a VHS pause",
    "Shoes on linoleum, mirrorball reflection drifts"
  ]);
  const beat2 = pickOne(random, [
    "Escalation: gravity hiccups; objects orbit the mirrorball",
    "Escalation: phone rings from two minutes in the future",
    "Escalation: Polaroids develop scenes not yet filmed"
  ]);
  const beat3 = pickOne(random, [
    "Payoff: time snaps; last note hangs, neon afterimage",
    "Payoff: coin drops; loop resets with a wink",
    "Payoff: light cuts; footsteps keep dancing"
  ]);
  return [beat1, beat2, beat3];
}

function generateIdea(random, seedText) {
  const setting = pickOne(random, LIMINAL_SETTINGS);
  const [obj1, obj2] = pickDistinct(random, NOSTALGIC_OBJECTS, 2);
  const scifi = pickOne(random, SCI_FI_ELEMENTS);
  const italos = pickDistinct(random, ITALO_MOTIFS, 2);
  const kitsch = pickDistinct(random, KITSCH_CAMP, 1);
  const surreal = pickOne(random, SURREAL_MOTIFS);
  const chars = pickOne(random, CHARACTER_SEEDS);
  const title = generateTitle(random);
  const lengthSeconds = 30 + Math.floor(random() * 31); // 30..60
  const logline = generateLogline(random, setting, obj1, obj2, scifi, surreal, chars);
  const beats = generateBeats(random);
  const palette = `${italos.join(" • ")} • ${kitsch[0]}`;

  return { title, logline, setting, objects: [obj1, obj2], characters: chars, scifi, surreal, palette, lengthSeconds, seedText };
}

function generateIdeas(seedText) {
  const random = createRandom(seedText || "");
  const ideas = [];
  const seenTitles = new Set();
  let attempts = 0;
  while (ideas.length < 5 && attempts < 50) {
    const idea = generateIdea(random, seedText);
    if (!seenTitles.has(idea.title)) {
      seenTitles.add(idea.title);
      ideas.push(idea);
    }
    attempts++;
  }
  return ideas;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
}

function renderIdeas(ideas) {
  const results = document.getElementById("results");
  if (!results) return;
  if (!ideas || ideas.length === 0) {
    results.innerHTML = "<p class=small>No ideas yet. Try generating.</p>";
    return;
  }
  const html = ideas.map((idea) => {
    const beats = generateBeats(createRandom(idea.title)); // vary per card subtly
    return `<article class="card" role="article">
      <h3>${escapeHtml(idea.title)}</h3>
      <div class="meta">
        <span class="tag">Surreal</span>
        <span class="tag">Liminal</span>
        <span class="tag">Nostalgic</span>
        <span class="tag">Aesthetic: Italo‑disco × Sci‑Fi × Kitsch/Camp</span>
        <span class="tag length">${idea.lengthSeconds}s</span>
      </div>
      <p class="idea-body">${escapeHtml(idea.logline)}</p>
      <hr class="hr" />
      <p class="small"><strong>Setting</strong>: ${escapeHtml(idea.setting)}</p>
      <p class="small"><strong>Characters</strong>: ${escapeHtml(idea.characters)}</p>
      <p class="small"><strong>Objects</strong>: ${escapeHtml(idea.objects.join(", "))}</p>
      <p class="small"><strong>Palette</strong>: ${escapeHtml(idea.palette)}</p>
      <ul class="list small">
        ${beats.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    </article>`;
  }).join("");
  results.innerHTML = html;
}

function wireUi() {
  const input = document.getElementById("seedInput");
  const genBtn = document.getElementById("generateBtn");
  const rndBtn = document.getElementById("randomBtn");

  const doGenerate = (useSeed) => {
    const seedText = useSeed ? (input?.value || "").trim() : "";
    const ideas = generateIdeas(seedText);
    renderIdeas(ideas);
  };

  genBtn?.addEventListener("click", () => doGenerate(true));
  rndBtn?.addEventListener("click", () => doGenerate(false));
  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") doGenerate(true);
  });

  // first render on load
  doGenerate(false);
}

document.addEventListener("DOMContentLoaded", wireUi);
