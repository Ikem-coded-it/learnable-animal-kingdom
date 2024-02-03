# learnable-animal-kingdom

An OOP model of the animal kingdom for learnable program

## Instructions to run

- clone the repository
- run `node animal.js` in the terminal which runs implemetations from line 114

## How I applied OOP principles in the model

- **Inheritance**: The `Arthropoda`, `Fish`, `Amphibia`, `Reptiles`, `Aves`and `Mammals` classes all inherit the properties and methods of the `Animal` class.

- **Encapsulation**: Encapsulation was applied by creating private methods on the `Animal` class to access the `name`, `bloodType` and `backBone` property of an animal from within the class alone. The methods including `#getName()`, `#getBackBone()` and `#getBloodType()` cannot be accessed outside of the class. They can only be accessed through the `displayInfo()` method which is a public method.

- **Abstraction**: Abstraction is applied through the `displayInfo()`method in the animal class which provides a generalized way to display information about an animal.

- **Polymorphism**: This is demonstrated by overriding the `makeSound()` method in each subclass to provide specific behaviors for each type of animal.
