// Binary Studio Academy
// Hometask #1.1 - прототипное наследование
// student: Vasyl Prokopyshyn

var Man = function (name, age) {
  this.name = name;
  this.age = age;
}

Man.prototype.live = function() {
	return this.name + " is " + this.age + " years old.";
	}

var Student = function(name, age) {
   Man.apply(this, arguments);
}

Student.prototype = Object.create(Man.prototype);

Student.prototype.study = function() {
  return this.name + " is a student" ;
}

var sam = new Man("Sam", 45);
var john = new Student("John", 25);

console.log(sam.live());
console.log(john.study());
console.log(john.live());

var duckType = function(person) {
  if (typeof person.study === "function") {
      return Student;
  } else if (typeof person.live === "function") {
      return Man;
  } else {
    throw "Unsupported type";
  }
};

console.log(duckType(sam));
console.log(duckType(john));