class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.creator = null;
    this.offspring = [];
  }

  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  vampireWithName(name) {
    // console.log(name);
    if (this.name === name) {
      // return this;
      console.log("Found it", name);
    }
    for (const baby of this.offspring) {
      console.log("This is baby log", baby.name);
      const isbaby = baby.vampireWithName(name);
      // if (isbaby) {
      //   return console.log("This is isbaby log", isbaby.name);
      //   // return isbaby;
      // }
    }
    return null;
  }
}
rootVampire = new Vampire("root");
let offspring1, offspring2, offspring3, offspring4, offspring5;
offspring1 = new Vampire("andrew");
offspring2 = new Vampire("sarah");
offspring3 = new Vampire("c");
offspring4 = new Vampire("d");
offspring5 = new Vampire("e");
rootVampire.addOffspring(offspring1);
offspring1.addOffspring(offspring2);
rootVampire.addOffspring(offspring3);
offspring3.addOffspring(offspring4);
offspring4.addOffspring(offspring5);

rootVampire.vampireWithName(offspring2.name);
