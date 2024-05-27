!function (a, b) { "use strict"; function c(a) { a = a || {}; for (var b = 1; b < arguments.length; b++) { var c = arguments[b]; if (c) for (var d in c) c.hasOwnProperty(d) && ("object" == typeof c[d] ? deepExtend(a[d], c[d]) : a[d] = c[d]) } return a } function d(d, g) { function h() { if (y) { r = b.createElement("canvas"), r.className = "pg-canvas", r.style.display = "block", d.insertBefore(r, d.firstChild), s = r.getContext("2d"), i(); for (var c = Math.round(r.width * r.height / g.density), e = 0; c > e; e++) { var f = new n; f.setStackPos(e), z.push(f) } a.addEventListener("resize", function () { k() }, !1), b.addEventListener("mousemove", function (a) { A = a.pageX, B = a.pageY }, !1), D && !C && a.addEventListener("deviceorientation", function () { F = Math.min(Math.max(-event.beta, -30), 30), E = Math.min(Math.max(-event.gamma, -30), 30) }, !0), j(), q("onInit") } } function i() { r.width = d.offsetWidth, r.height = d.offsetHeight, s.fillStyle = g.dotColor, s.strokeStyle = g.lineColor, s.lineWidth = g.lineWidth } function j() { if (y) { u = a.innerWidth, v = a.innerHeight, s.clearRect(0, 0, r.width, r.height); for (var b = 0; b < z.length; b++)z[b].updatePosition(); for (var b = 0; b < z.length; b++)z[b].draw(); G || (t = requestAnimationFrame(j)) } } function k() { i(); for (var a = d.offsetWidth, b = d.offsetHeight, c = z.length - 1; c >= 0; c--)(z[c].position.x > a || z[c].position.y > b) && z.splice(c, 1); var e = Math.round(r.width * r.height / g.density); if (e > z.length) for (; e > z.length;) { var f = new n; z.push(f) } else e < z.length && z.splice(e); for (c = z.length - 1; c >= 0; c--)z[c].setStackPos(c) } function l() { G = !0 } function m() { G = !1, j() } function n() { switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = { x: Math.ceil(Math.random() * r.width), y: Math.ceil(Math.random() * r.height) }, this.speed = {}, g.directionX) { case "left": this.speed.x = +(-g.maxSpeedX + Math.random() * g.maxSpeedX - g.minSpeedX).toFixed(2); break; case "right": this.speed.x = +(Math.random() * g.maxSpeedX + g.minSpeedX).toFixed(2); break; default: this.speed.x = +(-g.maxSpeedX / 2 + Math.random() * g.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? g.minSpeedX : -g.minSpeedX }switch (g.directionY) { case "up": this.speed.y = +(-g.maxSpeedY + Math.random() * g.maxSpeedY - g.minSpeedY).toFixed(2); break; case "down": this.speed.y = +(Math.random() * g.maxSpeedY + g.minSpeedY).toFixed(2); break; default: this.speed.y = +(-g.maxSpeedY / 2 + Math.random() * g.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? g.minSpeedY : -g.minSpeedY } } function o(a, b) { return b ? void (g[a] = b) : g[a] } function p() { console.log("destroy"), r.parentNode.removeChild(r), q("onDestroy"), f && f(d).removeData("plugin_" + e) } function q(a) { void 0 !== g[a] && g[a].call(d) } var r, s, t, u, v, w, x, y = !!b.createElement("canvas").getContext, z = [], A = 0, B = 0, C = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), D = !!a.DeviceOrientationEvent, E = 0, F = 0, G = !1; return g = c({}, a[e].defaults, g), n.prototype.draw = function () { s.beginPath(), s.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, g.particleRadius / 2, 0, 2 * Math.PI, !0), s.closePath(), s.fill(), s.beginPath(); for (var a = z.length - 1; a > this.stackPos; a--) { var b = z[a], c = this.position.x - b.position.x, d = this.position.y - b.position.y, e = Math.sqrt(c * c + d * d).toFixed(2); e < g.proximity && (s.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), g.curvedLines ? s.quadraticCurveTo(Math.max(b.position.x, b.position.x), Math.min(b.position.y, b.position.y), b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY) : s.lineTo(b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY)) } s.stroke(), s.closePath() }, n.prototype.updatePosition = function () { if (g.parallax) { if (D && !C) { var a = (u - 0) / 60; w = (E - -30) * a + 0; var b = (v - 0) / 60; x = (F - -30) * b + 0 } else w = A, x = B; this.parallaxTargX = (w - u / 2) / (g.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (x - v / 2) / (g.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10 } var c = d.offsetWidth, e = d.offsetHeight; switch (g.directionX) { case "left": this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = c - this.parallaxOffsetX); break; case "right": this.position.x + this.speed.x + this.parallaxOffsetX > c && (this.position.x = 0 - this.parallaxOffsetX); break; default: (this.position.x + this.speed.x + this.parallaxOffsetX > c || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x) }switch (g.directionY) { case "up": this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = e - this.parallaxOffsetY); break; case "down": this.position.y + this.speed.y + this.parallaxOffsetY > e && (this.position.y = 0 - this.parallaxOffsetY); break; default: (this.position.y + this.speed.y + this.parallaxOffsetY > e || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y) }this.position.x += this.speed.x, this.position.y += this.speed.y }, n.prototype.setStackPos = function (a) { this.stackPos = a }, h(), { option: o, destroy: p, start: m, pause: l } } var e = "particleground", f = a.jQuery; a[e] = function (a, b) { return new d(a, b) }, a[e].defaults = { minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: "center", directionY: "center", density: 1e4, dotColor: "#666666", lineColor: "#666666", particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: function () { }, onDestroy: function () { } }, f && (f.fn[e] = function (a) { if ("string" == typeof arguments[0]) { var b, c = arguments[0], g = Array.prototype.slice.call(arguments, 1); return this.each(function () { f.data(this, "plugin_" + e) && "function" == typeof f.data(this, "plugin_" + e)[c] && (b = f.data(this, "plugin_" + e)[c].apply(this, g)) }), void 0 !== b ? b : this } return "object" != typeof a && a ? void 0 : this.each(function () { f.data(this, "plugin_" + e) || f.data(this, "plugin_" + e, new d(this, a)) }) }) }(window, document),/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */
    function () { for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (b) { var c = (new Date).getTime(), d = Math.max(0, 16 - (c - a)), e = window.setTimeout(function () { b(c + d) }, d); return a = c + d, e }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) { clearTimeout(a) }) }();


