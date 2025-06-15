const character = {
      name: "Snortleblat",
      class: "Swamp Beast Diplomat",
      level: 5,
      health: 100,
      image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
      attacked() {
        if (this.health >= 20) {
          this.health -= 20;
        } else {
            alert('Character Died');
        }
      },
      levelUp() {
        this.level += 1;
        this.health += 20;
      }
    };

    // DOM elements
const imgElem = document.querySelector('.image');
const nameElem = document.querySelector('.name');
const classElem = document.getElementById('class');
const levelElem = document.getElementById('level');
const healthElem = document.getElementById('health');
const logElem = document.getElementById('log');
const attackedBtn = document.getElementById('attacked');
const levelupBtn = document.getElementById('levelup');

// Update function
function updateCard(logMsg = "") {
  imgElem.src = character.image;
  imgElem.alt = character.name;
  nameElem.textContent = character.name;
  classElem.textContent = character.class;
  levelElem.textContent = character.level;
  healthElem.textContent = character.health;
  logElem.textContent = logMsg;
}

// Button event listeners
attackedBtn.addEventListener('click', () => {
  character.attacked();
  updateCard("Ouch! Attacked for 20 damage.");
});
levelupBtn.addEventListener('click', () => {
  character.levelUp();
  updateCard("Level up! +1 level, +20 health.");
});

// Initial render
updateCard();