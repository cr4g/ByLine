export const fakeNewsDefinition = {
  intro: 'In today\u2019s digital age, information spreads rapidly across social media and online platforms. Understanding the differences between fake news, disinformation, and misinformation is essential for media literacy and responsible digital citizenship.',
  definition: 'Fake news is broadly understood as intentionally fabricated or misleading information presented in the format of legitimate news, with the aim of deceiving audiences or manipulating public opinion.',
};

export const fakeNewsTypes = [
  {
    num: '01',
    icon: '\u{1F3AD}',
    title: 'Satire or Parody',
    body: 'Humorous or exaggerated stories meant for entertainment but sometimes mistaken as real.',
    example: '\u201CJeepneys to be replaced by flying tricycles in Metro Manila.\u201D',
  },
  {
    num: '02',
    icon: '\u{1F517}',
    title: 'False Connections',
    body: 'Headlines or images that don\u2019t match the actual content.',
    example: 'A headline saying \u201CMassive protest in Manila\u201D paired with a photo from another country.',
  },
  {
    num: '03',
    icon: '\u{1F4CA}',
    title: 'Misleading Content',
    body: 'Genuine information presented in a deceptive way.',
    example: 'Citing only one survey result to claim a candidate is \u201Cleading,\u201D while ignoring broader data showing otherwise.',
  },
  {
    num: '04',
    icon: '\u{1F551}',
    title: 'False Context',
    body: 'Real content shared with incorrect timing or framing.',
    example: 'An old photo of a flooded street in Quezon City circulated as if it were from the latest typhoon.',
  },
  {
    num: '05',
    icon: '\u{1F47B}',
    title: 'Impostor Content',
    body: 'Fake accounts or websites pretending to be legitimate sources.',
    example: 'A Facebook page mimicking Philippine Daily Inquirer to spread false stories.',
  },
  {
    num: '06',
    icon: '\u{1F5BC}\uFE0F',
    title: 'Manipulated Content',
    body: 'Genuine images or videos altered to mislead.',
    example: 'A photoshopped picture showing a politician attending an event they never joined.',
  },
  {
    num: '07',
    icon: '\u274C',
    title: 'Fabricated Content',
    body: 'Entirely false information created to deceive.',
    example: '\u201CPhilippines bans rice imports permanently\u201D when no such policy exists.',
  },
];

export const sites = [
  { url: 'rappler.com/nation', headline: 'DOH reports dengue cases down 8% nationwide this quarter', byline: 'By health desk · data from DOH linked · updated 3h ago', credible: true, explain: 'Established newsroom domain, named agency source (DOH), a linked dataset, and a visible update timestamp — all signs of an accountable outlet.' },
  { url: 'TotooBalitaPH24.info', headline: 'DOH \'nagtatago\' ng totoong bilang ng dengue cases, may leaked document daw', byline: 'Posted by admin · walang petsa', credible: false, explain: 'Vague ".info" domain, anonymous "admin" byline, no date, and a "hiding the truth" claim with no leaked document actually linked — insinuation standing in for evidence.' },
  { url: 'gmanetwork.com/news/money', headline: 'BSP keeps key interest rate unchanged, cites inflation outlook', byline: 'By Money desk · sourced to official BSP statement', credible: true, explain: 'Recognized national outlet, specific named desk, and the claim is tied to an official Bangko Sentral statement rather than unnamed insiders.' },
  { url: 'viral-usapangkalusugan.blogspot.com', headline: 'Ayaw ipaalam ng mga doktor: itong gulay na \'to nagpapagaling agad', byline: 'Shared by user8821 · re-post galing sa unknown source', credible: false, explain: 'Free blog subdomain, no author credentials, and "doctors don\'t want you to know" is a classic manipulation phrase with nothing behind it to verify.' },
  { url: 'pna.gov.ph/articles', headline: 'PAGASA: Habagat to bring rains over Luzon this week', byline: 'Philippine News Agency · official weather bulletin linked', credible: true, explain: 'Official state news agency domain, a named government bulletin (PAGASA), and a claim you can cross-check directly against the source agency.' },
  { url: 'breakingnewsphilippines24.net', headline: 'BREAKING: Malaking lindol darating sa Metro Manila ngayong linggo, sabi ng eksperto', byline: 'Walang pangalan · walang follow-up na artikulo kahit saan', credible: false, explain: 'Generic "breaking" branding, an unnamed "eksperto," and a specific earthquake prediction — something no legitimate seismologist can actually make. No corroborating coverage anywhere is the biggest red flag.' },
];

