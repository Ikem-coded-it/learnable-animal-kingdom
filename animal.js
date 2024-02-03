// Base class Animal
class Animal {
  constructor(name, backbone, bloodType) {
    if(this.constructor === Animal)
      throw new Error("Cannot instantiate this class diractly")
    this.name = name;
    this.backbone = backbone;
    this.bloodType = bloodType;
  }

  // Encapsulation: Add a # symbol to make methods private to the class
  #getName() {
    return this.name;
  }

  #getBackbone() {
    return this.backbone;
  }

  #getBloodType() {
    return this.bloodType;
  }

  // Abstraction: Display general information about the animal
  displayInfo() {
    console.log("===========================================================")
    console.log(`Name: ${this.#getName()}`);
    console.log(`Backbone: ${this.#getBackbone()}`);
    console.log(`Blood Type: ${this.#getBloodType()}`);
  }

  // Polymorphism: Overridable method for specific actions of each animal
  makeSound() {
    console.log("Generic animal sound");
  }
}

// Inheritance: Create subclasses for each animal category

// Arthropoda class
class Arthropoda extends Animal {
  constructor(name) {
    super(name, false, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Arthropoda
  makeSound() {
    console.log("Sound: Scuttling sound");
  }
}

// Fish class
class Fish extends Animal {
  constructor(name) {
    super(name, true, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Fish
  makeSound() {
    console.log("Sound: Bubble and gurgle sound");
  }
}

// Amphibia class
class Amphibia extends Animal {
  constructor(name) {
    super(name, true, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Amphibia
  makeSound() {
    console.log("Sound: Croak sound");
  }
}

// Reptiles class
class Reptiles extends Animal {
  constructor(name) {
    super(name, true, "Cold-Blooded");
  }

  // Polymorphism: Override makeSound method for Reptiles
  makeSound() {
    console.log("Sound: Hiss sound");
  }
}

// Aves class
class Aves extends Animal {
  constructor(name) {
    super(name, true, "Warm-Blooded");
  }

  // Polymorphism: Override makeSound method for Aves
  makeSound() {
    console.log("Sound: Chirp and sing sound");
  }
}

// Mammals class
class Mammals extends Animal {
  constructor(name) {
    super(name, true, "Warm-Blooded");
  }

  // Polymorphism: Override makeSound method for Mammals
  makeSound() {
    console.log("Sound: Roar and growl sound");
  }
}

// Example usage:

const spider = new Arthropoda("Spider");
spider.displayInfo();
spider.makeSound();

const fish = new Fish("Goldfish");
fish.displayInfo();
fish.makeSound();

const frog = new Amphibia("Frog");
frog.displayInfo();
frog.makeSound();

const snake = new Reptiles("Snake");
snake.displayInfo();
snake.makeSound();

const eagle = new Aves("Eagle");
eagle.displayInfo();
eagle.makeSound();

const tiger = new Mammals("Tiger");
tiger.displayInfo();
tiger.makeSound();
