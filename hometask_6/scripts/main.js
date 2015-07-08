window.onload = function() {

    function Model(option) {
        this.name = option.name;
        this.age = option.age;
        this.year = option.year;
        this.examsTaken = option.examsTaken;
    };

    Model.prototype = {
        constructor: Model,
        takeExam:function(){
            this.examsTaken++;
            this.changed = true;
        }
    }





    function Controller(action){
        this.model = action.model;
        this.elementId = action.elementId;

    };

    Controller.prototype = {
        constructor: Controller,
        render: function(){
            return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
        },
        clickHandlers: {
            '#student-exams-button': 'updateExams'
        },
        updateExams: function(){
            this.model.takeExam();
        }
    };


    function View() {
        document.getElementById(StudentController.elementId).innerHTML = StudentController.render();

    }



    var Student = new Model({
        name: 'Piotr',
        age: 22,
        year: 5,
        examsTaken: 2,
    });

    var StudentController = new Controller({
        model: Student,
        elementId: 'student-container'
    });

    View();


    console.log(StudentController.render());
    Student.takeExam();
    StudentController.updateExams()
    console.log(Student.examsTaken);
    StudentController.updateExams()
    console.log(Student.examsTaken);


}