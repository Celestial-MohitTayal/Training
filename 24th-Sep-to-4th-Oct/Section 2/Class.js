class PersonC {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    sayMyName() {
        return this.firstName + " " + this.lastName;
    }
}

const classp1 = new PersonC("Mohit", "Tayal");  // Creating Instance in class

console.log(classp1.sayMyName());  // -> Mohit Tayal

class SuperHeroC extends PersonC {
    //inheriting class
    constructor(fName, lName) {
        super(fName, lName);  // using super keyword
        this.isSuperHero = true;
    }

    fightCrime() {
        console.log("Fighting Crime");
    }
}

const superMan = new SuperHeroC("Tayal", "Mohit");

console.log(superMan.sayMyName()) // -> Tayal Mohit