particleground(document.getElementById('particles-foreground'), {
    dotColor: 'rgba(255, 255, 255, 1)',
    lineColor: 'rgba(255, 255, 255, 0.05)',
    minSpeedX: 0.3,
    maxSpeedX: 0.6,
    minSpeedY: 0.3,
    maxSpeedY: 0.6,
    density: 50000, // One particle every n pixels
    curvedLines: false,
    proximity: 250, // How close two dots need to be before they join
    parallaxMultiplier: 10, // Lower the number is more extreme parallax
    particleRadius: 4, // Dot size
});

particleground(document.getElementById('particles-background'), {
    dotColor: 'rgba(255, 255, 255, 0.5)',
    lineColor: 'rgba(255, 255, 255, 0.05)',
    minSpeedX: 0.075,
    maxSpeedX: 0.15,
    minSpeedY: 0.075,
    maxSpeedY: 0.15,
    density: 30000, // One particle every n pixels
    curvedLines: false,
    proximity: 20, // How close two dots need to be before they join
    parallaxMultiplier: 20, // Lower the number is more extreme parallax
    particleRadius: 2, // Dot size
});

window.addEventListener("DOMContentLoaded", () => {
    const steppers = document.querySelectorAll(".stepper");
    steppers.forEach((stepper, index) => {
        const config = {
            step: 1,
            min: 0,
            value: 0,
        };

        if (index === 0) {
            config.max = 20;
        } else {
            config.max = 100;
        }

        new SlidingStepper(stepper, config);
    });
});

class SlidingStepper {
    constructor(el, args) {
        const { step, min, value, max } = args;

        this.el = el;
        this.step = step !== undefined ? step : 1;
        this.min = min !== undefined ? min : 0;
        this.value = value !== undefined ? value : 0;
        this.max = max !== undefined ? max : 99;
        this.valuePos = 0;
        this.values = [];
        this.posData = [
            "off-left",
            "prev",
            "cur",
            "next",
            "off-right"
        ];

        this.init();
        this.changeValue();

        if (this.el) {
            this.el.addEventListener("click", this.changeValue.bind(this));
            this.el.addEventListener("keydown", this.changeValue.bind(this));
        }
    }

    init() {
        if (this.step < 1 || isNaN(this.step))
            this.step = 1;

        if (this.value < this.min)
            this.value = this.min;
        else if (this.value > this.max)
            this.value = this.max;

        if (this.min > this.max)
            this.min = this.max;

        for (let l = this.value; l >= this.min; l -= this.step)
            this.values.unshift(l);
        this.values.unshift(this.min);

        for (let r = this.value; r <= this.max; r += this.step)
            this.values.push(r);
        this.values.push(this.max);

        this.values = [...new Set(this.values)];
        this.valuePos = this.values.indexOf(this.value);
    }

