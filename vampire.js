class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.creator = null;
    this.offspring = [];
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampire = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (vampire.creator === null) {
      return false;
    }
    if (this.offspring.length !== 0) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    // console.log(name);
    if (this.name === name) {
      return this;
    }
    for (const baby of this.offspring) {
      const isbaby = baby.vampireWithName(name);
      if (isbaby) {
        return isbaby;
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let countOfDescendents = 0;
    for (const baby of this.offspring) {
      countOfDescendents += baby.totalDescendents + 1;
    }
    return countOfDescendents;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];
    if (this.yearConverted > 1980) {
      vampires.push(this);
    }
    for (const baby of this.offspring) {
      const babyAfter1980 = baby.allMillennialVampires;
      vampires = vampires.concat(babyAfter1980);
    }
    return vampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {}
}

module.exports = Vampire;
