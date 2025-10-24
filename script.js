/* Surreal GenAI Video Idea Generator
   - Always surreal, liminal, nostalgic
   - Always italodisco / sci‑fi / kitsch / camp aesthetic
   - 30–60 seconds concepts
   - Optional user seed; deterministic generation per seed
*/

(function init() {
  const ideasContainer = document.getElementById('ideas');
  const generateBtn = document.getElementById('generateBtn');
  const surpriseBtn = document.getElementById('surpriseBtn');
  const copyBtn = document.getElementById('copyBtn');
  const seedInput = document.getElementById('seedInput');

  function setBusy(isBusy) {
    ideasContainer.setAttribute('aria-busy', String(isBusy));
  }

  // Seeded PRNG helpers (xmur3 + mulberry32)
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
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function makeRngFromString(seedString) {
    const seedFn = xmur3(seedString);
    return mulberry32(seedFn());
  }

  // Domain-specific pools
  const nostalgiaAnchors = [
    'VHS rewind bar', 'cassette walkman', 'CRT living room', 'roller rink at midnight',
    'abandoned mall food court', 'empty hotel corridor', 'neon-lit bowling alley', 'drive-in cinema car lot',
    'public pool after hours', 'arcade jackpot room', 'photo booth with a portal', 'suburban cul-de-sac at dawn',
    'seaside funfair in off-season', 'sodium-lit parking garage', 'school auditorium with disco ball',
  ];

  const protagonists = [
    'retired astronaut grandma', 'android gigolo with velvet blazer', 'tape recorder that steals dreams',
    'librarian in mirrored shades', 'night-shift lifeguard with a keytar', 'telephone operator ghost',
    'DIY cyber-witch suburban mom', 'roller rink announcer AI', 'pair of synchronized vending machines',
    'bingo hall divas in space suits', 'retro-futurist aerobics instructor', 'karaoke robot with stage fright',
  ];

  const sciFiTwists = [
    'time loop that resets on every 808 clap', 'neon portal hidden under a photo booth curtain',
    'memory extraction jukebox', 'parallel self encountered via CCTV', 'gravity flickers with the bassline',
    'holograms that glitch into reality', 'dream fragments recorded on magnetic tape',
    'a countdown heard only in reflections', 'a phone that connects to next Tuesday',
  ];

  const kitschProps = [
    'lava lamps and plastic swans', 'inflatable moons and glitter confetti', 'laser harp and fog machine',
    'rubber ducks dressed as astronauts', 'fluorescent jelly desserts', 'sequin curtains and tinsel rain',
    'keytar with built-in disco ball', 'novelty sunglasses for every emotion',
  ];

  const italodiscoCues = [
    'Moroder-style bassline', 'arpeggiated synth lead', '808 claps with gated reverb',
    'icy pad chords and slap-back delay', 'keytar solo with chorus', 'four-on-the-floor drum machine',
  ];

  const liminalTextures = [
    'fluorescent hum', 'vacant echo', 'pastel haze', 'wet tile reflections', 'endless carpet pattern',
    'night-blooming neon', 'mono PA announcement in the distance', 'security monitor scanlines',
  ];

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1));
  }

  function sample(rng, arr) { return arr[Math.floor(rng() * arr.length)]; }

  function generateDuration(rng) {
    const seconds = Math.floor(30 + rng() * 31); // 30–60 inclusive-ish
    return `${seconds}s`;
  }

  function synthTitle(rng, seedWord) {
    const patterns = [
      ["Dreams of", seedWord],
      ["Arcade", seedWord],
      [seedWord, "Transmission"],
      ["VHS", seedWord],
      ["Neon", seedWord],
      ["Liminal", seedWord],
      [seedWord, "Forever"],
      ["Memory of", seedWord],
    ];
    const pick = patterns[Math.floor(rng() * patterns.length)].filter(Boolean).join(' ');
    return toTitleCase(pick);
  }

  function composeConcept(rng, userSeed) {
    const anchor = sample(rng, nostalgiaAnchors);
    const hero = sample(rng, protagonists);
    const twist = sample(rng, sciFiTwists);
    const prop = sample(rng, kitschProps);
    const cue = sample(rng, italodiscoCues);
    const texture = sample(rng, liminalTextures);

    const seedMention = userSeed ? ` Inspired by ${userSeed.toLowerCase()}.` : '';

    const line1 = `In a ${anchor}, ${hero} discovers a ${twist}.`;
    const line2 = `A ${cue} drives the rhythm as ${prop} turn the space into a surreal, nostalgic, liminal dance tableau.${seedMention}`;

    return `${line1} ${line2}`;
  }

  function ensureAestheticBadges() {
    return ['italodisco', 'sci‑fi', 'kitsch', 'camp', 'surreal', 'liminal', 'nostalgic'];
  }

  function makeIdea(rng, userSeed) {
    const seedWord = (userSeed || 'Mixtape').split(/[,\s]+/).filter(Boolean)[0] || 'Mixtape';
    return {
      title: synthTitle(rng, seedWord),
      concept: composeConcept(rng, userSeed),
      duration: generateDuration(rng),
      badges: ensureAestheticBadges(),
    };
  }

  function uniqueByTitle(ideas) {
    const seen = new Set();
    return ideas.filter((i) => {
      const key = i.title.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function generateIdeas(count, seedString) {
    const baseSeed = seedString && seedString.trim().length ? seedString.trim() : `random-${Date.now()}-${Math.random()}`;
    const rng = makeRngFromString(baseSeed);
    const ideas = [];
    for (let i = 0; i < count * 2; i++) {
      ideas.push(makeIdea(rng, seedString));
      if (ideas.length >= count) break;
    }
    return uniqueByTitle(ideas).slice(0, count);
  }

  function renderIdeas(ideas) {
    ideasContainer.innerHTML = '';
    for (const idea of ideas) {
      const card = document.createElement('article');
      card.className = 'idea-card';
      const title = document.createElement('h2');
      title.className = 'idea-title';
      title.textContent = idea.title;

      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = `Duration: ${idea.duration}`;

      const p = document.createElement('p');
      p.className = 'idea-text';
      p.textContent = idea.concept;

      const badgeRow = document.createElement('div');
      badgeRow.className = 'badge-row';
      idea.badges.forEach((b) => {
        const span = document.createElement('span');
        span.className = 'badge';
        span.textContent = b;
        badgeRow.appendChild(span);
      });

      card.appendChild(title);
      card.appendChild(meta);
      card.appendChild(p);
      card.appendChild(badgeRow);
      ideasContainer.appendChild(card);
    }
  }

  function copyAll(ideas) {
    const text = ideas.map((i, idx) => {
      return `${idx + 1}. ${i.title} — ${i.concept} (Duration: ${i.duration})`;
    }).join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => (copyBtn.textContent = 'Copy all'), 1200);
    }).catch(() => {
      // Fallback: create a hidden textarea
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      copyBtn.textContent = 'Copied!'; setTimeout(() => (copyBtn.textContent = 'Copy all'), 1200);
    });
  }

  let lastIdeas = [];

  function handleGenerate(fromSurprise = false) {
    setBusy(true);
    const seed = fromSurprise ? '' : seedInput.value;
    lastIdeas = generateIdeas(3, seed);
    renderIdeas(lastIdeas);
    setBusy(false);
  }

  generateBtn.addEventListener('click', () => handleGenerate(false));
  surpriseBtn.addEventListener('click', () => handleGenerate(true));
  copyBtn.addEventListener('click', () => copyAll(lastIdeas));

  // Generate once on load with random seed
  handleGenerate(true);
})();
