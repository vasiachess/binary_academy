var Application = {};

(function (Application){
    var
        _document,
        _$container;
        id = 0;

    Application.init = function(document) {
        _document = document;
        _$container = $('#base-container');

        this.addTaskContainer(_$container);
        _$container.click($.proxy(this.containerOnClick, this));
    };

    Application.addTaskContainer = function($baseNode) {

        var id = this.nextId();

        $baseNode.append($('<ul id="' + id + '"></ul>'));
        $baseNode.append($('<input type="text" data-task-container-id="' + id + '"></input>'));
        $baseNode.append($('<button data-action="AddGood" data-task-container-id="' + id + '">Add</button>'));

        $("#txt").click(function(){
            var $ctrl = $('<input/>').attr({ type: 'checkbox', name:'chk'}).addClass("chk");

            $("#goods-container").append($ctrl);
            $("#goods-container").append(txtPlain.value);
        });
    };

    Application.containerOnClick = function(evt) {
        if (evt.target.hasAttribute('data-action')) {
            switch (evt.target.getAttribute('data-action')) {
                case 'addGood': $("#goods-container").append("one");
            }
        }
    };

    Application.proxy = function(hander, owner) {
        return handler.bind(owner);
    };

    Application.nextId = function() {
        return id++;
    };


})(Application);