    changeValue(e) {
        let dir = null;

        if (e) {
            const { key, target } = e;

            if (key) {
                if (key === "ArrowUp" || key === "ArrowRight")
                    dir = "up";
                else if (key === "ArrowDown" || key === "ArrowLeft")
                    dir = "down";
            } else {
                dir = target.getAttribute("data-dir");
            }
        }

        const cl = this.el ? this.el.classList : null;

        if (cl) {
            cl.remove("stepper--move-left", "stepper--move-right");
            void this.el.offsetWidth;
        }

        if (dir === "up" && this.valuePos < this.values.length - 1) {
            ++this.valuePos;
            cl.add("stepper--move-left");
        } else if (dir === "down" && this.valuePos > 0) {
            --this.valuePos;
            cl.add("stepper--move-right");
        }

        this.value = this.values[this.valuePos];
        this.el.value = this.value;

        if (this.el) {
            this.posData.forEach((p, i) => {
                const pos = this.el.querySelector(`[data-pos="${p}"]`);

                if (pos) {
                    const relIndex = this.valuePos + (i - 2);
                    const value = this.values[relIndex];

                    pos.innerText = value !== undefined ? value : "";
                }
            });
        }
    }
}


//character
document
    .getElementById("characterForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(this);

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Construct character sheet
        let characterSheet = "<h2>Character Sheet</h2>";
        formData.forEach(function (value, key) {
            characterSheet += `<p><strong>${key
                .replace(/([A-Z])/g, " $1")
                .trim()}:</strong> ${value}</p>`;
        });

        // Display character sheet
        const characterSheetContainer = document.getElementById("characterSheet");
        characterSheetContainer.innerHTML = characterSheet;

        // Clear form fields
        clearForm();
    });

function validateForm(formData) {
    // Basic validation for required fields
    const requiredFields = [
        "name",
        "class",
        "level",
        "race",
        "alignment",
        "experiencePoints",
        "strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma",
        "hitPoints",
        "armorClass",
        "speed",
        "skills",
        "equipment",
        "features"
    ];
    let isValid = true;

    requiredFields.forEach(function (field) {
        if (!formData.has(field) || formData.get(field).trim() === "") {
            isValid = false;
            alert(`Please fill out the '${field}' field.`);
        }
    });

    return isValid;
}

function clearForm() {
    document.getElementById("characterForm").reset();
}

const racialBonuses = {
    Dwarf: { Constitution: 2 },
    Elf: { Dexterity: 2 },
    Halfling: { Dexterity: 2 },
    Human: { All: 1 },
    Dragonborn: { Strength: 2, Charisma: 1 },
    Gnome: { Intelligence: 2 },
    "Half-Elf": { Charisma: 2 },
    "Half-Orc": { Strength: 2, Constitution: 1 },
    Tiefling: { Intelligence: 1, Charisma: 2 }
    // Add more racial bonuses as needed
};

// Function to update available stat points based on selected race
function updateStatPoints() {
    const raceSelect = document.getElementById("race");
    const selectedRace = raceSelect.value;
    const availablePointsInput = document.getElementById("availablePoints");
    let availablePoints = 27; // Default starting points

    // If a race is selected and racial bonuses are defined, adjust available points
    if (selectedRace && racialBonuses[selectedRace]) {
        const raceBonuses = racialBonuses[selectedRace];
        for (const stat in raceBonuses) {
            // If the race gives a single +2 bonus
            if (raceBonuses[stat] === 2) {
                availablePoints -= 2;
            }
            // If the race gives a single +1 bonus
            else if (raceBonuses[stat] === 1) {
                availablePoints -= 1;
            }
        }
    }

    availablePointsInput.value = availablePoints; // Update the input field
}

const backgroundsInfo = {
    Acolyte: {
        Bonuses: "Skill Proficiency: Insight, Religion",
        Description:
            "You have spent your life in the service of a temple, learning sacred rites and providing assistance to the community."
    },
    Anthropologist: {
        Bonuses: "Skill Proficiency: Insight, Religion",
        Description:
            "You have spent your life in the service of a temple, learning sacred rites and providing assistance to the community."
    }
    // Add more backgrounds and their info here
};

function updateBackgroundInfo() {
    const backgroundSelect = document.getElementById("background");
    const selectedBackground = backgroundSelect.value;
    const backgroundInfoDiv = document.getElementById("backgroundInfo");

    if (selectedBackground && backgroundsInfo[selectedBackground]) {
        const backgroundInfo = backgroundsInfo[selectedBackground];
        const bonuses = backgroundInfo["Bonuses"];
        const description = backgroundInfo["Description"];

        backgroundInfoDiv.innerHTML = `<p><strong>Bonuses:</strong> ${bonuses}</p><p><strong>Description:</strong> ${description}</p>`;
    } else {
        backgroundInfoDiv.innerHTML = ""; // Clear the info if no background is selected
    }
}

/*BURGER*/
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click', function () {
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});