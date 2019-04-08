class Medusa {
	constructor(name) {
		this.name = name;
		this.statues = [];
	}
  stare(person) {

    this.statues.push(person);
    if(this.statues.length >= 4) {
      this.statues.pop();
    }
  }
}


module.exports = Medusa;

//npm test mythical-creatures/test/medusa-test.js