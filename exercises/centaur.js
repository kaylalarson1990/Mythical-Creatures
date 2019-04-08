class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.event = 0;
    this.rested = true;
  }
  shoot() {
    this.event++;
    this.cranky = this.event >= 3;
    return this.cranky || this.layingDown ? "NO!" : "Twang!!!"
  }
  run() {
    this.event++;
    this.cranky = this.event >= 3;

    return this.layingDown ? "NO!" : "Clop clop clop clop!!!"
  }
  sleep() {
    if(this.layingDown) {
      this.cranky = false;
      this.event = 0;
    }
    return this.layingDown ? "ZZZZ" : "NO!";
  }
  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;

  }
  standUp(){
    this.layingDown = !this.layingDown;
    this.standing = !this.standing;
  }
  drinkPotion() {
      if(this.standing) {
        this.cranky = !this.cranky
      }
      return "Not while I\'m laying down!"
  }
}

module.exports = Centaur

// npm test mythical-creatures/test/centaur-test.js