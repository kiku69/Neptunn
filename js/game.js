// --- Mängu seisu hoidmine ---
const gameState = {
  currentScreen: 'start',
  selectedFaction: null,
  selectedCharacter: null,
  player: null,
  enemy: null,
  round: 1,
  isPlayerTurn: true,
  battleLog: []
};

// --- Tegelaste andmed ---
const characters = {
  theloarian: [
    {
      id: 'eryon',
      name: 'Eryon',
      role: 'Guard',
      faction: 'theloarian',
      maxHealth: 120,
      maxEnergy: 50,
      attack: 15,
      defense: 20,
      special: {
        name: 'Light Shield',
        damage: 0,
        effect: 'defense',
        value: 15,
        description: "Creates a protective shield from Astra's light"
      }
    },
    {
      id: 'kaelthor',
      name: 'Kaelthor',
      role: 'Warrior',
      faction: 'theloarian',
      maxHealth: 100,
      maxEnergy: 45,
      attack: 25,
      defense: 15,
      special: {
        name: 'Stone Breaker',
        damage: 40,
        effect: 'damage',
        description: 'Devastating strike that breaks stone and shadow'
      }
    },
    {
      id: 'iorath',
      name: 'Iorath',
      role: 'Shaman',
      faction: 'theloarian',
      maxHealth: 90,
      maxEnergy: 60,
      attack: 18,
      defense: 12,
      special: {
        name: 'Energy Surge',
        damage: 25,
        effect: 'energy',
        value: 20,
        description: 'Channels cosmic energy to attack and restore power'
      }
    },
    {
      id: 'lyrrija',
      name: 'Lyrri-Ja',
      role: 'Healer',
      faction: 'theloarian',
      maxHealth: 110,
      maxEnergy: 55,
      attack: 12,
      defense: 18,
      special: {
        name: "Astra's Blessing",
        damage: 0,
        effect: 'heal',
        value: 35,
        description: "Powerful healing from Astra's sacred soil"
      }
    }
  ],
  meduar: [
    {
      id: 'zyphara',
      name: 'Zyphara',
      role: 'Shadow Assassin',
      faction: 'meduar',
      maxHealth: 95,
      maxEnergy: 50,
      attack: 28,
      defense: 10,
      special: {
        name: 'Shadow Strike',
        damage: 45,
        effect: 'damage',
        description: 'Swift assassination from the shadows'
      }
    },
    {
      id: 'morbane',
      name: 'Morbane',
      role: 'Dark Sorcerer',
      faction: 'meduar',
      maxHealth: 85,
      maxEnergy: 65,
      attack: 22,
      defense: 12,
      special: {
        name: 'Soul Drain',
        damage: 30,
        effect: 'drain',
        value: 15,
        description: 'Drains life force to restore own health'
      }
    },
    {
      id: 'vexora',
      name: 'Vexora',
      role: 'Mind Controller',
      faction: 'meduar',
      maxHealth: 100,
      maxEnergy: 55,
      attack: 20,
      defense: 14,
      special: {
        name: 'Mental Assault',
        damage: 28,
        effect: 'stun',
        description: 'Attacks the mind, reducing enemy actions'
      }
    },
    {
      id: 'krellus',
      name: 'Krellus',
      role: 'Void Knight',
      faction: 'meduar',
      maxHealth: 115,
      maxEnergy: 48,
      attack: 24,
      defense: 16,
      special: {
        name: 'Void Barrier',
        damage: 20,
        effect: 'defense',
        value: 12,
        description: 'Creates a barrier from void energy'
      }
    }
  ]
};

// --- Initsialiseeri mäng ---
function initGame() {
  showScreen('startScreen');
  setupEventListeners();
}

// --- Sündmuste registreerimine ---
function setupEventListeners() {
  // Fraktsiooni valik
  document.querySelectorAll('.faction-card').forEach(card => {
    card.addEventListener('click', () => {
      const faction = card.dataset.faction;
      selectFaction(faction);
    });
  });

  // Tegelase kinnitamine
  document.getElementById('confirmCharacter').addEventListener('click', startBattle);

  // Tegevusnupud
  document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      performAction(action);
    });
  });

  // Mängi uuesti
  document.getElementById('playAgain').addEventListener('click', resetGame);
}

// --- Ekraanihalduse abifunktsioonid ---
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
  gameState.currentScreen = screenId.replace('Screen', '');
}

