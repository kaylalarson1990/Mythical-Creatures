class Hobbit {

constructor(name) {
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  this.adult =false;

  }
  celebrateBirthday() {
    this.age++;
    if(this.age >= 33) {
      this.adult = true;
    }

  }
}

module.exports = Hobbit

//npm test mythical-creatures/test/hobbit-test.js










































// class Hobbit {
//   constructor(name, disposition, age) {
//     this.name = name;
//     this.disposition = 'homebody';
//     this.age = 0;
//   this.adult = false;
//   this.isShort = true;
//   this.old = false;
//   this.hasRing = false;
  
//   if(this.name === 'Frodo') {
//     this.hasRing = true;
//   }
  
//    }

//    celebrateBirthday() {
//     this.age++
//   if(this.age >= 33) {
//     this.adult = true;
//   }
//      if(this.age >= 101) {
//       this.old = true;
//     }
      
//    }

// }

// module.exports = Hobbit;