export const articles = [
  { source: 'Manila Bulletin · Metro Desk', headline: 'Quezon City council approves new bike lane budget after 6-month review', body: 'The proposal passed 12-3 following public hearings; construction is slated to begin next quarter, per the city council\'s published minutes.', real: true, clues: 'References a specific vote count, a public hearing process, and citable council minutes — verifiable, unremarkable civic news.' },
  { source: 'TotooNaBalita Now', headline: 'LGU secretly votes to BAN all tricycles sa Metro Manila starting next week', body: 'May mga sources umano sa loob ng city hall na sinabing biglaan lang pinasa ang batas nang walang pinaalaman sa mga residente.', real: false, clues: 'Extreme claim ("ban all tricycles"), anonymous "sources sa loob," a suspiciously short timeline, and no link to any official ordinance or council record.' },
  { source: 'PNA (Philippine News Agency)', headline: 'Domestic flights report minor delays after habagat brings heavy rains', body: 'Roughly 30 flights out of NAIA were delayed an average of 40 minutes; normal operations resumed by evening, the airline confirmed to PNA.', real: true, clues: 'Specific, modest numbers and a named confirming party (the airline, via PNA) — real events are usually this unremarkable.' },
  { source: 'PatriotBalitaPH.biz', headline: 'Airline \'quietly\' cancels hundreds of NAIA flights to cover up major incident', body: 'Mga pasahero raw ay walang pinaalaman, at ang airline ay tumangging mag-comment, ayon sa mga umano\'y insider.', real: false, clues: '"Quietly," "cover up," and unnamed "insiders" do a lot of work with zero named sources — emotional framing standing in for evidence.' },
  { source: 'UP Diliman Press Office', headline: 'Study of 3,000 Filipino students finds no link between screen time and grades', body: 'Researchers controlled for household income and sleep patterns; the full dataset and methodology are published alongside the release.', real: true, clues: 'Sample size, controlled variables, and open methodology — the hallmarks of a checkable academic claim.' },
];

export const headlines = [
  { text: 'Itong Simpleng Gawain Every Morning, Bago ang Buhay Mo — Hindi Mo Aakalain ang #7', bait: true, technique: 'Curiosity gap + listicle bait: withholds the actual information ("#7") purely to force a click.' },
  { text: 'DepEd Approves Additional Budget for New School Buildings in Region IV-A', bait: false, technique: 'Straightforward and specific — states exactly what happened with no manipulation needed.' },
  { text: 'Ang Nakita ng mga Doktor sa Kape Niya, Ikaka-shock Ka', bait: true, technique: 'Vague pronoun ("niya," "ang nakita") plus manufactured shock — no actual claim you could fact-check.' },
  { text: 'Unemployment Rate Drops to 3.8% in Latest PSA Report', bait: false, technique: 'A concrete, checkable statistic stated plainly, attributed to PSA — typical of straight news reporting.' },
  { text: '24 Hours Na Lang Bago Mawala ito Forever, Panoorin Mo Na Ngayon', bait: true, technique: 'False urgency: an artificial deadline designed to short-circuit careful thinking.' },
  { text: 'Babala ng mga Eksperto: Lahat Daw Tayo Nagkakamali sa Isang Bagay na Ito', bait: true, technique: 'Vague authority ("mga eksperto") with no citation, plus a universal claim built to feel personally alarming.' },
];

