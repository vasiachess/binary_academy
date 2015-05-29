// Binary Studio Academy
// Hometask #1.1
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

var sam = Object.create(Student).constructor("Sam", 23);
var john = Object.create(Man).constructor("John", 45);

console.log(john.live());
console.log(sam.study());

var duckType = function(person) {
  if (typeof person.study === "function") { 
      return Student;
  } else if (typeof person.live === "function") {
      return Man;
  } else {
    throw "Unsupported type";
  }	
};

var v = duckType(sam);
console.log(v);

duckType(john);

