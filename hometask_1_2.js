// Binary Studio Academy
// Hometask #1.2
// student: Vasyl Prokopyshyn

var Man = function ()
{
  this.name = name;
  this.age = age;
}


var Student = function(name, age)
{
  this.name = name;
  this.age = age;
  Object.create(Man);
}

Student.prototype.study = function ()
{
  return this.name + " is a student" ;
}

var sam = new Man("Sam", 25);
var John = new Student("John", 45);
