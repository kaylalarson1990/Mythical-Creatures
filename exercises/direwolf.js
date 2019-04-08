class Direwolf {
  constructor(name, home = "Beyond the Wall", size = "Massive") {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    if(this.home === stark.location) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWhalkers = false;
    }
    if(this.starksToProtect.length > 2) {
      this.starksToProtect.pop();
    }
  }
}

module.exports = Direwolf;

// npm test mythical-creatures/test/direwolf-test.js