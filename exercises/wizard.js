class Wizard {
	constructor({name, bearded = true}) {
		this.name = name;
		this.bearded = bearded;
		this.isRested = true;
		this.spellCount = 0;
	}

	incantation(spell){
		return spell.toUpperCase();
	}

	cast() {
		// console.log(this.isRested, this.countSpell);
		this.spellCount++;
		if(this.spellCount >= 3) {
			this.isRested = false;
			return 'I SHALL NOT CAST!';
		}
		return 'MAGIC BULLET';
	}
}

module.exports = Wizard;










//npm test mythical-creatures/test/wizard-test.js



















// class Wizard {
// 	constructor(wizard) {
// 		this.name = wizard.name;
// 		if (wizard.bearded === false) {
// 			this.bearded = false;
// 		} else {
// 			this.bearded = true;
// 		}
// 	}

// 	incantation(spell) {
// 		var upperSpell = spell.toUpperCase();
// 		return upperSpell;
// 	}
// };