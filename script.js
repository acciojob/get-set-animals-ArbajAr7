//complete this code
class Animal {
	constructor(species) {
		this.species =species;
	}
	get getSpecies() {
		return this.species;
	}
	makeSound() {
		console.log("The Siamese makes a sound");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	makeSound() {
		console.log(this.species+" makes a sound");
	}
	bark() {
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	makeSound() {
		console.log(this.species+" makes a sound");
	}
	purr() {
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
