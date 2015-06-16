var Application = {};

(function (Application){
    var
        _document,
        _$container;
        id = 0;

    Application.init = function(document) {
        _document = document;
        _$container = $('#goods-container');

        this.addGoodsContainer(_$container);

        _$container.click($.proxy(this.containerOnClick, this));
    };

    Application.addGoodsContainer = function($baseNode) {

        var id = this.nextId();

        $baseNode.append($('<ul id="' + id + '"></ul>'));
        $baseNode.append($('<input type="text" id="inputTxt" data-task-container-id="' + id + '"></input>'));
        $baseNode.append($('<button data-action="AddGoods" data-task-container-id="' + id + '">Add</button>'));

    };

    Application.containerOnClick = function(evt) {

        if (evt.target.hasAttribute('data-action')) {

            switch (evt.target.getAttribute('data-action')) {
                case "AddGoods": this.onAddGoods(_$container); break;
                case "DeleteGoods": this.onDeleteGoods(evt); break;

            }
        }
    };

    Application.onAddGoods = function($baseNode) {

        var id = this.nextId();
            $newGoods = $('<ul id="' + id + '"></ul>'),
            $inputNew = $('<input data-task-id:"' + id + '"/>').attr({ type: 'text', name:'text', value:inputTxt.value, id:'currentInput'}).prop('disabled', true);

        console.log("addGoods id: " + id);

        $newGoods.append('<input type="checkbox" data-goods-id="' + id + '"></input>');
        $newGoods.append($inputNew);
        $newGoods.append('<button data-action="DeleteGoods" data-goods-id="' + id + '">x</button>');

        $baseNode.append($newGoods);

    };

    Application.onDeleteGoods = function(evt) {
        $('#' + $(evt.target).attr('data-goods-id')).remove();
    };

    Application.proxy = function(hander, owner) {
        return handler.bind(owner);
    };

    Application.nextId = function() {
        return id++;
    };


})(Application, jQuery);