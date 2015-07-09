window.onload = function() {

    var ch = false;

    function Model(person) {
        this.name = person.name;
        this.age = person.age;
        this.year = person.year;
        this.examsTaken = person.examsTaken;
        this.changed = person.changed;
    };

    Model.prototype = {
        constructor: Model,
        takeExam:function(){
            this.examsTaken++;
            this.changed = true;
            ch = true;
        }
    }

    function Controller(action){
        this.model = action.model;
        this.elementId = action.elementId;

    };

    Controller.prototype = {
        constructor: Controller,
        render: function(){
            return '<span style="margin-right: 10px;">' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
        },

        updateExams: function(){
            this.model.takeExam();
        },

        checkChange: function() {
            console.log("checkChange:" + ch);
             if (ch == true) {
                 this.render();
                 ch = false;
             }
            //setTimeout(this.checkChange(), 100);
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
        changed: true,
        takeExam: function(){
            this.examsTaken++;
            this.changed = true;

        }
    });

    var StudentController = new Controller({
        model: Student,
        elementId: 'student-container',
        render: function(){
            return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
        },
        clickHandlers: {
            'student-exams-button': 'updateExams'
        },
        updateExams: function(){
            this.model.takeExam();
        }


    });


    View();

    $(document).ready(function() {
        $("#student-exams-button").click(function () {
            StudentController.updateExams();
            StudentController.checkChange();
            console.log(Student.examsTaken);
            console.log(ch);
        });
    });

    StudentController.render();
    StudentController.checkChange();
    StudentController.checkChange();
    Student.takeExam();

    StudentController.updateExams();
    console.log(Student.examsTaken);

}