export const scenarios = [
  {
    who: 'Juan D.', handle: 'Facebook · 2h ago',
    body: '"BREAKING: PGH puno na, tinatanggihan na ang mga pasyente sa ER!! I-share bago tanggalin \u{1F631}"',
    stats: ['1.2k shares', '340 comments', 'walang linked source'],
    question: 'Ano ang gagawin mo?',
    options: [
      { text: 'I-share agad para maka-warn ang iba', good: false, feedback: 'Sharing unverified emergency claims can spread panic fast — "i-share bago tanggalin" is itself a manipulation tactic designed to bypass your judgment.' },
      { text: 'Tingnan muna ang official page ng PGH o DOH, o balita mula sa GMA/ABS-CBN', good: true, feedback: 'Tama. Urgent, unsourced claims about public safety should always be checked against an official hospital page or established outlet before you act on or share them.' },
      { text: 'I-ignore lang, malamang wala namang ganun', good: false, feedback: 'Ignoring isn\'t verifying — if it turned out true, dismissing it helps no one either. A quick check on the hospital\'s official page costs little.' },
    ],
  },
  {
    who: 'Kalusugan Watch PH', handle: 'Facebook Page · 5h ago',
    body: '"Bagong study: itong prutas na ito, kapag kinain araw-araw, 90% babawas sa panganib magkasakit! Link sa comments."',
    stats: ['890 shares', '"link sa comments" — walang citation na nakalagay'],
    question: 'Ano ang gagawin mo?',
    options: [
      { text: 'Hanapin muna ang actual na study bago paniwalaan ang 90%', good: true, feedback: 'Tama. A 90% claim needs a real citation. Vague "may bagong study" posts with no visible link are a common exaggeration pattern on Filipino Facebook pages.' },
      { text: 'I-comment na "fake yan" kahit hindi mo pa na-check', good: false, feedback: 'Dismissing without checking is just as unverified as believing it outright — better to look first, then respond.' },
      { text: 'Paniwalaan agad dahil parang scientific naman ang dating', good: false, feedback: 'Sounding scientific isn\'t the same as being sourced — impressive numbers with no citation are a red flag, not proof.' },
    ],
  },
  {
    who: 'Anonymous Forward', handle: 'ipinasa sa GC · ngayon lang',
    body: 'Isang screenshot claiming magsasara na raw ang lahat ng branch ng isang kilalang fast-food chain sa Pilipinas next month, ipinasa lang sa group chat na walang source link.',
    stats: ['na-forward 6 beses na', 'walang nahanap na original post'],
    question: 'Ano ang gagawin mo?',
    options: [
      { text: 'I-forward din sa family GC, sakaling totoo', good: false, feedback: 'Chain-forwarded screenshots lose their original source at every hop — forwarding it further only spreads unverified claims further.' },
      { text: 'Hanapin ang official Facebook page o statement ng kumpanya', good: true, feedback: 'Tama. Major company news would appear on their own official page or credible business press (like Rappler or BusinessWorld), not just a forwarded screenshot.' },
      { text: 'I-reply na lang ng "source?" sa GC at maghintay', good: false, feedback: 'Asking is reasonable, but waiting passively means the claim keeps spreading unchecked in the meantime — pair it with your own quick search.' },
    ],
  },
];

export const quizQs = [
  { q: 'A site uses the domain "gma-newsupdates.info" — very close to a known outlet\'s real name. This is most likely:', opts: ['A regional bureau of that outlet', 'A domain spoof designed to mislead', 'A mobile-only version of the site'], correct: 1, explain: 'Copycat domains that closely mimic trusted Philippine news brands are a common misinformation tactic — always check the exact URL, not just a familiar-sounding name.' },
  { q: 'Which detail most strengthens a news article\'s credibility?', opts: ['Dramatic headline font', 'A named, checkable source and a publish date', 'Lots of exclamation points'], correct: 1, explain: 'Attribution and dating let you verify and contextualize a claim — style choices like fonts or punctuation say nothing about accuracy.' },
  { q: '"You won\'t believe what happened next" is an example of:', opts: ['A curiosity-gap clickbait technique', 'A factual summary', 'A citation style'], correct: 0, explain: 'It withholds information specifically to provoke a click, a hallmark of clickbait.' },
  { q: 'Reverse image search is most useful for:', opts: ['Improving photo quality', 'Checking where and when a photo first appeared online', 'Adding filters to an image'], correct: 1, explain: 'Reverse image search can reveal if a photo is old, from a different event, or has been altered from its original context.' },
  { q: 'A post says "scientists say" with no name, journal, or link. You should:', opts: ['Trust it since it mentions scientists', 'Treat it as unverified until a specific source is given', 'Assume it\'s automatically false'], correct: 1, explain: 'Vague appeals to authority aren\'t evidence — the goal is to find the actual source, not assume either way.' },
  { q: 'Which is a sign of a manipulated photo?', opts: ['Consistent shadows across all objects', 'Mismatched lighting or shadow direction on one element', 'A visible photographer credit'], correct: 1, explain: 'Inconsistent lighting/shadows are one of the most common tells that an element was added or moved digitally.' },
  { q: 'An article uses only anonymous "insiders" and "sources" for a dramatic claim. This means:', opts: ['The story is definitely true', 'The claim can\'t be independently verified as presented', 'The story is professionally sourced'], correct: 1, explain: 'Anonymous sourcing isn\'t inherently false, but without any way to verify it, the claim should be held loosely until confirmed elsewhere.' },
  { q: 'The best first step when you see a shocking claim online is to:', opts: ['Share it immediately so others are warned', 'Check if other credible outlets are reporting the same thing', 'Comment your opinion right away'], correct: 1, explain: 'Cross-checking against independent, credible outlets is the fastest reliable way to confirm or debunk a claim.' },
  { q: 'A headline with a countdown like "24 hours left!" on a non-time-sensitive topic is using:', opts: ['False urgency', 'Statistical evidence', 'Peer review'], correct: 0, explain: 'Manufactured urgency pressures you to act (click, share, buy) before you can think critically.' },
  { q: 'Which is the strongest indicator of a credible scientific claim?', opts: ['It has a dramatic title', 'It\'s published with methodology and data available for review', 'It has many social media shares'], correct: 1, explain: 'Shares and dramatic titles say nothing about accuracy — open methodology and data allow real scrutiny.' },
  { q: 'A cropped photo removes context showing the full scene. This is a form of:', opts: ['Standard editing for style', 'Manipulation through selective framing', 'Copyright protection'], correct: 1, explain: 'Removing surrounding context can completely change how a viewer interprets an image, even without altering pixels.' },
  { q: 'When in doubt about a source, the most reliable approach is to:', opts: ['Trust your gut feeling only', 'Check the "About" page, author credentials, and cross-reference other outlets', 'Judge based on the website\'s color scheme'], correct: 1, explain: 'Author credentials, an "About" page, and cross-referencing form the practical checklist real fact-checkers use.' },
];

