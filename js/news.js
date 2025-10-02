// Artiklite andmed
const articles = {
  1: {
    tag: 'BREAKING',
    tagClass: 'breaking',
    title: "Thaloor Forces Hold Neptunn's First Captured City",
    content: `
      <p>The Thaloor banner still flies above the coastal stronghold, a week after their sudden invasion. Civilians continue to flee, while Thaloor warriors fortify their position with strange magic.</p>
      <p>The city of Crystalport, once a thriving hub of trade and culture, now stands under occupation. Thaloor forces arrived without warning seven days ago, their massive wings darkening the sky as they descended upon the unsuspecting population.</p>
      <p>Local residents describe scenes of chaos and terror as the invaders swept through the streets, their bioluminescent scales casting an eerie glow in the darkness. "We heard nothing, saw nothing, until they were already here," said one elderly merchant who requested anonymity.</p>
      <p>The Thaloor have established checkpoints throughout the city and are using what witnesses describe as "earth magic" to reinforce defensive positions. Walls of stone rise from the ground at their command, and barriers of light shield key locations from potential counterattack.</p>
      <p>Thousands of civilians have fled into the countryside, seeking refuge in nearby settlements. Those who remain live under strict curfews and constant surveillance by their new overlords.</p>
    `
  },
  2: {
    tag: 'URGENT',
    tagClass: 'urgent',
    title: 'Neptunn Resistance Launches Night Raids',
    content: `
      <p>Militias in the hills struck supply caravans bound for the occupied zone. Though small in scale, the attacks prove locals will not submit quietly to Thaloor rule.</p>
      <p>Under cover of darkness, resistance fighters ambushed three separate supply convoys heading toward Crystalport. The raids resulted in the destruction of food stores, weapons, and magical artifacts intended to support the Thaloor occupation forces.</p>
      <p>"We may not have wings or magic, but we know these hills better than any invader ever will," declared a masked resistance leader in a statement released to sympathetic news outlets.</p>
      <p>The attacks have disrupted Thaloor supply lines and forced them to divert troops to escort duty, weakening their hold on urban areas. Military analysts suggest these guerrilla tactics could prove effective if sustained over time.</p>
      <p>Thaloor commanders have responded by increasing patrols and threatening harsh reprisals against any settlements suspected of harboring resistance fighters. The escalation raises fears of further violence against civilian populations.</p>
    `
  },
  3: {
    tag: 'ALERT',
    tagClass: 'alert',
    title: 'Protests Boil Over in Neptunn Capital',
    content: `
      <p>Crowds demand government action. "We are being invaded, and they call themselves victims!" shouted one demonstrator before guards dispersed the rally.</p>
      <p>Tens of thousands gathered in Central Square today, demanding immediate military action to liberate Crystalport and protect other coastal cities from Thaloor aggression. The peaceful demonstration turned tense when government security forces moved to disperse the crowd.</p>
      <p>Protesters carried signs reading "Defend Neptunn Now" and "No Surrender to False Claims." Many expressed frustration with what they perceive as government inaction in the face of clear invasion.</p>
      <p>"They come to our world with weapons and magic, claiming we stole from them centuries ago. Even if it were true—which we deny—how does that justify invading our cities today?" asked student organizer Mira Thendros.</p>
      <p>Government officials have called for calm, stating they are pursuing diplomatic solutions while preparing military options. However, many citizens feel these responses are inadequate given the severity of the threat.</p>
      <p>The protests have spread to other major cities across Neptunn, with similar demonstrations planned for the coming days.</p>
    `
  },
  4: {
    tag: 'UPDATE',
    tagClass: 'update',
    title: 'Meduar Envoys Repeat Denials',
    content: `
      <p>Meduar leaders maintain they never stole the crystal, insisting the war is built on lies. "The truth will come to light," one diplomat vowed in a tense council session.</p>
      <p>In an emergency session of the Inter-Realm Council, Meduar Ambassador Seraphine Veyra delivered an impassioned defense of her people's innocence. Speaking before representatives from dozens of worlds, she categorically denied Thaloor accusations of ancient theft.</p>
      <p>"My people are scholars, seekers of knowledge, guardians of cosmic wisdom," Veyra stated. "We have no need to steal what the universe freely offers to those who seek understanding. The Thaloor claims are fabrications designed to justify their aggression."</p>
      <p>The ambassador pointed to historical records maintained in Meduar archives, which she claims show no evidence of contact with Astra or possession of any Life Crystal. She challenged the Thaloor to produce concrete proof of their allegations.</p>
      <p>"We call upon neutral parties to investigate these claims thoroughly," Veyra continued. "The Akashic Records exist for precisely this purpose—to preserve truth beyond the reach of propaganda and political manipulation."</p>
      <p>Thaloor representatives stormed out of the session, refusing to engage with what they termed "more Meduar lies and misdirection."</p>
    `
  },
  5: {
    tag: 'BREAKING',
    tagClass: 'breaking',
    title: 'Akashic Records Reveal Ancient Theft',
    content: `
      <p>Scholars consulting the timeless Akashic Records uncovered a startling truth—the crystal was never stolen by the Meduars. Instead, it was the Thaloor who seized it centuries ago during their rise to power.</p>
      <p>In a discovery that has sent shockwaves across multiple realms, independent researchers accessing the Akashic Records—the cosmic repository of all universal history—have found evidence contradicting the Thaloor narrative entirely.</p>
      <p>According to the records, the Life Crystal of Astra was not stolen by Meduars three centuries ago. Instead, it was the Thaloor themselves who removed the crystal during an internal power struggle, hiding it to consolidate control over their own people.</p>
      <p>The records show that a faction of Thaloor leaders, seeking to maintain their authority, staged the theft and blamed it on the Meduars—a distant race unlikely to defend themselves effectively due to their pacifist nature and remote location.</p>
      <p>Dr. Kellen Morvus, the lead scholar who uncovered these findings, stated: "The evidence is irrefutable. The Akashic Records cannot be altered or falsified—they simply are. What we're seeing is a centuries-old deception finally coming to light."</p>
      <p>The revelation has placed the Thaloor leadership in an untenable position, with many questioning the legitimacy of their current invasion of Neptunn.</p>
    `
  },
  6: {
    tag: 'BREAKING',
    tagClass: 'breaking',
    title: 'Truth Rocks the Realms',
    content: `
      <p>This revelation casts the Thaloor invasion in a new light. Far from reclaiming stolen heritage, they may be waging war to hide their own ancient crime. Citizens now question: has all this bloodshed been built on a lie?</p>
      <p>The implications of the Akashic Records discovery have reverberated across all inhabited worlds. What began as a seemingly justified war of reclamation has been exposed as potentially the greatest deception in recent galactic history.</p>
      <p>On Neptunn, the revelation has galvanized the resistance movement. "We knew we hadn't done anything wrong," said resistance commander Jana Stormwind. "Now the universe knows it too. The Thaloor are the invaders, the liars, the thieves."</p>
      <p>Inter-realm diplomats are calling for immediate ceasefire negotiations and withdrawal of Thaloor forces from occupied territories. Several neutral worlds have threatened sanctions if the Thaloor continue their aggression in light of the new evidence.</p>
      <p>Among the Thaloor people themselves, the news has created divisions. Younger Thaloor, especially those like Eryon who carry the light of Astra within them, are demanding answers from their leaders. Some have reportedly refused to participate in further military action.</p>
      <p>"If this is true—if our entire cause is built on a lie—then what have we become?" wrote one anonymous Thaloor soldier in a leaked communication. "Are we liberators or conquerors? Heroes or villains?"</p>
      <p>The Inter-Realm Council has announced an emergency tribunal to examine the evidence and determine appropriate responses to the Thaloor invasion.</p>
    `
  },
  7: {
    tag: 'URGENT',
    tagClass: 'urgent',
    title: 'Thaloor Leaders Silent After Revelation',
    content: `
      <p>When pressed about the records, Thaloor commanders gave no comment. In the occupied city, their soldiers remain on edge, their banners fluttering like shadows against the dawn.</p>
      <p>In the wake of the Akashic Records revelation, Thaloor military and political leadership have maintained a conspicuous silence. Repeated attempts by journalists and diplomats to obtain comment have been met with refusals or threats.</p>
      <p>In Crystalport, the occupied city, Thaloor soldiers appear increasingly uncertain. Witnesses report heated arguments among the occupiers, with some questioning their orders and others doubling down on their mission.</p>
      <p>"You can see it in their eyes," said one local resident who has remained in the city. "They don't know what they're fighting for anymore. Some look angry, some look confused, but none of them look confident like they did when they first arrived."</p>
      <p>Military analysts suggest the Thaloor leadership faces a critical decision: acknowledge the truth and withdraw, potentially facing prosecution for war crimes, or continue the invasion and become pariahs in the inter-realm community.</p>
      <p>Meanwhile, Thaloor banners still fly over Crystalport, but they flutter in the wind like ghosts of a cause that may never have existed. The question now is not whether the Thaloor will leave, but how much more damage will be done before they do.</p>
      <p>As dawn breaks over the occupied city, the future remains uncertain for both occupiers and occupied alike.</p>
    `
  }
};

// Hangi modali elemendid
const modal = document.getElementById('articleModal');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

// Lisa klikkimise sündmus igale uudisekaardile
document.querySelectorAll('.news-card').forEach(card => {
  card.addEventListener('click', function () {
    const articleId = this.getAttribute('data-article');
    openModal(articleId);
  });
});

// Lisa klikkimise sündmus "loe edasi" nuppudele
document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const articleId = this.closest('.news-card').getAttribute('data-article');
    openModal(articleId);
  });
});

// Ava modaal
function openModal(articleId) {
  const article = articles[articleId];
  if (article) {
    modalTag.textContent = article.tag;
    modalTag.className = 'news-tag ' + article.tagClass;
    modalTitle.textContent = article.title;
    modalBody.innerHTML = article.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Sulge modaal X nupuga
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

// Sulge modaal väljast klikkides
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Sulge modaal Escape klahviga
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
