// Binary Studio Academy
// Hometask #1.2 - наследование через конструкцию Object.create()
// student: Vasyl Prokopyshyn

var Man = {

constructor: function (name, age) {
	this.name = name;
	this.age = age;
  return this;
	},

live: function() {
	return this.name + " is " + this.age + "years old.";
	}
};

var Student = Object.create(Man);

Student.constructor = function(name, age)
{
 Man.constructor.apply(this, arguments);
 return this; 
};

Student.study = function() {
	return this.name + " is a student" ;
};

var sam = Object.create(Man).constructor("Sam", 45);
var john = Object.create(Student).constructor("John", 25);

console.log(sam.live());
console.log(john.study());
console.log(john.live());