// --- Fraktsiooni valik ---
function selectFaction(faction) {
  gameState.selectedFaction = faction;
  loadCharacters(faction);
  showScreen('characterScreen');
}

// --- Tegelaste laadimine ---
function loadCharacters(faction) {
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = '';

  const factionChars = characters[faction];
  factionChars.forEach(char => {
    const charCard = document.createElement('div');
    charCard.className = 'character-option';
    charCard.dataset.charId = char.id;
    charCard.innerHTML = `
      <h3>${char.name}</h3>
      <div class="role">${char.role}</div>
      <div class="abilities">
        <p><strong>HP:</strong> ${char.maxHealth} | <strong>Energy:</strong> ${char.maxEnergy}</p>
        <p><strong>Attack:</strong> ${char.attack} | <strong>Defense:</strong> ${char.defense}</p>
        <p><strong>Special:</strong> ${char.special.name}</p>
        <p style="font-size: 0.8rem; opacity: 0.8;">${char.special.description}</p>
      </div>
    `;
    charCard.addEventListener('click', () => selectCharacter(char, charCard));
    grid.appendChild(charCard);
  });
}

// --- Tegelase valik ---
function selectCharacter(character, cardElement) {
  document.querySelectorAll('.character-option').forEach(card => {
    card.classList.remove('selected');
  });

  cardElement.classList.add('selected');
  gameState.selectedCharacter = character;
  document.getElementById('confirmCharacter').disabled = false;
}

// --- Lahingu alustamine ---
function startBattle() {
  // Mängija
  gameState.player = {
    ...gameState.selectedCharacter,
    currentHealth: gameState.selectedCharacter.maxHealth,
    currentEnergy: gameState.selectedCharacter.maxEnergy,
    statusEffects: []
  };

  // Vaenlane vastasfraktsioonist
  const enemyFaction = gameState.selectedFaction === 'theloarian' ? 'meduar' : 'theloarian';
  const enemyChars = characters[enemyFaction];
  const randomEnemy = enemyChars[Math.floor(Math.random() * enemyChars.length)];

  gameState.enemy = {
    ...randomEnemy,
    currentHealth: randomEnemy.maxHealth,
    currentEnergy: randomEnemy.maxEnergy,
    statusEffects: []
  };

  gameState.round = 1;
  gameState.isPlayerTurn = true;
  gameState.battleLog = [];

  showScreen('battleScreen');
  updateBattleUI();
  addBattleMessage('Battle begins! May the strongest prevail!', 'system');
}

// --- Lahingu UI uuendamine ---
function updateBattleUI() {
  // Voor
  document.getElementById('roundNumber').textContent = gameState.round;

  // Mängija
  document.getElementById('playerName').textContent = gameState.player.name;
  updateHealthBar('player', gameState.player.currentHealth, gameState.player.maxHealth);
  updateEnergyBar('player', gameState.player.currentEnergy, gameState.player.maxEnergy);
  updateStatusEffects('player', gameState.player.statusEffects);

  // Vaenlane
  document.getElementById('enemyName').textContent = gameState.enemy.name;
  updateHealthBar('enemy', gameState.enemy.currentHealth, gameState.enemy.maxHealth);
  updateEnergyBar('enemy', gameState.enemy.currentEnergy, gameState.enemy.maxEnergy);
  updateStatusEffects('enemy', gameState.enemy.statusEffects);

  // Tegevusnupud
  updateActionButtons();
}

function updateHealthBar(target, current, max) {
  const percentage = (current / max) * 100;
  document.getElementById(`${target}Health`).style.width = `${percentage}%`;
  document.getElementById(`${target}HealthText`).textContent = `${Math.max(0, current)}/${max}`;
}

function updateEnergyBar(target, current, max) {
  const percentage = (current / max) * 100;
  document.getElementById(`${target}Energy`).style.width = `${percentage}%`;
  document.getElementById(`${target}EnergyText`).textContent = `${Math.max(0, current)}/${max}`;
}

function updateStatusEffects(target, effects) {
  const container = document.getElementById(`${target}Status`);
  container.innerHTML = '';
  effects.forEach(effect => {
    const effectEl = document.createElement('div');
    effectEl.className = 'status-effect';
    effectEl.textContent = effect;
    container.appendChild(effectEl);
  });
}

