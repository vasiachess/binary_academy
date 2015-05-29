// Binary Studio Academy
// Hometask #1.1
// student: Vasyl Prokopyshyn

var Man = function (name, age)
{
  this.name = name;
  this.age = age;
}

Man.prototype.live = function() {
	return this.name + " is " + this.age + "years old.";
	}

function extend(clazz) {

}

var Student = function(name, age)
{
   Man.apply(this, arguments);
}

Student.prototype = extend(Man.prototype);

Student.prototype.study = function ()
{
  return this.name + " is a student" ;
}

var sam = new Man("Sam", 25);
var john = new Student("John", 45);

console.log(sam.live());
console.log(john.study());
console.log(john.live());
