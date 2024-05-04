//complete this code
class Animal {
	constructor(species) {
		this.species =species;
	}
	get getSpecies() {
		return this.species;
	}
	makeSound() {
		console.log("makes a sound");
	}
}

class Dog extends Animal {
	constructor(name){
		super(name);
	}
	makeSound() {
		console.log(this.name+" makes a sound");
	}
	bark() {
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(name){
		super(name);
	}
	makeSound() {
		console.log(this.name+" makes a sound");
	}
	purr() {
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
