class Dice {
    constructor(sides, input) {
        this.sides = sides;
        input.addEventListener('click', () => { this.rollMulti() })
    }

    set output(string) {
        document.querySelector('.output').textContent = string;
    }

    get multiplier() {
        return Number(document.querySelector('.dice-control__input--count').textContent);
    }

    get mod() {
        return Number(document.querySelector('.dice-control__input--mod').textContent);
    }

    roll() {
        return (Math.floor(Math.random() * this.sides) + 1) + this.mod;
    }

    rollMulti(combineRolls = true) {
        const rolls = Array.from({ length: this.multiplier }, this.roll.bind(this));

        if (combineRolls) {
            const sum = rolls.reduce((a, b) => a + b);
            this.output = `${this.multiplier}${'d' + this.sides} ${this.mod ? (this.mod > 0 ? '+ ' : '- ') + Math.abs(this.mod) : ''} = ${sum}`;
            return sum + this.mod;
        }
        return rolls;
    }
}

const
    d4 = new Dice(4, document.querySelector('.button--d4')),
    d6 = new Dice(6, document.querySelector('.button--d6')),
    d8 = new Dice(8, document.querySelector('.button--d8')),
    d10 = new Dice(10, document.querySelector('.button--d10')),
    d12 = new Dice(12, document.querySelector('.button--d12')),
    d20 = new Dice(20, document.querySelector('.button--d20'))


const count = document.querySelector('.dice-control__input--count');

document.querySelector('#add-count')
    .addEventListener('click', () => { count.textContent = Number(count.textContent) + 1 });

document.querySelector('#sub-count')
    .addEventListener('click', () => { if (count.textContent !== '1') { count.textContent = Number(count.textContent) - 1 } });

const mod = document.querySelector('.dice-control__input--mod');

document.querySelector('#add-mod')
    .addEventListener('click', () => { mod.textContent = Number(mod.textContent) + 1 });

document.querySelector('#sub-mod')
    .addEventListener('click', () => { mod.textContent = Number(mod.textContent) - 1 });

/*BURGER*/
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});