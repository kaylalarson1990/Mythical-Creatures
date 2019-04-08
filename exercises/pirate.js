class Pirate {
  constructor(name, job) {
  	this.name = name;
  	this.job = job || 'Scallywag';
  	this.cursed = false;
  	this.isCursed = 0;
  	this.booty = 0;

  }
  commitHeinousAct() {
  	this.isCursed++;
  	if(this.isCursed >= 3) {
  		this.cursed = true;
  	}
  }
  robShip() {
  	this.booty = 100;
  	return "YAARRR!";
  }
}


module.exports = Pirate;

// npm test mythical-creatures/test/pirate-test.js