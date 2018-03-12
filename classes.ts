class Person{
    // Default is Public
    name: string;
    // Private only available within Object
    private type: string = 'Tech Geek';
    // Protected available to Child Classes as well
    protected age: number =33;

     // Second Param is a shortcut for creating a property as well as assigning value.
    constructor(name:string, public username: string){
        this.name = name;
    }
    printAge(){
      console.log(this.age);
    }
    setType(type:string){
        this.type=type;
    }
    getType(){
        console.log(this.type);
        return this.type;
    }
}

const person = new Person('KD','gauravkds');
console.log(person.name, person.username);
person.printAge();
person.setType('Cool Guy');
person.getType();

//Inheritance
class KD extends Person{
    name = 'KD';

    constructor(){
        super('Anna','KD');
        this.age = 25;
        console.log(this.getType(),'Type');
    }
}

const kd = new KD();
console.log(kd);

// Getters and Setters
class Cars{
    private vin: string= 'Default';

    get VIN(){
        return this.vin;
    }

    set VIN(value:string){
        if(value.length>15){
            this.vin=value;
        }
    }
}

let cars = new Cars();
console.log(cars.VIN);
cars.VIN = 'ASDGCKEE782';
console.log(cars.VIN);

// Static Properties & Methods
class Helpers{
    // Making property accessible outside without instantiating the object
    static PI: number = 3.14;
    static calcCircumference(diameter: number):number {
        return this.PI*diameter;
    }
}
console.log(2*Helpers.PI);
console.log(Helpers.calcCircumference(3));

// Abstract Classes
abstract class Project{
    projectName: string = 'My PMP';
    budget:number = 10000;

    calcBudget(){
        return this.budget*3;
    }

    abstract changeName(name:string):void;
}

class TypeProject extends Project{

    changeName(name:string): void{
        this.projectName = name;
    }
}

const newProject = new TypeProject();
console.log(newProject);
newProject.changeName('Super Typescript Project');
console.log(newProject);

// Private Constructors (Singleton to share same values throughout Application)
class Singleton {
    private static instance: Singleton;
    // Readonly is shown only for Demonstration, not required for Singleton
    public readonly age:number = 33;
    private constructor(public name:string){}

    static getInstance(){
        console.log(Singleton.instance);
        if(!Singleton.instance){
            console.log('Creating Instance')
            Singleton.instance = new Singleton('The Only One Instance');
        }
        return Singleton.instance;
    }
}
const singleInstance = Singleton.getInstance();
singleInstance.name = 'Changed Name';
const sinlgeInstance = Singleton.getInstance();