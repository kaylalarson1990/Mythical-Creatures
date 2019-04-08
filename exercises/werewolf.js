class Werewolf {
  constructor(name, location, human = true) {
    this.name = name;
    this.location = location;
    this.human = human;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }
  eat(person) {
    if(this.hungry) {
      person.alive = false;
      this.change();
    }
  }
}

module.exports = Werewolf;

// npm test mythical-creatures/test/werewolf-test.js