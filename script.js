const movies = [
  {
    title: "The Bird with the Crystal Plumage",
    year: 1970,
    director: "Dario Argento",
    genres: ["giallo"],
    description:
      "An American writer becomes entangled in a labyrinthine murder spree in Rome, igniting the giallo boom with razor-edged style.",
    tags: ["mysterious", "stylish", "slow-burn", "urban", "masked-killer", "enigmatic"],
  },
  {
    title: "Deep Red",
    year: 1975,
    director: "Dario Argento",
    genres: ["giallo"],
    description:
      "A pianist and reporter chase a killer through Rome's avant-garde underbelly, drenched in baroque imagery and Goblin's score.",
    tags: ["mysterious", "stylish", "urban", "masked-killer", "enigmatic", "kinetic"],
  },
  {
    title: "Don't Torture a Duckling",
    year: 1972,
    director: "Lucio Fulci",
    genres: ["giallo"],
    description:
      "Fulci fuses rural superstition with social critique as a journalist hunts a child killer in a cloistered village.",
    tags: ["mysterious", "secluded", "slow-burn", "masked-killer", "enigmatic"],
  },
  {
    title: "A Lizard in a Woman's Skin",
    year: 1971,
    director: "Lucio Fulci",
    genres: ["giallo"],
    description:
      "Psychedelic nightmares and swinging London decadence blur reality as a socialite fears she committed murder in her dreams.",
    tags: ["dreamlike", "opulent", "sensual", "mysterious", "enigmatic", "slow-burn"],
  },
  {
    title: "The Strange Vice of Mrs. Wardh",
    year: 1971,
    director: "Sergio Martino",
    genres: ["giallo"],
    description:
      "A jet-set socialite is stalked by sadistic lovers in Vienna, mixing erotic obsession with whodunit twists.",
    tags: ["sensual", "opulent", "decadent", "mysterious", "masked-killer", "enigmatic"],
  },
  {
    title: "All the Colors of the Dark",
    year: 1972,
    director: "Sergio Martino",
    genres: ["giallo"],
    description:
      "Occult cults and mod London fashion collide in a paranoia-soaked spiral of nightmares and murder.",
    tags: ["dreamlike", "sensual", "urban", "monstrous", "mysterious", "enigmatic"],
  },
  {
    title: "The Case of the Bloody Iris",
    year: 1972,
    director: "Giuliano Carnimeo",
    genres: ["giallo"],
    description:
      "Models in a high-rise become prey to a killer, blending pop-art visuals with sleazy catwalk intrigue.",
    tags: ["opulent", "sensual", "urban", "masked-killer", "kinetic", "decadent"],
  },
  {
    title: "What Have You Done to Solange?",
    year: 1972,
    director: "Massimo Dallamano",
    genres: ["giallo"],
    description:
      "Catholic school secrets and past sins surface in a grim investigation with haunting reveals.",
    tags: ["mysterious", "secluded", "slow-burn", "masked-killer", "enigmatic"],
  },
  {
    title: "Short Night of Glass Dolls",
    year: 1971,
    director: "Aldo Lado",
    genres: ["giallo"],
    description:
      "A reporter trapped in a catatonic body recalls the sinister fate of his missing lover amid Prague's occult elite.",
    tags: ["dreamlike", "secluded", "slow-burn", "enigmatic", "monstrous"],
  },
  {
    title: "The Red Queen Kills Seven Times",
    year: 1972,
    director: "Emilio Miraglia",
    genres: ["giallo", "gothic"],
    description:
      "A family curse unleashes a scarlet-cloaked killer in a Bavarian castle dripping with gothic opulence.",
    tags: ["gothic", "opulent", "masked-killer", "enigmatic", "slow-burn"],
  },
  {
    title: "Who Saw Her Die?",
    year: 1972,
    director: "Aldo Lado",
    genres: ["giallo"],
    description:
      "A grieving father stalks a child murderer through wintry Venice as Morricone's lullaby haunts every step.",
    tags: ["mysterious", "urban", "slow-burn", "masked-killer", "enigmatic"],
  },
  {
    title: "Torso",
    year: 1973,
    director: "Sergio Martino",
    genres: ["giallo"],
    description:
      "A college campus butcher stalks co-eds, escalating to a nerve-shredding siege in an Umbrian villa.",
    tags: ["kinetic", "sensual", "secluded", "masked-killer", "ferocious"],
  },
  {
    title: "Spasmo",
    year: 1974,
    director: "Umberto Lenzi",
    genres: ["giallo"],
    description:
      "Sun-drenched beaches hide mannequins, conspiracies, and shifting identities in this paranoid thriller.",
    tags: ["enigmatic", "sensual", "secluded", "dreamlike", "slow-burn"],
  },
  {
    title: "The Perfume of the Lady in Black",
    year: 1974,
    director: "Francesco Barilli",
    genres: ["giallo"],
    description:
      "A chemist's past trauma and occult conspiracies merge in a delirious descent into madness.",
    tags: ["dreamlike", "enigmatic", "sensual", "slow-burn", "monstrous"],
  },
  {
    title: "The Pyjama Girl Case",
    year: 1977,
    director: "Flavio Mogherini",
    genres: ["giallo", "poliziesco"],
    description:
      "Parallel investigations into a corpse on an Australian beach intertwine with bittersweet romance and corruption.",
    tags: ["urban", "sensual", "enigmatic", "gritty", "slow-burn"],
  },
  {
    title: "The Fifth Cord",
    year: 1971,
    director: "Luigi Bazzoni",
    genres: ["giallo"],
    description:
      "Franco Nero prowls brutalist Rome while a killer stages geometrically precise murders.",
    tags: ["stylish", "urban", "masked-killer", "enigmatic", "slow-burn"],
  },
  {
    title: "The Night Evelyn Came Out of the Grave",
    year: 1971,
    director: "Emilio Miraglia",
    genres: ["giallo", "gothic"],
    description:
      "An aristocrat haunted by his wife's ghost lures women to his castle, blurring gothic horror and giallo sleaze.",
    tags: ["gothic", "decadent", "sensual", "opulent", "enigmatic"],
  },
  {
    title: "The Bloodstained Butterfly",
    year: 1971,
    director: "Duccio Tessari",
    genres: ["giallo"],
    description:
      "Courtroom drama, TV spectacle, and rain-drenched park murders collide in a twisting mystery.",
    tags: ["mysterious", "urban", "masked-killer", "slow-burn", "enigmatic"],
  },
  {
    title: "The House with Laughing Windows",
    year: 1976,
    director: "Pupi Avati",
    genres: ["giallo"],
    description:
      "A restorer uncovers macabre fresco secrets in a swampy village suffocated by superstition.",
    tags: ["secluded", "slow-burn", "enigmatic", "monstrous"],
  },
  {
    title: "Suspiria",
    year: 1977,
    director: "Dario Argento",
    genres: ["giallo", "horror"],
    description:
      "A ballerina enters a witch-run academy awash in neon nightmares and percussive terror.",
    tags: ["gothic", "dreamlike", "monstrous", "sensual", "enigmatic"],
  },
  {
    title: "Inferno",
    year: 1980,
    director: "Dario Argento",
    genres: ["giallo", "horror"],
    description:
      "A New York poet and her brother uncover one of the Three Mothers in a surreal infernal labyrinth.",
    tags: ["dreamlike", "monstrous", "urban", "enigmatic", "slow-burn"],
  },
  {
    title: "High Crime",
    year: 1973,
    director: "Enzo G. Castellari",
    genres: ["poliziesco"],
    description:
      "Franco Nero's hard-nosed cop crashes through Marseille's mob networks with relentless ferocity.",
    tags: ["gritty", "urban", "kinetic", "mob", "ferocious"],
  },
  {
    title: "The Italian Connection",
    year: 1972,
    director: "Fernando Di Leo",
    genres: ["poliziesco"],
    description:
      "A Milanese pimp wrongfully targeted by the mob battles assassins in a ruthless, stylish revenge tale.",
    tags: ["gritty", "urban", "kinetic", "mob", "ferocious"],
  },
  {
    title: "Almost Human",
    year: 1974,
    director: "Umberto Lenzi",
    genres: ["poliziesco"],
    description:
      "Tomas Milian's nihilistic crook tears through kidnappings and shootouts in a bleak crime saga.",
    tags: ["gritty", "ferocious", "kinetic", "mob", "urban"],
  },
  {
    title: "Street Law",
    year: 1974,
    director: "Enzo G. Castellari",
    genres: ["poliziesco"],
    description:
      "A mild-mannered professor turns vigilante after a brutal mugging, igniting explosive revenge.",
    tags: ["ferocious", "kinetic", "urban", "mob", "triumphant"],
  },
  {
    title: "Rabid Dogs",
    year: 1974,
    director: "Mario Bava",
    genres: ["poliziesco"],
    description:
      "Bank robbers hijack a car of hostages, plunging into claustrophobic dread and savage turns.",
    tags: ["gritty", "kinetic", "urban", "ferocious", "enigmatic"],
  },
  {
    title: "The Big Racket",
    year: 1976,
    director: "Enzo G. Castellari",
    genres: ["poliziesco"],
    description:
      "A lone inspector battles an extortion ring with bone-crunching stunts and a cathartic finale.",
    tags: ["ferocious", "kinetic", "urban", "mob", "triumphant"],
  },
  {
    title: "Rome Armed to the Teeth",
    year: 1976,
    director: "Umberto Lenzi",
    genres: ["poliziesco"],
    description:
      "Maurizio Merli's inspector delivers brutal justice across Rome's crime wave in relentless fashion.",
    tags: ["ferocious", "kinetic", "urban", "mob", "gritty"],
  },
  {
    title: "The Cynic, the Rat and the Fist",
    year: 1977,
    director: "Umberto Lenzi",
    genres: ["poliziesco"],
    description:
      "A retired cop is dragged back into Rome's gang wars to settle old scores with vicious gusto.",
    tags: ["ferocious", "kinetic", "mob", "urban", "triumphant"],
  },
  {
    title: "Live Like a Cop, Die Like a Man",
    year: 1976,
    director: "Ruggero Deodato",
    genres: ["poliziesco"],
    description:
      "Two rogue police agents blur the line between law and savagery in a notorious crime thriller.",
    tags: ["ferocious", "gritty", "kinetic", "mob", "urban"],
  },
  {
    title: "Shoot First, Die Later",
    year: 1974,
    director: "Fernando Di Leo",
    genres: ["poliziesco"],
    description:
      "A corrupt cop faces the consequences of his mob ties when his moral compass snaps.",
    tags: ["gritty", "urban", "mob", "slow-burn", "ferocious"],
  },
  {
    title: "Kidnap Syndicate",
    year: 1975,
    director: "Fernando Di Leo",
    genres: ["poliziesco"],
    description:
      "Two abducted boys spark a grim ransom saga exposing the cold logic of organized crime.",
    tags: ["gritty", "slow-burn", "mob", "urban", "ferocious"],
  },
  {
    title: "The Heroin Busters",
    year: 1977,
    director: "Enzo G. Castellari",
    genres: ["poliziesco"],
    description:
      "Interpol agents chase an international drug ring with blistering aerial stunts and funky grooves.",
    tags: ["kinetic", "urban", "mob", "ferocious", "triumphant"],
  },
  {
    title: "Revolver",
    year: 1973,
    director: "Sergio Sollima",
    genres: ["poliziesco"],
    description:
      "Oliver Reed and Fabio Testi collide in a kidnapping conspiracy underscored by Morricone's mournful score.",
    tags: ["gritty", "slow-burn", "urban", "mob", "ferocious"],
  },
  {
    title: "Violent City",
    year: 1970,
    director: "Sergio Sollima",
    genres: ["poliziesco"],
    description:
      "Charles Bronson's hitman seeks revenge after betrayal in this globe-trotting, jazz-scored thriller.",
    tags: ["kinetic", "urban", "ferocious", "sensual", "mob"],
  },
  {
    title: "Salon Kitty",
    year: 1976,
    director: "Tinto Brass",
    genres: ["italian erotica"],
    description:
      "In a Nazi-run brothel, intrigue and decadence intertwine with espionage and betrayal.",
    tags: ["decadent", "opulent", "sensual", "enigmatic", "slow-burn"],
  },
  {
    title: "Malizia",
    year: 1973,
    director: "Salvatore Samperi",
    genres: ["italian erotica"],
    description:
      "A housemaid upends a Sicilian family with teasing games that balance comedy and scandal.",
    tags: ["sensual", "decadent", "urban", "pulsing", "enigmatic"],
  },
  {
    title: "Black Emanuelle",
    year: 1975,
    director: "Bitto Albertini",
    genres: ["italian erotica"],
    description:
      "Photojournalist Emanuelle travels the globe uncovering sensual adventures and taboo encounters.",
    tags: ["sensual", "decadent", "pulsing", "exotic", "urban"],
  },
  {
    title: "Emanuelle in America",
    year: 1977,
    director: "Joe D'Amato",
    genres: ["italian erotica"],
    description:
      "Laura Gemser pushes the Emmanuelle cycle into darker extremes of voyeurism and underground vice.",
    tags: ["sensual", "decadent", "pulsing", "enigmatic", "urban"],
  },
  {
    title: "Wave of Lust",
    year: 1975,
    director: "Renato Polselli",
    genres: ["italian erotica"],
    description:
      "A hedonistic yacht cruise devolves into manipulation, seduction, and revenge on sun-drenched seas.",
    tags: ["sensual", "decadent", "secluded", "pulsing", "enigmatic"],
  },
  {
    title: "Laure",
    year: 1976,
    director: "Louis-Jacques Rollet-Andriane",
    genres: ["italian erotica"],
    description:
      "An adventurer follows a free-spirited woman through tribal rites and erotic awakenings.",
    tags: ["sensual", "decadent", "exotic", "pulsing", "dreamlike"],
  },
  {
    title: "To Be Twenty",
    year: 1978,
    director: "Fernando Di Leo",
    genres: ["italian erotica", "poliziesco"],
    description:
      "Two hitchhiking free spirits collide with Italy's moral backlash in a darkly satirical road trip.",
    tags: ["sensual", "decadent", "urban", "gritty", "ferocious"],
  },
  {
    title: "The Slave",
    year: 1978,
    director: "Pasquale Festa Campanile",
    genres: ["italian erotica"],
    description:
      "A bored noblewoman hires a man to dominate her life, leading to playful yet provocative power games.",
    tags: ["sensual", "decadent", "opulent", "pulsing", "enigmatic"],
  },
  {
    title: "The Devil in the Flesh",
    year: 1977,
    director: "Marco Bellocchio",
    genres: ["italian erotica"],
    description:
      "A teenager's affair with an older woman becomes a transgressive critique of desire and politics.",
    tags: ["sensual", "decadent", "slow-burn", "urban", "enigmatic"],
  },
  {
    title: "Dracula Has Risen from the Grave",
    year: 1968,
    director: "Freddie Francis",
    genres: ["hammer horror"],
    description:
      "Christopher Lee returns as Dracula, stalking a village priest's family in a crimson-hued nightmare.",
    tags: ["gothic", "monstrous", "macabre", "period", "enigmatic"],
  },
  {
    title: "The Devil Rides Out",
    year: 1968,
    director: "Terence Fisher",
    genres: ["hammer horror"],
    description:
      "Occult warfare erupts as Duc de Richleau battles a Satanic cult in one of Hammer's most dynamic adventures.",
    tags: ["gothic", "monstrous", "brisk-gothic", "triumphant", "macabre"],
  },
  {
    title: "Taste the Blood of Dracula",
    year: 1970,
    director: "Peter Sasdy",
    genres: ["hammer horror"],
    description:
      "Victorian decadents resurrect Dracula, only to face his vengeful wrath amid gaslit vice.",
    tags: ["gothic", "decadent", "macabre", "monstrous", "period"],
  },
  {
    title: "The Vampire Lovers",
    year: 1970,
    director: "Roy Ward Baker",
    genres: ["hammer horror"],
    description:
      "Carmilla stalks the daughters of nobility in a sensuous, sapphic spin on Hammer's gothic formula.",
    tags: ["gothic", "sensual", "monstrous", "decadent", "period"],
  },
  {
    title: "Scars of Dracula",
    year: 1970,
    director: "Roy Ward Baker",
    genres: ["hammer horror"],
    description:
      "The Count wields lashings and bats in one of Hammer's most violent Dracula outings.",
    tags: ["gothic", "monstrous", "ferocious", "macabre", "period"],
  },
  {
    title: "Lust for a Vampire",
    year: 1971,
    director: "Jimmy Sangster",
    genres: ["hammer horror"],
    description:
      "At a finishing school, a resurrected vampiress seduces her classmates amid candlelit decadence.",
    tags: ["gothic", "sensual", "decadent", "monstrous", "macabre"],
  },
  {
    title: "Twins of Evil",
    year: 1971,
    director: "John Hough",
    genres: ["hammer horror"],
    description:
      "Twin sisters choose between witch-burning puritans and charismatic vampires in this rousing tale.",
    tags: ["gothic", "monstrous", "triumphant", "macabre", "period"],
  },
  {
    title: "Hands of the Ripper",
    year: 1971,
    director: "Peter Sasdy",
    genres: ["hammer horror"],
    description:
      "Jack the Ripper's daughter becomes a psychic killer in foggy Edwardian London.",
    tags: ["gothic", "monstrous", "enigmatic", "period", "macabre"],
  },
  {
    title: "Dr. Jekyll and Sister Hyde",
    year: 1971,
    director: "Roy Ward Baker",
    genres: ["hammer horror"],
    description:
      "A gender-bending twist on the classic tale infused with bodysnatcher grit and Hammer flair.",
    tags: ["gothic", "monstrous", "decadent", "macabre", "enigmatic"],
  },
  {
    title: "The Satanic Rites of Dracula",
    year: 1973,
    director: "Alan Gibson",
    genres: ["hammer horror"],
    description:
      "Dracula plots a plague apocalypse in swinging London, blending espionage with the occult.",
    tags: ["gothic", "monstrous", "urban", "macabre", "triumphant"],
  },
  {
    title: "Captain Kronos: Vampire Hunter",
    year: 1974,
    director: "Brian Clemens",
    genres: ["hammer horror"],
    description:
      "A swashbuckling hunter and his crew battle age-draining vampires in a folk-horror countryside.",
    tags: ["gothic", "brisk-gothic", "triumphant", "monstrous", "macabre"],
  },
  {
    title: "The Legend of the 7 Golden Vampires",
    year: 1974,
    director: "Roy Ward Baker & Chang Cheh",
    genres: ["hammer horror"],
    description:
      "Kung fu meets fangs as Van Helsing teams with martial artists in a kinetic East-meets-West adventure.",
    tags: ["gothic", "kinetic", "monstrous", "brisk-gothic", "triumphant"],
  },
  {
    title: "Frankenstein and the Monster from Hell",
    year: 1974,
    director: "Terence Fisher",
    genres: ["hammer horror"],
    description:
      "Baron Frankenstein conducts ghastly experiments inside an asylum's shadowy walls.",
    tags: ["gothic", "monstrous", "macabre", "slow-burn", "period"],
  },
  {
    title: "The Ghoul",
    year: 1975,
    director: "Freddie Francis",
    genres: ["hammer horror"],
    description:
      "A country estate hides a cannibalistic secret amid Hammer's fog and moral decay.",
    tags: ["gothic", "secluded", "monstrous", "macabre", "slow-burn"],
  },
  {
    title: "To the Devil a Daughter",
    year: 1976,
    director: "Peter Sykes",
    genres: ["hammer horror"],
    description:
      "Christopher Lee leads a cult grooming a young nun for demonic possession in Hammer's final theatrical gasp.",
    tags: ["gothic", "monstrous", "enigmatic", "slow-burn", "macabre"],
  },
  {
    title: "The Lady Vanishes",
    year: 1979,
    director: "Anthony Page",
    genres: ["hammer horror", "mystery"],
    description:
      "Hammer's remake of the Hitchcock classic finds espionage and intrigue aboard a Balkan-bound train.",
    tags: ["brisk-gothic", "enigmatic", "urban", "triumphant", "slow-burn"],
  },
];

