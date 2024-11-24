let gold = 0;
let level = 1;
let xp = 0;
let xpNeeded = 100;
let clickPower = 1;
let attackPower = 5;
let enemyHP = 100;

function updateDisplay() {
    document.getElementById('gold').textContent = gold;
    document.getElementById('level').textContent = level;
    document.getElementById('xp').textContent = xp;
    document.getElementById('xpNeeded').textContent = xpNeeded;
    document.getElementById('enemyHP').textContent = enemyHP;
}

document.getElementById('clickBtn').addEventListener('click', () => {
    gold += clickPower;
    updateDisplay();
});

document.getElementById('attackBtn').addEventListener('click', () => {
    enemyHP -= attackPower;
    if (enemyHP <= 0) {
        xp += 20;
        gold += 10;
        enemyHP = 100 + (level * 10);
        if (xp >= xpNeeded) {
            level++;
            xp = 0;
            xpNeeded = Math.floor(xpNeeded * 1.5);
        }
    }
    updateDisplay();
});

document.getElementById('upgradeClick').addEventListener('click', () => {
    if (gold >= 10) {
        gold -= 10;
        clickPower++;
        updateDisplay();
    }
});

document.getElementById('upgradeAttack').addEventListener('click', () => {
    if (gold >= 20) {
        gold -= 20;
        attackPower += 2;
        updateDisplay();
    }
});

updateDisplay();