export const finalItems = [
  { label: 'Headline', text: '"Panaderyang lokal sa Bulacan, panalo sa regional award for third year"', real: true },
  { label: 'Headline', text: '"Itong isang trick na ito, PANGHABANG-BUHAY na ang baterya ng phone mo"', real: false },
  { label: 'Source', text: 'official-gov-updates-ph2024.net posts unsourced policy leak', real: false },
  { label: 'Source', text: 'pna.gov.ph reports quarterly economic data with linked report', real: true },
  { label: 'Post', text: 'Anonymous forward sa GC: "magsasara na ang lahat ng branch" walang link', real: false },
  { label: 'Post', text: 'Verified UP/Ateneo account links published, peer-reviewed study', real: true },
  { label: 'Image claim', text: 'Photo shows perfectly consistent shadows across the whole scene', real: true },
  { label: 'Image claim', text: 'Photo shows one object with a shadow facing the wrong way', real: false },
];

export const imageSets = [
  {
    key: 'crowd',
    label: 'Crowd Size',
    original: '/images/crowd-original.jpg',
    manipulated: '/images/crowd-manipulated.jpg',
    hint: 'Look near the right side of the crowd — a patch of heads and lights repeats pixel-for-pixel, a telltale sign of a cloned section used to make the crowd look bigger than it was.',
  },
  {
    key: 'skyline',
    label: 'Skyline Object',
    original: '/images/skyline-original.jpg',
    manipulated: '/images/skyline-manipulated.jpg',
    hint: 'Look closely at the tall spire tower in the middle — it was scaled up in place, so it now reads taller and slightly wider than it should next to its neighbors. The giveaway: its window rows are stretched compared to the buildings right beside it, and its proportions no longer quite match its own base.',
  },
  {
    key: 'chicken',
    label: 'Product Shot',
    original: '/images/chicken-original.jpg',
    manipulated: '/images/chicken-manipulated.jpg',
    hint: 'Look near the top of the chicken pile — one piece was cloned, rotated, and pasted in to make the serving look fuller. Notice the faint soft edge (halo) around it where it doesn\'t quite blend with the lighting of the rest of the pile.',
  },
];

export const badgeDefs = [
  { key: 'pretest', icon: '\u{1F4DD}', label: 'Baseline Set' },
  { key: 'lab', icon: '\u{1F50D}', label: 'Source Sleuth' },
  { key: 'detective', icon: '\u{1F575}\u{FE0F}', label: 'Fact Detective' },
  { key: 'clickbait', icon: '\u{1F3A3}', label: 'Bait Buster' },
  { key: 'images', icon: '\u{1F5BC}\u{FE0F}', label: 'Pixel Inspector' },
  { key: 'scenarios', icon: '\u{1F4F1}', label: 'Feed Navigator' },
  { key: 'quiz', icon: '\u{1F393}', label: 'Quiz Ace' },
];

export const moduleNames = {
  pretest: 'Pre-Test',
  lab: 'Source Verification Lab',
  detective: 'Fake News Detective',
  clickbait: 'Clickbait Challenge',
  images: 'Image Investigation',
  scenarios: 'Scenario Simulator',
  quiz: 'Post-Test',
};
