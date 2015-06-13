var Application = {};

(function (Application){
    var
        _document,
        _container;
        id = 0;

    Application.init = function(document) {
        _document = document;
        _container = _document.getElementById('todo-container');

        this.addTaskContainer(_container);
    };

    Application.addTaskContainer = function(baseNode) {
        var containerElement = _document.createElement
    };

})(Application);