function updateActionButtons() {
  const buttons = document.querySelectorAll('.action-btn');
  buttons.forEach(btn => {
    const action = btn.dataset.action;
    let energyCost = 0;
    switch (action) {
      case 'attack':
        energyCost = 10;
        break;
      case 'special':
        energyCost = 25;
        break;
      case 'defend':
        energyCost = 5;
        break;
      case 'heal':
        energyCost = 20;
        break;
    }
    btn.disabled = !gameState.isPlayerTurn || gameState.player.currentEnergy < energyCost;
  });
}

// --- Lahingu logi ---
function addBattleMessage(message, type = 'system') {
  const messagesDiv = document.getElementById('battleMessages');
  const messageEl = document.createElement('div');
  messageEl.className = `battle-message ${type}`;
  messageEl.textContent = message;
  messagesDiv.appendChild(messageEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// --- Tegevused ---
function performAction(action) {
  if (!gameState.isPlayerTurn) return;
  gameState.isPlayerTurn = false;

  switch (action) {
    case 'attack':
      performAttack(gameState.player, gameState.enemy, false);
      break;
    case 'special':
      performSpecialAbility(gameState.player, gameState.enemy);
      break;
    case 'defend':
      performDefend(gameState.player);
      break;
    case 'heal':
      performHeal(gameState.player);
      break;
  }

  updateBattleUI();

  // Kontrolli, kas vaenlane langes
  if (gameState.enemy.currentHealth <= 0) {
    setTimeout(() => endBattle(true), 1000);
    return;
  }

  // Vaenlase käik
  setTimeout(() => {
    enemyTurn();
  }, 1500);
}

// --- Võitlusloogika ---
function performAttack(attacker, defender, isEnemy) {
  const energyCost = 10;
  attacker.currentEnergy -= energyCost;

  const baseDamage = attacker.attack;
  const defense = defender.defense;
  const damage =
    Math.max(5, baseDamage - Math.floor(defense * 0.5) + Math.floor(Math.random() * 10) - 5);

  defender.currentHealth -= damage;

  addBattleMessage(
    `${attacker.name} attacks ${defender.name} for ${damage} damage!`,
    isEnemy ? 'enemy' : 'player'
  );
}

function performSpecialAbility(attacker, defender) {
  const energyCost = 25;
  attacker.currentEnergy -= energyCost;
  const special = attacker.special;

  switch (special.effect) {
    case 'damage': {
      const damage = special.damage + Math.floor(Math.random() * 10) - 5;
      defender.currentHealth -= damage;
      addBattleMessage(
        `${attacker.name} uses ${special.name} for ${damage} damage!`,
        attacker === gameState.player ? 'player' : 'enemy'
      );
      break;
    }

    case 'defense': {
      attacker.statusEffects.push('Protected');
      const tempDefense = special.value;
      attacker.defense += tempDefense;
      addBattleMessage(
        `${attacker.name} uses ${special.name}! Defense increased by ${tempDefense}!`,
        attacker === gameState.player ? 'player' : 'enemy'
      );
      setTimeout(() => {
        attacker.defense -= tempDefense;
        attacker.statusEffects = attacker.statusEffects.filter(e => e !== 'Protected');
      }, 3000);
      break;
    }

    case 'heal': {
      const healing = special.value;
      attacker.currentHealth = Math.min(attacker.maxHealth, attacker.currentHealth + healing);
      addBattleMessage(
        `${attacker.name} uses ${special.name}! Restored ${healing} HP!`,
        attacker === gameState.player ? 'player' : 'enemy'
      );
      break;
    }

    case 'energy': {
      const damage2 = special.damage;
      defender.currentHealth -= damage2;
      attacker.currentEnergy = Math.min(attacker.maxEnergy, attacker.currentEnergy + special.value);
      addBattleMessage(
        `${attacker.name} uses ${special.name} for ${damage2} damage and restores ${special.value} energy!`,
        attacker === gameState.player ? 'player' : 'enemy'
      );
      break;
    }

    case 'drain': {
      const drainDamage = special.damage;
      defender.currentHealth -= drainDamage;
      attacker.currentHealth = Math.min(attacker.maxHealth, attacker.currentHealth + special.value);
      addBattleMessage(
        `${attacker.name} uses ${special.name} for ${drainDamage} damage and drains ${special.value} HP!`,
        attacker === gameState.player ? 'player' : 'enemy'
      );
      break;
    }

    case 'stun': {
      const stunDamage = special.damage;
      defender.currentHealth -= stunDamage;
      addBattleMessage(
        `${attacker.name} uses ${special.name} for ${stunDamage} damage!`,
        attacker === gameState.player ? 'player' : 'enemy'
      );
      // NB! Siin võiks lisada ka tegeliku "stun" mehhanismi, kui soovid.
      break;
    }
  }
}

function performDefend(character) {
  const energyCost = 5;
  character.currentEnergy -= energyCost;

  character.statusEffects.push('Defending');
  const defenseBoost = 10;
  character.defense += defenseBoost;

  addBattleMessage(
    `${character.name} takes a defensive stance!`,
    character === gameState.player ? 'player' : 'enemy'
  );

  setTimeout(() => {
    character.defense -= defenseBoost;
    character.statusEffects = character.statusEffects.filter(e => e !== 'Defending');
  }, 2000);
}

function performHeal(character) {
  const energyCost = 20;
  character.currentEnergy -= energyCost;

  const healing = 25 + Math.floor(Math.random() * 10);
  character.currentHealth = Math.min(character.maxHealth, character.currentHealth + healing);

  addBattleMessage(
    `${character.name} heals for ${healing} HP!`,
    character === gameState.player ? 'player' : 'enemy'
  );
}

// --- Vaenlase AI ---
function enemyTurn() {
  const enemy = gameState.enemy;
  const player = gameState.player;

  // Energiataastumine
  enemy.currentEnergy = Math.min(enemy.maxEnergy, enemy.currentEnergy + 8);

  // Lihtne otsustusloogika
  const healthPercentage = (enemy.currentHealth / enemy.maxHealth) * 100;

  if (healthPercentage < 30 && enemy.currentEnergy >= 20 && enemy.special.effect === 'heal') {
    performHeal(enemy);
  } else if (enemy.currentEnergy >= 25 && Math.random() > 0.5) {
    performSpecialAbility(enemy, player);
  } else if (enemy.currentEnergy >= 10) {
    performAttack(enemy, player, true);
  } else {
    performDefend(enemy);
  }

  updateBattleUI();

  // Kontrolli, kas mängija langes
  if (player.currentHealth <= 0) {
    setTimeout(() => endBattle(false), 1000);
    return;
  }

  // Järgmine voor
  setTimeout(() => {
    gameState.round++;
    gameState.isPlayerTurn = true;

    // Mängija energiataastumine
    gameState.player.currentEnergy = Math.min(
      gameState.player.maxEnergy,
      gameState.player.currentEnergy + 8
    );

    updateBattleUI();
    addBattleMessage(`Round ${gameState.round} begins!`, 'system');
  }, 1500);
}

// --- Lahingu lõpetamine ---
function endBattle(playerWon) {
  const resultTitle = document.getElementById('resultTitle');
  const resultMessage = document.getElementById('resultMessage');
  const resultStats = document.getElementById('resultStats');

  if (playerWon) {
    resultTitle.textContent = 'VICTORY!';
    resultTitle.style.color = '#44ff44';
    resultMessage.textContent = `${gameState.player.name} has defeated ${gameState.enemy.name} in an epic battle!`;
  } else {
    resultTitle.textContent = 'DEFEAT';
    resultTitle.style.color = '#ff4444';
    resultMessage.textContent = `${gameState.enemy.name} has proven too powerful. ${gameState.player.name} falls in battle.`;
  }

  resultStats.innerHTML = `
    <p><strong>Battle Duration:</strong> ${gameState.round} rounds</p>
    <p><strong>Your Champion:</strong> ${gameState.player.name} (${gameState.player.role})</p>
    <p><strong>Final HP:</strong> ${Math.max(0, gameState.player.currentHealth)}/${gameState.player.maxHealth}</p>
    <p><strong>Enemy:</strong> ${gameState.enemy.name} (${gameState.enemy.role})</p>
    <p><strong>Enemy HP:</strong> ${Math.max(0, gameState.enemy.currentHealth)}/${gameState.enemy.maxHealth}</p>
  `;

  showScreen('victoryScreen');
}

// --- Taaskäivitamine ---
function resetGame() {
  gameState.selectedFaction = null;
  gameState.selectedCharacter = null;
  gameState.player = null;
  gameState.enemy = null;
  gameState.round = 1;
  gameState.isPlayerTurn = true;
  gameState.battleLog = [];

  document.getElementById('battleMessages').innerHTML = '';
  showScreen('startScreen');
}

// --- Käivitamine lehe laadimisel ---
window.addEventListener('DOMContentLoaded', initGame);