// Remove any entries that fall outside the desired 1967-1981 span
const curatedMovies = movies.filter((movie) => movie.year >= 1967 && movie.year <= 1981);

const suggestionList = document.querySelector("#suggestions");
const quizList = document.querySelector("#quizSuggestions");
const suggestBtn = document.querySelector("#suggestBtn");
const moodForm = document.querySelector("#moodForm");

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderMovies(list, container) {
  container.innerHTML = "";
  list.forEach((movie) => {
    const li = document.createElement("li");
    li.className = "movie-card";
    li.innerHTML = `
      <h3>${movie.title} <span aria-hidden="true">(${movie.year})</span></h3>
      <p>${movie.description}</p>
      <div class="badges">
        ${movie.genres
          .map((genre) => `<span class="badge">${genre}</span>`)
          .join("")}
      </div>
    `;
    container.appendChild(li);
  });
}

function getRandomMovies(count = 5) {
  const pool = shuffle(curatedMovies);
  return pool.slice(0, Math.min(count, pool.length));
}

const preferenceTags = {
  decadent: ["decadent", "sensual", "opulent"],
  mysterious: ["mysterious", "stylish", "enigmatic"],
  ferocious: ["ferocious", "kinetic", "gritty"],
  gothic: ["gothic", "monstrous", "macabre"],
  "slow-burn": ["slow-burn", "dreamlike", "enigmatic"],
  kinetic: ["kinetic", "triumphant"],
  pulsing: ["sensual", "pulsing", "decadent"],
  "brisk-gothic": ["brisk-gothic", "gothic", "triumphant"],
  urban: ["urban", "gritty"],
  opulent: ["opulent", "decadent"],
  secluded: ["secluded", "enigmatic"],
  period: ["period", "gothic"],
  "masked-killer": ["masked-killer", "mysterious"],
  mob: ["mob", "ferocious"],
  seductive: ["sensual", "decadent"],
  monstrous: ["monstrous", "gothic"],
  enigmatic: ["enigmatic", "mysterious"],
  triumphant: ["triumphant", "kinetic"],
  sensuous: ["sensual", "decadent"],
  macabre: ["macabre", "gothic"],
};

