"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // Second Param is a shortcut for creating a property as well as assigning value.
    function Person(name, username) {
        this.username = username;
        // Private only available within Object
        this.type = 'Tech Geek';
        // Protected available to Child Classes as well
        this.age = 33;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.getType = function () {
        console.log(this.type);
        return this.type;
    };
    return Person;
}());
var person = new Person('KD', 'gauravkds');
console.log(person.name, person.username);
person.printAge();
person.setType('Cool Guy');
person.getType();
//Inheritance
var KD = /** @class */ (function (_super) {
    __extends(KD, _super);
    function KD() {
        var _this = _super.call(this, 'Anna', 'KD') || this;
        _this.name = 'KD';
        _this.age = 25;
        console.log(_this.getType(), 'Type');
        return _this;
    }
    return KD;
}(Person));
var kd = new KD();
console.log(kd);
// Getters and Setters
var Cars = /** @class */ (function () {
    function Cars() {
        this.vin = 'Default';
    }
    Object.defineProperty(Cars.prototype, "VIN", {
        get: function () {
            return this.vin;
        },
        set: function (value) {
            if (value.length > 15) {
                this.vin = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Cars;
}());
var cars = new Cars();
console.log(cars.VIN);
cars.VIN = 'ASDGCKEE782';
console.log(cars.VIN);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    // Making property accessible outside without instantiating the object
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(3));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'My PMP';
        this.budget = 10000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 3;
    };
    return Project;
}());
var TypeProject = /** @class */ (function (_super) {
    __extends(TypeProject, _super);
    function TypeProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return TypeProject;
}(Project));
var newProject = new TypeProject();
console.log(newProject);
newProject.changeName('Super Typescript Project');
console.log(newProject);
// Private Constructors (Singleton to share same values throughout Application)
var Singleton = /** @class */ (function () {
    function Singleton(name) {
        this.name = name;
        // Readonly is shown only for Demonstration, not required for Singleton
        this.age = 33;
    }
    Singleton.getInstance = function () {
        console.log(Singleton.instance);
        if (!Singleton.instance) {
            console.log('Creating Instance');
            Singleton.instance = new Singleton('The Only One Instance');
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var singleInstance = Singleton.getInstance();
singleInstance.name = 'Changed Name';
var sinlgeInstance = Singleton.getInstance();