const genrePreferences = {
  decadent: ["italian erotica", "giallo"],
  mysterious: ["giallo"],
  ferocious: ["poliziesco"],
  gothic: ["hammer horror"],
  "masked-killer": ["giallo"],
  mob: ["poliziesco"],
  seductive: ["italian erotica"],
  monstrous: ["hammer horror", "giallo"],
};

function aggregatePreferences(formData) {
  const selectedValues = [];
  for (const [key, value] of formData.entries()) {
    if (value) {
      selectedValues.push(value);
    }
  }

  const tagScores = {};
  selectedValues.forEach((value) => {
    (preferenceTags[value] || []).forEach((tag) => {
      tagScores[tag] = (tagScores[tag] || 0) + 1;
    });
  });

  return { selectedValues, tagScores };
}

function scoreMovie(movie, tagScores, selectedValues) {
  let score = 0;
  movie.tags.forEach((tag) => {
    if (tagScores[tag]) {
      score += tagScores[tag];
    }
  });

  selectedValues.forEach((value) => {
    const preferredGenres = genrePreferences[value] || [];
    if (preferredGenres.some((genre) => movie.genres.includes(genre))) {
      score += 1.5;
    }
  });

  return score;
}

function getQuizMovies(formData) {
  const { selectedValues, tagScores } = aggregatePreferences(formData);

  if (selectedValues.length < 5) {
    return { movies: [], error: "Please answer all five questions before submitting." };
  }

  const scored = curatedMovies
    .map((movie) => ({
      movie,
      score: scoreMovie(movie, tagScores, selectedValues),
    }))
    .sort((a, b) => b.score - a.score);

  const best = scored.filter((entry) => entry.score > 0).slice(0, 5).map((entry) => entry.movie);

  if (best.length < 5) {
    const filler = shuffle(curatedMovies).filter((candidate) => !best.includes(candidate));
    while (best.length < 5 && filler.length) {
      best.push(filler.shift());
    }
  }

  return { movies: best };
}

suggestBtn.addEventListener("click", () => {
  const picks = getRandomMovies(5);
  renderMovies(picks, suggestionList);
});

moodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(moodForm);
  const { movies: picks, error } = getQuizMovies(formData);

  if (error) {
    quizList.innerHTML = `<li class="movie-card">${error}</li>`;
    return;
  }

  renderMovies(picks, quizList);
});

// Render initial suggestions for immediate engagement
renderMovies(getRandomMovies(5), suggestionList);
